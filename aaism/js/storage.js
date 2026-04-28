/**
 * ============================================================
 *  STORAGE.JS — Abstraction layer per persistenza dati
 *
 *  Usa localStorage sul web.
 *  Usa Capacitor Preferences quando disponibile (iOS/Android).
 *  Stessa API in entrambi i casi: script_pro.js non cambia mai.
 * ============================================================
 */

const Storage = (() => {

    const isCapacitor = () =>
        typeof window !== 'undefined' &&
        window.Capacitor &&
        window.Capacitor.Plugins &&
        window.Capacitor.Plugins.Preferences;

    const key = (suffix) => `${APP_CONFIG.appId}_${suffix}`;

    // ---- API base ----

    async function get(suffix) {
        const k = key(suffix);
        if (isCapacitor()) {
            const { value } = await Capacitor.Plugins.Preferences.get({ key: k });
            return value;
        }
        return localStorage.getItem(k);
    }

    async function set(suffix, value) {
        const k = key(suffix);
        if (isCapacitor()) {
            await Capacitor.Plugins.Preferences.set({ key: k, value: String(value) });
        } else {
            localStorage.setItem(k, value);
        }
    }

    async function remove(suffix) {
        const k = key(suffix);
        if (isCapacitor()) {
            await Capacitor.Plugins.Preferences.remove({ key: k });
        } else {
            localStorage.removeItem(k);
        }
    }

    // ---- Helper JSON / numerici ----

    async function getJSON(suffix, fallback = null) {
        const raw = await get(suffix);
        if (!raw) return fallback;
        try { return JSON.parse(raw); } catch { return fallback; }
    }

    async function setJSON(suffix, obj) {
        await set(suffix, JSON.stringify(obj));
    }

    async function getInt(suffix, fallback = 0) {
        const raw = await get(suffix);
        const n = parseInt(raw);
        return isNaN(n) ? fallback : n;
    }

    // ---- Dati app ----

    async function getHistory()            { return getJSON('progress', []); }
    async function getTotalQuestions()     { return getInt('total_questions', 0); }
    async function getMissedQuestions()    { return getJSON('missed_questions', []); }
    async function setMissedQuestions(arr) { await setJSON('missed_questions', arr); }
    async function getTheme()              { return get('theme'); }
    async function setTheme(value)         { await set('theme', value); }

    async function addTotalQuestions(n) {
        const current = await getTotalQuestions();
        await set('total_questions', current + n);
    }

    async function clearAll() {
        const suffixes = ['progress', 'total_questions', 'missed_questions'];
        for (const s of suffixes) await remove(s);
        // Non cancella tema né stato premium
    }

    // ---- Premium / RevenueCat ----
    // RevenueCat è la fonte di verità per lo stato premium.
    // Qui salviamo la data di acquisto come fallback offline, così
    // l'utente che ha già pagato può usare l'app anche senza connessione.

    async function savePurchaseDate(isoDateString) {
        await set('purchase_date', isoDateString);
    }

    async function getPurchaseDate() {
        return get('purchase_date');
    }

    // Verifica offline: controlla se la data salvata è ancora
    // entro il periodo configurato in APP_CONFIG.revenueCat.durationDays
    async function isLocalPremiumValid() {
        const raw = await getPurchaseDate();
        if (!raw) return false;
        const purchaseDate = new Date(raw);
        const expiryDate   = new Date(purchaseDate.getTime() +
            APP_CONFIG.revenueCat.durationDays * 86400000);
        return new Date() < expiryDate;
    }

    // Restituisce i giorni rimasti all'accesso premium
    async function getPremiumDaysLeft() {
        const raw = await getPurchaseDate();
        if (!raw) return 0;
        const expiryDate = new Date(
            new Date(raw).getTime() +
            APP_CONFIG.revenueCat.durationDays * 86400000
        );
        const msLeft = expiryDate - new Date();
        return Math.max(0, Math.ceil(msLeft / 86400000));
    }

    async function clearPremium() {
        await remove('purchase_date');
    }

    // ---- Analytics ----

    function trackEvent(eventName, params = {}) {
        if (!APP_CONFIG.analytics.enabled) return;
        const payload = {
            event: eventName,
            appId: APP_CONFIG.appId,
            ts: new Date().toISOString(),
            ...params,
        };
        // Firebase: firebase.analytics().logEvent(eventName, params);
        // Custom backend: fetch('https://your-backend.com/analytics', {...})
        console.log('[Analytics]', payload);
    }

    return {
        get, set, remove,
        getJSON, setJSON, getInt,
        getHistory, getTotalQuestions, addTotalQuestions,
        getMissedQuestions, setMissedQuestions,
        getTheme, setTheme,
        clearAll,
        savePurchaseDate, getPurchaseDate,
        isLocalPremiumValid, getPremiumDaysLeft, clearPremium,
        trackEvent,
    };

})();
