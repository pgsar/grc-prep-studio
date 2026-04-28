/**
 * ============================================================
 *  SCRIPT_PRO.JS — Exam Simulator (v3)
 *  Nuove funzionalità: Modalità Studio, Segnalibri, Filtro Dominio,
 *  Streak giornaliero, Swipe gesture, Back header elegante
 * ============================================================
 */

// ---- Stato globale sessione ----
let currentQuestions = [];
let currentIdx       = 0;
let score            = 0;
let timerInterval;
let myChart          = null;
let domainStats      = {};
let missedQuestions  = [];
let userAnswers      = [];
let isStudyMode      = false;
let _questionsAnsweredThisSession = 0;


// ---- Exam Mode state ----
let examQuestions    = [];
let examAnswers      = {};
let examFlags        = new Set();
let examCurrentIdx   = 0;
let examTimerInterval;
let examPaused       = false;
let examTimeLeft     = 0;
const EXAM_TOTAL     = (typeof APP_CONFIG !== 'undefined' && APP_CONFIG.examTotalQuestions) ? APP_CONFIG.examTotalQuestions : 90;
const EXAM_FREE_MAX  = 30;

// ---- Trend chart ref ----
let _trendChart      = null;

// ---- Swipe gesture state ----
let _touchStartX = 0;
let _touchStartY = 0;

// =============================================================
//  NAVIGAZIONE + SWIPE
// =============================================================

function showSection(id) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function goToHome() {
    updateDashboard();
    showSection('home-section');
    clearInterval(timerInterval);
}

function _enableSwipeBack(sectionId) {
    const el = document.getElementById(sectionId);
    if (!el) return;
    el.addEventListener('touchstart', e => {
        _touchStartX = e.touches[0].clientX;
        _touchStartY = e.touches[0].clientY;
    }, { passive: true });
    el.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].clientX - _touchStartX;
        const dy = Math.abs(e.changedTouches[0].clientY - _touchStartY);
        if (dx > 80 && dy < 60) goToHome();
    }, { passive: true });
}

// =============================================================
//  STREAK GIORNALIERO
// =============================================================

async function _updateStreak() {
    const today     = new Date().toDateString();
    const lastDay   = await Storage.get('last_study_day');
    let streak      = await Storage.getInt('streak', 0);
    if (lastDay === today) return streak;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    streak = (lastDay === yesterday) ? streak + 1 : 1;
    await Storage.set('last_study_day', today);
    await Storage.set('streak', streak);
    return streak;
}

async function _getStreak() {
    const today     = new Date().toDateString();
    const lastDay   = await Storage.get('last_study_day');
    if (!lastDay) return 0;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (lastDay === today || lastDay === yesterday) return await Storage.getInt('streak', 0);
    await Storage.set('streak', 0);
    return 0;
}

// =============================================================
//  SEGNALIBRI
// =============================================================

async function _getBookmarks() {
    return Storage.getJSON('bookmarks', []);
}

async function _toggleBookmark(question) {
    let bookmarks = await _getBookmarks();
    const idx = bookmarks.findIndex(b => b.question === question.question);
    if (idx >= 0) bookmarks.splice(idx, 1);
    else bookmarks.push(question);
    await Storage.setJSON('bookmarks', bookmarks);
    return idx < 0;
}

async function _isBookmarked(question) {
    const bookmarks = await _getBookmarks();
    return bookmarks.some(b => b.question === question.question);
}


// =============================================================
//  FREE QUESTION POOL — 10 per dominio = 30 totali
// =============================================================

function _buildFreePool(domainFilter) {
    const FREE_PER_DOMAIN = APP_CONFIG.freeQuestionsPerDomain || 10;
    let freePool = [];
    if (domainFilter === 'all') {
        APP_CONFIG.domains.forEach(domain => {
            const domainPool = databaseDomande.filter(q =>
                (APP_CONFIG.domainAliases[q.domain] || q.domain) === domain
            );
            const shuffled = [...domainPool].sort(() => 0.5 - Math.random()).slice(0, FREE_PER_DOMAIN);
            freePool = freePool.concat(shuffled);
        });
    } else {
        const pool = databaseDomande.filter(q =>
            (APP_CONFIG.domainAliases[q.domain] || q.domain) === domainFilter
        );
        freePool = [...pool].sort(() => 0.5 - Math.random()).slice(0, FREE_PER_DOMAIN);
    }
    return freePool;
}

// =============================================================
//  QUIZ — AVVIO
// =============================================================

async function startNewQuiz(isReviewMode = false, studyMode = false) {
    isStudyMode = studyMode;
    const selection    = document.getElementById('question-count').value;
    const domainFilter = document.getElementById('domain-filter')?.value || 'all';

    currentIdx = 0; score = 0; userAnswers = []; _questionsAnsweredThisSession = 0;
    domainStats = {};
    APP_CONFIG.domains.forEach(d => { domainStats[d] = { correct: 0, total: 0 }; });

    if (isReviewMode) {
        currentQuestions = [...missedQuestions];
        missedQuestions  = [];
    } else if (domainFilter === 'bookmarks') {
        currentQuestions = await _getBookmarks();
        missedQuestions  = [];
    } else {
        missedQuestions = [];
        let pool = [...databaseDomande];
        if (domainFilter !== 'all') {
            pool = pool.filter(q => (APP_CONFIG.domainAliases[q.domain] || q.domain) === domainFilter);
        }
        const FREE_PER_DOMAIN = APP_CONFIG.freeQuestionsPerDomain || 10;
        let numQ = selection === 'all' ? pool.length : parseInt(selection);

        if (!Paywall.isPremium()) {
            // Versione FREE: 10 domande per dominio, estratte equamente
            // Se filtro dominio specifico: 10 domande da quel dominio
            // Se filtro "all": 10 domande per ogni dominio
            let freePool = [];
            if (domainFilter === 'all') {
                APP_CONFIG.domains.forEach(domain => {
                    const domainPool = databaseDomande.filter(q =>
                        (APP_CONFIG.domainAliases[q.domain] || q.domain) === domain
                    );
                    const shuffled = [...domainPool].sort(() => 0.5 - Math.random()).slice(0, FREE_PER_DOMAIN);
                    freePool = freePool.concat(shuffled);
                });
            } else {
                freePool = [...pool].sort(() => 0.5 - Math.random()).slice(0, FREE_PER_DOMAIN);
            }
            pool = freePool;
            numQ = pool.length;
        }

        currentQuestions = pool.sort(() => 0.5 - Math.random()).slice(0, numQ);
    }

    if (currentQuestions.length === 0) { alert('No questions available for this selection.'); return; }

    await _updateStreak();
    showSection('quiz-section');

    if (!isStudyMode) {
        startTimer(currentQuestions.length * APP_CONFIG.minutesPerQuestion);
        const timerEl = document.getElementById('timer');
        if (timerEl) timerEl.style.display = '';
    } else {
        clearInterval(timerInterval);
        const timerEl = document.getElementById('timer');
        if (timerEl) { timerEl.innerText = '📖 Study'; timerEl.style.display = ''; }
    }

    showQuestion();
    Storage.trackEvent('quiz_start', { mode: studyMode ? 'study' : isReviewMode ? 'review' : 'exam', count: currentQuestions.length });
}


// =============================================================
//  WEAK SPOT MODE
// =============================================================

async function startWeakSpotMode() {
    const history = await Storage.getHistory();
    if (history.length === 0) { alert('Complete at least one session first!'); return; }

    const recent = history.slice(-5);
    const domainScores = {};
    APP_CONFIG.domains.forEach(d => { domainScores[d] = { correct: 0, total: 0 }; });
    recent.forEach(h => {
        if (h.details) {
            Object.keys(h.details).forEach(d => {
                if (domainScores[d]) {
                    domainScores[d].correct += h.details[d].correct || 0;
                    domainScores[d].total   += h.details[d].total   || 0;
                }
            });
        }
    });

    const weakDomains = APP_CONFIG.domains
        .filter(d => domainScores[d].total > 0)
        .map(d => ({ domain: d, pct: domainScores[d].correct / domainScores[d].total }))
        .sort((a, b) => a.pct - b.pct)
        .slice(0, 2)
        .map(x => x.domain);

    if (weakDomains.length === 0) { alert('Not enough data yet. Complete more sessions!'); return; }

    isStudyMode = false;
    currentIdx = 0; score = 0; userAnswers = []; _questionsAnsweredThisSession = 0;
    domainStats = {};
    APP_CONFIG.domains.forEach(d => { domainStats[d] = { correct: 0, total: 0 }; });
    missedQuestions = [];

    const FREE_PER_DOMAIN = APP_CONFIG.freeQuestionsPerDomain || 10;
    let pool = [];
    weakDomains.forEach(domain => {
        const dp = databaseDomande.filter(q => (APP_CONFIG.domainAliases[q.domain] || q.domain) === domain);
        const limit = Paywall.isPremium()
            ? Math.ceil(15 / weakDomains.length)
            : Math.min(FREE_PER_DOMAIN, Math.ceil(15 / weakDomains.length));
        pool = pool.concat([...dp].sort(() => 0.5 - Math.random()).slice(0, limit));
    });

    currentQuestions = pool.sort(() => 0.5 - Math.random());
    if (currentQuestions.length === 0) { alert('No questions available for weak domains.'); return; }

    await _updateStreak();
    showSection('quiz-section');
    startTimer(currentQuestions.length * APP_CONFIG.minutesPerQuestion);
    const timerEl = document.getElementById('timer');
    if (timerEl) timerEl.style.display = '';
    showQuestion();
    Storage.trackEvent('weak_spot_start', { domains: weakDomains, count: currentQuestions.length });
}

// =============================================================
//  EXAM MODE — AVVIO
// =============================================================

async function startExamMode() {
    if (!Paywall.isPremium()) {
        examQuestions = _buildFreePool('all').sort(() => 0.5 - Math.random());
    } else {
        examQuestions = [...databaseDomande].sort(() => 0.5 - Math.random()).slice(0, EXAM_TOTAL);
    }

    if (examQuestions.length === 0) { alert('No questions available.'); return; }

    examAnswers    = {};
    examFlags      = new Set();
    examCurrentIdx = 0;
    examPaused     = false;
    examTimeLeft   = Math.round(examQuestions.length * APP_CONFIG.minutesPerQuestion * 60);

    await _updateStreak();
    showSection('exam-section');
    _startExamTimer();
    _renderExamQuestion();
    Storage.trackEvent('exam_mode_start', { count: examQuestions.length, free: !Paywall.isPremium() });
}

function _startExamTimer() {
    clearInterval(examTimerInterval);
    const display = document.getElementById('exam-timer');
    examTimerInterval = setInterval(() => {
        if (examPaused) return;
        const h = Math.floor(examTimeLeft / 3600);
        const m = Math.floor((examTimeLeft % 3600) / 60);
        const s = examTimeLeft % 60;
        if (display) {
            display.innerText = h > 0
                ? `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`
                : `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
        }
        if (--examTimeLeft < 0) { clearInterval(examTimerInterval); _finishExamMode(); }
    }, 1000);
}

function _renderExamQuestion() {
    const q     = examQuestions[examCurrentIdx];
    const total = examQuestions.length;

    const progressText = document.getElementById('exam-progress-text');
    if (progressText) progressText.innerText = `Question ${examCurrentIdx + 1} of ${total}`;

    const progressBar = document.getElementById('exam-progress-bar');
    if (progressBar) progressBar.style.width = (((examCurrentIdx + 1) / total) * 100) + '%';

    document.getElementById('exam-question-text').innerText = q.question;
    _updateExamFlagIcon();

    if (!q._shuffled) {
        q._shuffled = q.options
            .map((text, i) => ({ text, isCorrect: i === q.answer }))
            .sort(() => Math.random() - 0.5);
    }
    const opts = q._shuffled;
    const saved = examAnswers[examCurrentIdx];

    const container = document.getElementById('exam-options-container');
    container.innerHTML = '';
    opts.forEach(optObj => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = optObj.text;
        if (saved && saved.answerText === optObj.text) {
            btn.style.background = 'var(--accent)';
            btn.style.color = 'white';
        }
        btn.onclick = () => _selectExamAnswer(optObj, btn);
        container.appendChild(btn);
    });
}

function _selectExamAnswer(optObj, clickedBtn) {
    examAnswers[examCurrentIdx] = { answerText: optObj.text, isCorrect: optObj.isCorrect };
    const container = document.getElementById('exam-options-container');
    container.querySelectorAll('.option-btn').forEach(b => {
        b.style.background = '';
        b.style.color = '';
    });
    clickedBtn.style.background = 'var(--accent)';
    clickedBtn.style.color = 'white';
}

function examNavigate(dir) {
    const newIdx = examCurrentIdx + dir;
    if (newIdx < 0 || newIdx >= examQuestions.length) return;
    examCurrentIdx = newIdx;
    _renderExamQuestion();
}

function toggleExamPause() {
    examPaused = !examPaused;
    const overlay = document.getElementById('exam-pause-overlay');
    const btn     = document.getElementById('exam-pause-btn');
    if (overlay) overlay.style.display = examPaused ? 'flex' : 'none';
    if (btn)     btn.innerText = examPaused ? '▶ RESUME' : '⏸ PAUSE';
}

function toggleExamFlag() {
    if (examFlags.has(examCurrentIdx)) examFlags.delete(examCurrentIdx);
    else examFlags.add(examCurrentIdx);
    _updateExamFlagIcon();
}

function _updateExamFlagIcon() {
    const flagged = examFlags.has(examCurrentIdx);
    const icon = document.getElementById('exam-flag-icon');
    if (!icon) return;
    if (flagged) {
        icon.innerHTML = `<rect x="3" y="3" width="18" height="18" rx="4" fill="#f39c12" stroke="#f39c12" stroke-width="2"/>
            <text x="12" y="16" text-anchor="middle" fill="white" font-size="10" font-family="sans-serif">🚩</text>`;
    } else {
        icon.innerHTML = `<rect x="3" y="3" width="18" height="18" rx="4" stroke="#aaa" stroke-width="2" fill="none"/>`;
    }
}

function toggleExamReviewPanel() {
    const panel = document.getElementById('exam-review-panel');
    if (!panel) return;
    const isOpen = panel.style.display !== 'none';
    if (isOpen) { panel.style.display = 'none'; return; }

    const grid = document.getElementById('exam-review-grid');
    // Remove old note if present
    const oldNote = panel.querySelector('.exam-review-note');
    if (oldNote) oldNote.remove();
    grid.innerHTML = '';

    // Celle 1-N (domande free attive)
    for (let i = 0; i < examQuestions.length; i++) {
        const cell = document.createElement('div');
        cell.style.cssText = `
            width:100%; aspect-ratio:1; border-radius:8px; display:flex;
            align-items:center; justify-content:center; font-size:0.75rem;
            font-weight:bold; cursor:pointer; transition:all 0.2s;
            border:2px solid transparent;
        `;
        cell.innerText = i + 1;

        const answered  = examAnswers[i] !== undefined;
        const flagged   = examFlags.has(i);
        const isCurrent = i === examCurrentIdx;

        if (flagged) { cell.style.background = '#f39c12'; cell.style.color = 'white'; cell.title = 'Flagged'; }
        else if (answered) { cell.style.background = 'var(--accent)'; cell.style.color = 'white'; }
        else { cell.style.background = 'rgba(0,0,0,0.05)'; cell.style.color = 'var(--text)'; }
        if (isCurrent) cell.style.border = '2px solid #333';

        cell.onclick = () => {
            examCurrentIdx = i;
            _renderExamQuestion();
            panel.style.display = 'none';
        };
        grid.appendChild(cell);
    }

    // Celle ghost 31-90 (esame reale)
    const ghostCount = EXAM_TOTAL - examQuestions.length;
    for (let i = 0; i < ghostCount; i++) {
        const cell = document.createElement('div');
        cell.className = 'exam-cell-locked';
        cell.style.cssText = `
            width:100%; aspect-ratio:1; border-radius:8px; display:flex;
            align-items:center; justify-content:center; font-size:0.7rem;
        `;
        cell.innerText = examQuestions.length + i + 1;
        cell.title = 'Available in Full version';
        grid.appendChild(cell);
    }

    // Nota esplicativa
    const note = document.createElement('p');
    note.className = 'exam-review-note';
    note.style.cssText = 'font-size:0.78rem; color:#999; text-align:center; margin:8px 0 0;';
    note.innerText = `Free version: ${examQuestions.length} questions. The real AAIR exam has ${EXAM_TOTAL}. Upgrade for full access.`;
    grid.after(note);

    panel.style.display = 'block';
}

function confirmExamExit() {
    if (confirm('⚠️ ABORT EXAM?\nYour progress will be lost.')) {
        clearInterval(examTimerInterval);
        goToHome();
    }
}

function confirmExamSubmit() {
    const answered   = Object.keys(examAnswers).length;
    const unanswered = examQuestions.length - answered;
    const msg = unanswered > 0
        ? `⚠️ You have ${unanswered} unanswered question(s).\nSubmit anyway?`
        : '✅ Submit the exam?';
    if (confirm(msg)) _finishExamMode();
}

async function _finishExamMode() {
    clearInterval(examTimerInterval);
    let correct = 0;
    domainStats = {};
    APP_CONFIG.domains.forEach(d => { domainStats[d] = { correct: 0, total: 0 }; });

    examQuestions.forEach((q, i) => {
        const ans = examAnswers[i];
        const isCorrect = ans ? ans.isCorrect : false;
        q.isCorrect = isCorrect;
        if (isCorrect) correct++;
        _updateDomainScore(q.domain, isCorrect);
    });

    const finalPerc = examQuestions.length > 0 ? Math.round((correct / examQuestions.length) * 100) : 0;
    isStudyMode      = false;
    currentQuestions = examQuestions;
    score            = correct;

    const history = await Storage.getHistory();
    history.push({ date: new Date().toLocaleDateString(), score: finalPerc, details: domainStats });
    if (history.length > APP_CONFIG.maxSessionHistory) history.shift();
    await Storage.setJSON('progress', history);
    await Storage.addTotalQuestions(examQuestions.length);

    Storage.trackEvent('exam_mode_finish', { score: finalPerc, questions: examQuestions.length });
    await _showInterstitialAd();
    showReport(finalPerc);
}

// =============================================================
//  QUIZ — DOMANDA
// =============================================================

async function showQuestion() {
    const q = currentQuestions[currentIdx];

    document.getElementById('progress-text').innerText = `Question ${currentIdx + 1} of ${currentQuestions.length}`;
    document.getElementById('question-text').innerText = q.question;

    const progressBar = document.getElementById('progress-bar');
    if (progressBar) progressBar.style.width = (((currentIdx + 1) / currentQuestions.length) * 100) + '%';

    // Bottone segnalibro
    const bookmarked  = await _isBookmarked(q);
    const bookmarkBtn = document.getElementById('bookmark-btn');
    if (bookmarkBtn) {
        bookmarkBtn.innerText = bookmarked ? '★' : '☆';
        bookmarkBtn.classList.toggle('bookmarked', bookmarked);
        bookmarkBtn.onclick = async () => {
            const added = await _toggleBookmark(currentQuestions[currentIdx]);
            bookmarkBtn.innerText = added ? '★' : '☆';
            bookmarkBtn.classList.toggle('bookmarked', added);
        };
    }

    // Opzioni
    const optionsMapped = q.options
        .map((text, i) => ({ text, isCorrect: i === q.answer }))
        .sort(() => Math.random() - 0.5);

    const container = document.getElementById('options-container');
    container.innerHTML = '';
    optionsMapped.forEach(optObj => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = optObj.text;
        btn.onclick   = () => selectAnswer(optObj.isCorrect, btn, optionsMapped);
        container.appendChild(btn);
    });

    // Rimuovi spiegazione studio precedente
    const explBox = document.getElementById('study-explanation');
    if (explBox) explBox.remove();
}

// =============================================================
//  QUIZ — RISPOSTA
// =============================================================

function selectAnswer(isCorrect, clickedBtn, allOptions) {
    const q       = currentQuestions[currentIdx];
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(b => b.style.pointerEvents = 'none');

    q.isCorrect = isCorrect; q.userAnswerText = clickedBtn.innerText;
    userAnswers.push({ questionIdx: currentIdx, userAnswerText: clickedBtn.innerText, isCorrect });

    if (isCorrect) {
        clickedBtn.classList.add('correct'); score++;
        _updateDomainScore(q.domain, true);
    } else {
        clickedBtn.classList.add('error');
        buttons.forEach(b => { const m = allOptions.find(o => o.text === b.innerText); if (m && m.isCorrect) b.classList.add('correct'); });
        if (!isStudyMode) missedQuestions.push(q);
        _updateDomainScore(q.domain, false);
    }

    const progressBar = document.getElementById('progress-bar');
    if (progressBar) { progressBar.classList.add('progress-active'); setTimeout(() => progressBar.classList.remove('progress-active'), 400); }

    _questionsAnsweredThisSession++;
    if (APP_CONFIG.ads.enabled && _questionsAnsweredThisSession % APP_CONFIG.ads.interstitialEveryN === 0) _showInterstitialAd();

    if (isStudyMode) {
        _showStudyExplanation(q, () => {
            currentIdx++;
            currentIdx < currentQuestions.length ? showQuestion() : finishQuiz();
        });
    } else {
        setTimeout(() => { currentIdx++; currentIdx < currentQuestions.length ? showQuestion() : finishQuiz(); }, 1000);
    }
}

function _showStudyExplanation(q, onNext) {
    const existing = document.getElementById('study-explanation');
    if (existing) existing.remove();

    const explBox = document.createElement('div');
    explBox.id = 'study-explanation';
    explBox.innerHTML = `
        ${q.explanation ? `<div class="study-explanation-box"><strong>💡 Explanation:</strong> ${q.explanation}</div>` : ''}
        <button class="btn-main" style="margin-top:16px;">
            ${currentIdx + 1 < currentQuestions.length ? 'Next Question →' : 'See Results'}
        </button>
    `;
    document.getElementById('options-container').after(explBox);
    explBox.querySelector('.btn-main').onclick = onNext;
}

function _updateDomainScore(domainName, isCorrect) {
    const target = APP_CONFIG.domainAliases[domainName] || domainName;
    if (!domainStats[target]) domainStats[target] = { correct: 0, total: 0 };
    domainStats[target].total++;
    if (isCorrect) domainStats[target].correct++;
}

// =============================================================
//  QUIZ — FINE
// =============================================================

async function finishQuiz() {
    clearInterval(timerInterval);
    const finalPerc = currentQuestions.length > 0 ? Math.round((score / currentQuestions.length) * 100) : 0;

    if (!isStudyMode) {
        const history = await Storage.getHistory();
        history.push({ date: new Date().toLocaleDateString(), score: finalPerc, details: domainStats });
        if (history.length > APP_CONFIG.maxSessionHistory) history.shift();
        await Storage.setJSON('progress', history);
        await Storage.addTotalQuestions(currentQuestions.length);
        await Storage.setMissedQuestions(missedQuestions);
    }

    Storage.trackEvent('quiz_finish', { score: finalPerc, questions: currentQuestions.length, studyMode: isStudyMode });

    // Mostra interstitial AdMob (solo FREE, solo mobile) prima del report.
    // _showInterstitialAd() risolve quando l'ad è chiuso (o subito se non applicabile).
    await _showInterstitialAd();
    showReport(finalPerc);
}

// =============================================================
//  REPORT
// =============================================================

function showReport(perc) {
    showSection('report-section');
    const container = document.getElementById('report-content');
    if (!container) return;

    const passed = perc >= APP_CONFIG.passScore;
    let html = `
        <div style="text-align:center; margin-bottom:20px;">
            <h2 style="font-size:1.8rem; margin-bottom:5px;">${isStudyMode ? '📖 Study Complete!' : 'Quiz Finished!'}</h2>
            <div style="font-size:3rem; font-weight:bold; color:${passed ? 'var(--correct)' : 'var(--error)'}">${perc}%</div>
            ${!isStudyMode ? `<p style="font-size:1.1rem; font-weight:bold;">${passed ? '🎉 EXAM PASSED!' : `❌ EXAM FAILED (Target ${APP_CONFIG.passScore}%)`}</p>` : ''}
        </div>
        <hr style="opacity:0.2; margin:20px 0;">
        <h3 style="margin-bottom:15px;">Review your answers:</h3>
    `;

    currentQuestions.forEach((q, index) => {
        const isMissed = !q.isCorrect;
        html += `
            <div style="margin-bottom:25px; padding:15px; border-radius:10px;
                        background:${isMissed ? '#fff1f0' : '#f6ffed'};
                        border:1px solid ${isMissed ? '#ffa39e' : '#b7eb8f'};
                        border-left:6px solid ${isMissed ? '#dc3545' : '#28a745'};
                        page-break-inside:avoid; width:95%; margin-left:auto; margin-right:auto; display:block; box-sizing:border-box;">
                <p style="font-weight:bold; margin-bottom:8px; color:#333;">Q${index + 1}: ${q.question}</p>
                <p style="font-size:0.95rem; margin-bottom:10px;">
                    ${isMissed ? `<span style="color:#dc3545">❌ <b>Incorrect</b></span><br><span style="color:#28a745">✅ <b>Correct Choice:</b> ${q.options[q.answer]}</span>` : `<span style="color:#28a745">✅ <b>Correct Answer!</b></span>`}
                </p>
                ${q.explanation ? `<div style="margin-top:10px; padding:12px; background:#fff; border-radius:8px; font-size:0.88rem; color:#444; border:1px dashed #ccc;"><strong>💡 Explanation:</strong> ${q.explanation}</div>` : ''}
                <div style="margin-top:8px; font-size:0.75rem; color:#777; font-style:italic;">Domain: ${q.domain}</div>
            </div>
        `;
    });

    html += `<div style="margin-top:30px; display:flex; gap:10px; flex-direction:column;">
        ${!isStudyMode ? `<button onclick="exportPDF(this)" class="btn-main" style="background:#1a73e8;">📄 DOWNLOAD PDF REPORT</button>` : ''}
    </div>`;

    container.innerHTML = html;
}

// =============================================================
//  TIMER
// =============================================================

function startTimer(minutes) {
    let timeLeft = Math.round(minutes * 60);
    const display = document.getElementById('timer');
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        const mins = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;
        if (display) display.innerText = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        if (--timeLeft < 0) { clearInterval(timerInterval); finishQuiz(); }
    }, 1000);
}

// =============================================================
//  EXPORT PDF
// =============================================================

function exportPDF(btn) {
    const element = document.getElementById('report-content');
    if (!element) return;
    const originalText = btn.innerText, originalStyle = element.getAttribute('style');
    btn.innerText = 'GENERATING...'; btn.disabled = true;
    element.style.width = '750px'; element.style.maxHeight = 'none'; element.style.overflow = 'visible'; element.style.background = 'white';
    const opt = {
        margin: [15, 10, 15, 10], filename: `${APP_CONFIG.certName}_Exam_Report.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, letterRendering: true, scrollY: 0 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['css', 'legacy'], avoid: '.pdf-block' },
    };
    setTimeout(() => {
        html2pdf().from(element).set(opt).save()
            .then(() => { element.setAttribute('style', originalStyle); btn.innerText = originalText; btn.disabled = false; })
            .catch(err => { console.error(err); element.setAttribute('style', originalStyle); btn.disabled = false; });
    }, 500);
}

// =============================================================
//  ANALYTICS & GRAFICO
// =============================================================

async function showProgress() {
    showSection('progress-section');
    const history = await Storage.getHistory();
    const totalQuestions = await Storage.getTotalQuestions();
    const streak = await _getStreak();
    const canvas = document.getElementById('performanceChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (myChart) myChart.destroy();

    let dataPoints = APP_CONFIG.domains.map(() => 0);
    if (history.length > 0) {
        const lastSession = history[history.length - 1].details;
        dataPoints = APP_CONFIG.domains.map(d => {
            const stats = lastSession[d] || { correct: 0, total: 0 };
            return stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
        });
    }

    const rank = APP_CONFIG.ranks.find(r => totalQuestions >= r.minQuestions) || APP_CONFIG.ranks[APP_CONFIG.ranks.length - 1];
    const banner = document.getElementById('analytics-level-banner');
    if (banner) {
        banner.innerHTML = `
            <div style="background:${rank.color}; color:white; padding:20px; border-radius:15px; text-align:center; margin-bottom:20px; box-shadow:0 4px 15px rgba(0,0,0,0.1);">
                <h3 style="margin:0; font-size:0.8rem; opacity:0.9; text-transform:uppercase; letter-spacing:1px;">Current Rank</h3>
                <div style="font-size:1.8rem; font-weight:900;">${rank.label}</div>
                <div style="font-size:0.9rem; margin-top:5px; opacity:0.9;">${totalQuestions} Questions Answered</div>
                ${streak > 0 ? `<div style="margin-top:8px; font-size:0.85rem; background:rgba(255,255,255,0.2); border-radius:20px; padding:4px 12px; display:inline-block;">🔥 ${streak} day streak</div>` : ''}
            </div>`;
    }

    myChart = new Chart(ctx, {
        type: 'radar',
        data: { labels: APP_CONFIG.domainLabels, datasets: [{ label: 'Performance %', data: dataPoints, backgroundColor: APP_CONFIG.chartColor + '33', borderColor: APP_CONFIG.chartColor, borderWidth: 2 }] },
        options: { responsive: true, maintainAspectRatio: false, scales: { r: { beginAtZero: true, max: 100, min: 0, ticks: { display: false }, pointLabels: { font: { size: 11, weight: 'bold' } } } }, plugins: { legend: { display: false } } },
    });


    // Score Trend chart
    const trendCanvas = document.getElementById('trendChart');
    const trendWrapper = document.getElementById('trendChartWrapper');
    if (trendCanvas && trendWrapper) {
        if (_trendChart) _trendChart.destroy();
        if (history.length > 1) {
            const labels = history.map((h, i) => h.date || `Session ${i + 1}`);
            const scores = history.map(h => h.score);
            _trendChart = new Chart(trendCanvas.getContext('2d'), {
                type: 'line',
                data: {
                    labels,
                    datasets: [{
                        label: 'Score %',
                        data: scores,
                        borderColor: APP_CONFIG.chartColor,
                        backgroundColor: APP_CONFIG.chartColor + '22',
                        borderWidth: 2,
                        tension: 0.3,
                        fill: true,
                        pointRadius: 4,
                    }]
                },
                options: {
                    responsive: true, maintainAspectRatio: false,
                    scales: {
                        y: { beginAtZero: true, max: 100, ticks: { callback: v => v + '%' } },
                        x: { ticks: { maxTicksLimit: 6 } }
                    },
                    plugins: { legend: { display: false } }
                }
            });
            trendWrapper.style.display = '';
        } else {
            trendWrapper.style.display = 'none';
        }
    }

    const adviceBox = document.getElementById('ai-advice');
    if (adviceBox) {
        let statsHtml = `<h4 style="margin-top:0; color:#333;">💡 Study Advice</h4>`;
        if (history.length > 0) {
            const lowIdx = dataPoints.indexOf(Math.min(...dataPoints));
            statsHtml += `<p style="margin:0;">Your lowest score is in <u>${APP_CONFIG.domains[lowIdx]}</u>. Keep practicing before the exam!</p>`;
            if (dataPoints[lowIdx] < 70) {
                statsHtml += `<button class="btn-main" style="background:linear-gradient(135deg,#e74c3c,#c0392b); margin-top:4px;" onclick="startWeakSpotMode()">🎯 TRAIN WEAK SPOTS</button>`;
            }
        } else {
            statsHtml += `<p style="margin:0;">Complete your first quiz to unlock your performance map!</p>`;
        }
        adviceBox.innerHTML = statsHtml;
    }
}

// =============================================================
//  SEGNALIBRI — SEZIONE
// =============================================================

async function showBookmarks() {
    showSection('bookmarks-section');
    const container = document.getElementById('bookmarks-content');
    if (!container) return;
    const bookmarks = await _getBookmarks();

    if (bookmarks.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding:40px; color:#999;"><div style="font-size:3rem; margin-bottom:10px;">☆</div><p>No bookmarks yet.<br>Tap ☆ during a quiz to save questions.</p></div>`;
        return;
    }

    let html = `<p style="color:#666; font-size:0.85rem; margin-bottom:20px;">${bookmarks.length} saved question${bookmarks.length !== 1 ? 's' : ''}</p>`;
    bookmarks.forEach((q, i) => {
        html += `
            <div class="bookmark-card">
                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                    <p style="font-weight:bold; margin:0 0 10px 0; flex:1; color:var(--text);">Q${i + 1}: ${q.question}</p>
                    <button class="bookmark-remove-btn" onclick="removeBookmark(${i})">✕</button>
                </div>
                <p style="font-size:0.85rem; color:var(--correct); margin:0 0 6px 0;">✅ <b>Correct Answer:</b> ${q.options[q.answer]}</p>
                ${q.explanation ? `<div style="margin-top:8px; padding:10px; background:rgba(0,0,0,0.03); border-radius:8px; font-size:0.82rem; color:#555; border:1px dashed #ddd;">💡 ${q.explanation}</div>` : ''}
                <div style="margin-top:8px; font-size:0.75rem; color:#999; font-style:italic;">${q.domain}</div>
            </div>`;
    });
    container.innerHTML = html;
}

async function removeBookmark(index) {
    const bookmarks = await _getBookmarks();
    bookmarks.splice(index, 1);
    await Storage.setJSON('bookmarks', bookmarks);
    showBookmarks();
}

// =============================================================
//  DASHBOARD
// =============================================================

async function updateDashboard() {
    const history  = await Storage.getHistory();
    const streak   = await _getStreak();

    const statAvg    = document.getElementById('stat-avg');
    const statSess   = document.getElementById('stat-sessions');
    const statStreak = document.getElementById('stat-streak');

    if (history.length > 0) {
        const avg = Math.round(history.reduce((a, b) => a + b.score, 0) / history.length);
        if (statAvg)  statAvg.innerText  = avg + '%';
        if (statSess) statSess.innerText = history.length;
    } else {
        if (statAvg)  statAvg.innerText  = '0%';
        if (statSess) statSess.innerText = '0';
    }
    if (statStreak) statStreak.innerText = streak > 0 ? `🔥 ${streak}` : '—';

    _populateDomainFilter();
}

function _populateDomainFilter() {
    const sel = document.getElementById('domain-filter');
    if (!sel || sel.dataset.populated) return;
    sel.dataset.populated = 'true';
    const allOpt = document.createElement('option');
    allOpt.value = 'all'; allOpt.innerText = 'All Domains';
    sel.appendChild(allOpt);
    APP_CONFIG.domains.forEach(d => {
        const opt = document.createElement('option');
        opt.value = d; opt.innerText = d.replace(/^Domain \d+:\s*/, '');
        sel.appendChild(opt);
    });
    const bkOpt = document.createElement('option');
    bkOpt.value = 'bookmarks'; bkOpt.innerText = '\u2605 My Bookmarks';
    sel.appendChild(bkOpt);
    _updateQuestionCountSelect();
}

function _updateQuestionCountSelect() {
    const sel = document.getElementById('question-count');
    if (!sel) return;
    if (!Paywall.isPremium()) {
        // FREE version: disable all options, show fixed message
        Array.from(sel.options).forEach(opt => {
            opt.disabled = true;
            opt.innerText = opt.innerText.replace(' 🔒', '');
            opt.innerText += ' 🔒';
        });
        // Add free option
        const freeOpt = sel.options[0];
        if (freeOpt) {
            freeOpt.disabled = false;
            freeOpt.innerText = 'Free Practice (30 questions)';
            freeOpt.value = 'all';
            sel.value = 'all';
        }
    } else {
        Array.from(sel.options).forEach(opt => {
            opt.disabled = false;
            opt.innerText = opt.innerText.replace(' 🔒', '');
        });
    }
}

// =============================================================
//  CLEAR / EXIT
// =============================================================

async function clearAllHistory() {
    if (confirm('⚠️ DELETE EVERYTHING?\nThis will reset scores, charts, and the lifetime counter.')) {
        await Storage.clearAll();
        alert('Reset Complete!');
        window.location.reload();
    }
}

function confirmExit() {
    if (confirm('⚠️ EXIT SIMULATION?\nYour current progress will be lost.')) {
        clearInterval(timerInterval); goToHome();
    }
}

// =============================================================
//  TEMA SCURO
// =============================================================

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) themeBtn.innerHTML = isDark ? '☀️' : '🌙';
    Storage.setTheme(isDark ? 'dark' : 'light');
}

document.addEventListener('DOMContentLoaded', async () => {
    const savedTheme = await Storage.getTheme();
    const themeBtn   = document.getElementById('theme-toggle');
    if (savedTheme === 'dark') { document.body.classList.add('dark-mode'); if (themeBtn) themeBtn.innerHTML = '☀️'; }
    else { if (themeBtn) themeBtn.innerHTML = '🌙'; }
    _enableSwipeBack('progress-section');
    _enableSwipeBack('bookmarks-section');
    _enableSwipeBack('report-section');
});

document.addEventListener('ionBackButton', (ev) => {
    ev.detail.register(10, () => {
        const s = document.querySelector('section.active')?.id;
        if (s && s !== 'home-section') goToHome(); else navigator.app?.exitApp();
    });
});

async function _showInterstitialAd() {
    // Solo utenti FREE e solo su Capacitor (mobile nativo)
    if (!APP_CONFIG.ads.enabled) return;
    if (typeof window.Capacitor === 'undefined' || !window.Capacitor.isNativePlatform()) return;

    return new Promise(async (resolve) => {
        try {
            const { AdMob, AdmobConsentStatus, InterstitialAdPluginEvents } = window.CapacitorAdmob || {};
            if (!AdMob) {
                console.warn('[Ads] AdMob plugin non trovato.');
                return resolve();
            }

            const adId = APP_CONFIG.ads.interstitialId;

            // Prepara l'interstitial
            await AdMob.prepareInterstitial({ adId });

            // Risolve la Promise quando l'utente chiude l'ad
            const onDismiss = () => {
                AdMob.removeAllListeners();
                resolve();
            };

            AdMob.addListener(InterstitialAdPluginEvents.Dismissed, onDismiss);
            AdMob.addListener(InterstitialAdPluginEvents.FailedToLoad, (err) => {
                console.warn('[Ads] Interstitial failed to load:', err);
                AdMob.removeAllListeners();
                resolve();
            });

            await AdMob.showInterstitial();

        } catch (err) {
            console.warn('[Ads] Interstitial error:', err);
            resolve(); // In caso di errore, vai comunque al report
        }
    });
}

// window.onload sostituito dal blocco async qui sotto

// =============================================================
//  INIT con RevenueCat
//  Paywall.init() verifica lo stato premium prima di mostrare
//  la dashboard, così l'utente premium non vede mai gli ads.
// =============================================================

// =============================================================
//  HELP / INFO MODAL
// =============================================================

function showHelp() {
    let modal = document.getElementById('help-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'help-modal';
        modal.innerHTML = `
            <div class="help-backdrop" onclick="hideHelp()"></div>
            <div class="help-card">
                <button class="help-close" onclick="hideHelp()">✕</button>

                <h2 class="help-title">ℹ️ Help & Info</h2>
                <p class="help-subtitle">${APP_CONFIG.appName} · v${APP_CONFIG.appVersion}</p>

                <!-- HOW IT WORKS -->
                <div class="help-section">
                    <p class="help-section-title">📖 How it works</p>
                    <ul>
                        <li><strong>Domain Filter</strong> — select a specific domain or practice all domains at once.</li>
                        <li><strong>Start Training</strong> — timed quiz. Answers shown at the end.</li>
                        <li><strong>Exam Mode 🎓</strong> — simulates the real AAIR exam (30 Q in free, 90 in full). Navigate freely, flag, pause, then submit.</li>
                        <li><strong>Weak Spot Mode 🎯</strong> — automatically targets your lowest-scoring domains.</li>
                        <li><strong>Study Mode</strong> — each answer is revealed immediately with a full explanation.</li>
                        <li><strong>Bookmark ☆</strong> — save tricky questions to review later from the Saved section.</li>
                        <li><strong>Analytics 📊</strong> — track your scores over time and see your performance by domain on a radar chart.</li>
                        <li><strong>PDF Report</strong> — export a detailed report of any session to share or archive.</li>
                    </ul>
                </div>

                <hr class="help-divider">

                <!-- FREE vs PRO -->
                <div class="help-section">
                    <p class="help-section-title">⭐ Free vs Pro</p>
                    <table class="help-table">
                        <thead>
                            <tr><th>Feature</th><th>Free</th><th>Pro</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Questions available</td><td>30</td><td>All (${typeof databaseDomande !== 'undefined' ? databaseDomande.length : '—'})</td></tr>
                            <tr><td>Exam Mode</td><td>30 questions</td><td>90 questions</td></tr>
                            <tr><td>Weak Spot Mode</td><td>✅</td><td>✅</td></tr>
                            <tr><td>Study Mode</td><td>✅</td><td>✅</td></tr>
                            <tr><td>Bookmarks</td><td>✅</td><td>✅</td></tr>
                            <tr><td>Analytics & Radar Chart</td><td>✅</td><td>✅</td></tr>
                            <tr><td>PDF Reports</td><td>✅</td><td>✅</td></tr>
                            <tr><td>Full question database</td><td>—</td><td>✅</td></tr>
                        </tbody>
                    </table>
                    <p style="margin-top:12px; font-size:0.82rem; color:#888;">
                        Pro version available on the App Store and Google Play.
                    </p>
                </div>

                <hr class="help-divider">

                <!-- CONTACT -->
                <div class="help-section">
                    <p class="help-section-title">✉️ Contact & Support</p>
                    <p>Questions, feedback or bug reports? Reach out at:<br>
                    <a href="mailto:support@grcprepstudio.com" style="color:var(--accent);font-weight:bold;">support@grcprepstudio.com</a></p>
                    <p style="margin-top:8px;">Visit us at:<br>
                    <a href="https://www.grcprepstudio.com" target="_blank" style="color:var(--accent);font-weight:bold;">www.grcprepstudio.com</a></p>
                </div>

                <hr class="help-divider">

                <!-- DISCLAIMER -->
                <div class="help-section">
                    <p class="help-section-title">⚠️ Legal Disclaimer</p>
                    <div class="help-disclaimer-box">
                        <p>This app is an <strong>independent study tool</strong> created to help candidates prepare for the AAIR® certification exam. It is <strong>not affiliated with, endorsed by, or associated with ISACA®</strong> in any way.</p>
                        <p><strong>ISACA®</strong> and <strong>AAIR®</strong> (Advanced in AI Risk) are registered trademarks of ISACA. All rights in these marks belong exclusively to ISACA.</p>
                        <p>The questions in this app are original practice content based on publicly available exam objectives. They do not reproduce any official ISACA exam material.</p>
                        <p style="margin-bottom:0;">Use of this app does not guarantee passing the official certification exam.</p>
                    </div>
                </div>

            </div>
        `;
        document.body.appendChild(modal);
    }
    modal.style.display = 'flex';
    requestAnimationFrame(() => modal.classList.add('visible'));
}

function hideHelp() {
    const modal = document.getElementById('help-modal');
    if (modal) {
        modal.classList.remove('visible');
        setTimeout(() => { modal.style.display = 'none'; }, 300);
    }
}

window.onload = async function() {
    // 1. Inizializza RevenueCat e verifica stato premium
    await Paywall.init();
    // 2. Aggiorna dashboard (usa APP_CONFIG.ads.enabled già impostato da Paywall)
    await updateDashboard();
    // 3. Mostra Help al primo avvio
    const firstRunKey = APP_CONFIG.appId + '_help_seen';
    if (!localStorage.getItem(firstRunKey)) {
        localStorage.setItem(firstRunKey, '1');
        setTimeout(() => showHelp(), 600);
    }
};
