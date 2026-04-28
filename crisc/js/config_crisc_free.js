/**
 * ============================================================
 *  APP CONFIG — CRISC Exam Simulator (FREE / Lite)
 * ============================================================
 */

const APP_CONFIG = {
    appId:       'crisc_free',
    appName:     'CRISC Exam Simulator',
    appSubtitle: 'Certified in Risk and Information Systems Control Preparation Tool',
    appVersion:  '2.0.0',
    certName:    'CRISC',
    passScore:   70,
    minutesPerQuestion: 1.5,
    domains: [
        'Domain 1: Governance',
        'Domain 2: Risk Assessment',
        'Domain 3: Risk Response and Reporting',
        'Domain 4: Technology and Security',
    ],
    domainAliases: {},
    domainLabels: ['Governance', 'Risk Assmnt', 'Risk Response', 'Tech&Sec'],
    chartColor: '#dc3545',
    ranks: [
        { minQuestions: 500, label: 'CRISC Master 🏆',       color: '#d4af37' },
        { minQuestions: 250, label: 'Expert Specialist 🎓',  color: '#7209b7' },
        { minQuestions: 100, label: 'Practitioner 🛠️',      color: '#3a86ff' },
        { minQuestions:  50, label: 'Aspirant 🌟',           color: '#2ecc71' },
        { minQuestions:   0, label: 'Novice',                color: '#666'    },
    ],
    ads: { enabled: false, interstitialEveryN: 15, admobAppId: '', admobAppIdIos: '', interstitialId: '', interstitialIdIos: '' },
    analytics: { enabled: false },
    maxSessionHistory: 15,
    isPro: false,
    freeQuestionsPerDomain: 8,
    proAppStoreUrl: 'https://apps.apple.com/app/crisc-exam-simulator/id000000000',
    proPlayStoreUrl: 'https://play.google.com/store/apps/details?id=it.psartori.criscexampreparation',
    examTotalQuestions: 150,  // CRISC real exam: 150 questions
    promoCodes: { durationDays: 180 },
};
