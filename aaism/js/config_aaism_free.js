/**
 * ============================================================
 *  APP CONFIG — AAISM Exam Simulator (FREE / Lite)
 * ============================================================
 */

const APP_CONFIG = {
    appId:       'aaism_free',
    appName:     'AAISM Exam Simulator',
    appSubtitle: 'Advanced AI Security Manager Preparation Tool',
    appVersion:  '2.0.0',
    certName:    'AAISM',
    passScore:   70,
    minutesPerQuestion: 1.5,
    domains: [
        'Domain 1: AI Governance and Program Management',
        'Domain 2: AI Risk and Opportunity Management',
        'Domain 3: AI Technologies and Controls',
    ],
    domainAliases: {},
    domainLabels: ['Governance', 'Risk Mngmt', 'Tech&Ctrls'],
    chartColor: '#dc3545',
    ranks: [
        { minQuestions: 500, label: 'AAISM Master 🏆',       color: '#d4af37' },
        { minQuestions: 250, label: 'Expert Specialist 🎓',  color: '#7209b7' },
        { minQuestions: 100, label: 'Practitioner 🛠️',      color: '#3a86ff' },
        { minQuestions:  50, label: 'Aspirant 🌟',           color: '#2ecc71' },
        { minQuestions:   0, label: 'Novice',                color: '#666'    },
    ],
    ads: { enabled: false, interstitialEveryN: 15, admobAppId: '', admobAppIdIos: '', interstitialId: '', interstitialIdIos: '' },
    analytics: { enabled: false },
    maxSessionHistory: 15,
    isPro: false,
    freeQuestionsPerDomain: 10,
    proAppStoreUrl: 'https://apps.apple.com/app/aaism-exam-simulator/id000000000',
    proPlayStoreUrl: 'https://play.google.com/store/apps/details?id=it.psartori.aaismexampreparation',
    examTotalQuestions: 90,  // AAISM real exam: 90 questions
    promoCodes: { durationDays: 180 },
};
