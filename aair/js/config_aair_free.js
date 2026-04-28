/**
 * ============================================================
 *  APP CONFIG — AAIR Exam Simulator (FREE / Lite)
 * ============================================================
 */

const APP_CONFIG = {

    appId:       'aair_free',
    appName:     'AAIR Exam Simulator',
    appSubtitle: 'Advanced AI Risk Preparation Tool',
    appVersion:  '2.0.0',

    certName:    'AAIR',
    passScore:   70,
    minutesPerQuestion: 1.5,

    domains: [
        'Domain 1: AI Risk Governance and Framework Integration',
        'Domain 2: AI Life Cycle Risk Management',
        'Domain 3: AI Risk Program Management',
    ],

    domainAliases: {},
    domainLabels: ['Governance', 'Lifecycle', 'Program Mgmt'],
    chartColor: '#dc3545',

    ranks: [
        { minQuestions: 500, label: 'AI Master 🏆',          color: '#d4af37' },
        { minQuestions: 250, label: 'Expert Specialist 🎓',  color: '#7209b7' },
        { minQuestions: 100, label: 'Practitioner 🛠️',      color: '#3a86ff' },
        { minQuestions:  50, label: 'Aspirant 🌟',           color: '#2ecc71' },
        { minQuestions:   0, label: 'Novice',                color: '#666'    },
    ],

    ads: {
        enabled: false,
        interstitialEveryN: 15,
        admobAppId: '',
        admobAppIdIos: '',
        interstitialId: '',
        interstitialIdIos: '',
    },

    analytics: { enabled: false },
    maxSessionHistory: 15,

    // FREE version settings
    isPro: false,
    freeQuestionsPerDomain: 10,  // 10 per domain × 3 domains = 30 total
    proAppStoreUrl: 'https://apps.apple.com/app/aair-exam-simulator/id000000000',    // aggiorna con URL reale
    proPlayStoreUrl: 'https://play.google.com/store/apps/details?id=it.psartori.aairexampreparation', // aggiorna con URL reale

    // Codici promo (solo Android)
    promoCodes: {
        durationDays: 180,
    },
};
