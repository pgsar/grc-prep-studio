/**
 * ============================================================
 *  CODES.JS — Codici promo monouso
 *
 *  ⚠️  QUESTO FILE È PRIVATO.
 *      Non includerlo in repository pubblici.
 *      Aggiungilo a .gitignore se usi Git.
 *
 *  Come generare nuovi codici:
 *      Apri la console del browser e chiama:
 *      PromoCodeGenerator.generate(10, 'CONF2026')
 *      → stampa 10 codici pronti da copiare qui sotto
 *
 *  Come usare un codice:
 *      L'utente lo inserisce nel campo "Redeem Code" nel paywall.
 *      Il codice viene marcato come usato in localStorage
 *      e non può essere riutilizzato sullo stesso device.
 *
 *  Formato consigliato: PREFIX-XXXX-XXXX (es. AAIR-A3F2-K9WQ)
 * ============================================================
 */

const PROMO_CODES = [
    // --- Conferenza ISACA GRC San Diego, Agosto 2026 ---
    'ISACA-GRC1-2026',
    'ISACA-GRC2-2026',
    'ISACA-GRC3-2026',
    'ISACA-GRC4-2026',
    'ISACA-GRC5-2026',

    // --- Beta tester / amici ---
    'BETA-AAAA-0001',
    'BETA-AAAA-0002',
    'BETA-AAAA-0003',

    // --- Aggiungi qui nuovi codici ---
    // 'AAIR-XXXX-YYYY',
    'AAIR-J815-NMN4',
  'AAIR-R20T-ER5P',
  'AAIR-22BU-PG9J',
  'AAIR-6HJ2-ZUJN',
  'AAIR-LPQR-J4GR',
  'AAIR-5RMP-GVJF',
  'AAIR-UGPO-C1FT',
  'AAIR-7GVQ-AQUF',
  'AAIR-PXIH-I2AH',
  'AAIR-IGMZ-PHAD',
  'AAIR-60L3-YA5E',
  'AAIR-D8HN-TYZX',
  'AAIR-5HLZ-C7Y3',
  'AAIR-09QM-AW0G',
  'AAIR-5B8L-FVGL',
  'AAIR-ZYXR-HG1A',
  'AAIR-X24X-D69M',
  'AAIR-L6J6-SOTD',
  'AAIR-EPGX-ZGBG',
  'AAIR-MKIE-PNNJ',
  'AAIR-FK2Q-H4U4',
  'AAIR-JBW0-81W7',
  'AAIR-T2V8-GQG6',
  'AAIR-RF8R-9J86',
  'AAIR-86KF-BMGI',
  'AAIR-I2TE-09TE',
  'AAIR-I24W-V93S',
  'AAIR-SMKX-5IO4',
  'AAIR-AB8X-X3DT',
  'AAIR-MDSC-0JXA',
  'AAIR-3ZPR-81XA',
  'AAIR-U59B-55IE',
  'AAIR-9OQ6-UD9R',
  'AAIR-OQOV-CV2C',
  'AAIR-DVH7-I50O',
  'AAIR-52G1-POSC',
  'AAIR-PJHL-NKAZ',
  'AAIR-LLYV-4TAV',
  'AAIR-ZMTH-QO1S',
  'AAIR-HIXM-WY8F',
  'AAIR-Y5SP-RFHK',
  'AAIR-I3PK-MYMD',
  'AAIR-JKUU-A61R',
  'AAIR-OUSD-UR7K',
  'AAIR-S29D-5VY7',
  'AAIR-EAPN-UH0K',
  'AAIR-DI4J-QPH3',
  'AAIR-59HL-6XTO',
  'AAIR-G378-TO51',
  'AAIR-3L2P-ZI81',
];


// ============================================================
//  GENERATORE CODICI (utility — solo per uso in console)
//  Non viene usato dall'app, serve solo a te per produrre codici.
// ============================================================

const PromoCodeGenerator = (() => {

    const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no O,0,I,1 (ambigui)

    function _randomSegment(length) {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
        return result;
    }

    /**
     * Genera N codici unici con un prefisso opzionale.
     * @param {number} count    — quanti codici generare
     * @param {string} prefix   — prefisso (es. 'CONF2026', 'BETA')
     * @param {number} segments — numero di segmenti da 4 caratteri (default 2)
     *
     * Esempio: PromoCodeGenerator.generate(5, 'AAIR')
     * Output:  ['AAIR-K3WQ-9F2M', 'AAIR-BX7P-LN4R', ...]
     */
    function generate(count = 10, prefix = 'AAIR', segments = 2) {
        const codes = new Set();
        while (codes.size < count) {
            const parts = Array.from({ length: segments }, () => _randomSegment(4));
            codes.add([prefix, ...parts].join('-'));
        }
        const list = [...codes];
        console.log(`\n📋 ${count} codici generati con prefisso "${prefix}":\n`);
        console.log(list.map(c => `'${c}',`).join('\n'));
        console.log(`\n✅ Copia questi codici in js/codes.js\n`);
        return list;
    }

    return { generate };

})();
