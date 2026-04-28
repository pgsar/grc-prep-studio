/**
 * ============================================================
 *  PAYWALL.JS — FREE / Lite VERSION
 *
 *  Gestisce:
 *    - Stato sempre "free" (nessun RevenueCat)
 *    - Banner upgrade nella home
 *    - Codici promo monouso (solo Android)
 *    - Link allo store per versione PRO
 * ============================================================
 */

const Paywall = (() => {

    let _isPremium = false;
    let _daysLeft  = 0;

    const _isCapacitor = () =>
        typeof window !== 'undefined' &&
        window.Capacitor &&
        window.Capacitor.isNativePlatform &&
        window.Capacitor.isNativePlatform();

    const _isIos = () =>
        _isCapacitor() && window.Capacitor.getPlatform() === 'ios';

    // ---- Init ----

    async function init() {
        // Controlla codici promo
        const promoValid = await _isPromoValid();
        if (promoValid) {
            _isPremium = true;
            _daysLeft  = await _getPromoDaysLeft();
        }
        _updateBanner();
        console.log(`[Paywall FREE] Premium: ${_isPremium}, giorni: ${_daysLeft}`);
    }

    // ---- Banner upgrade ----

    function _updateBanner() {
        const banner = document.getElementById('upgrade-banner');
        if (!banner) return;

        if (_isPremium) {
            banner.innerHTML = `<div class="banner-pro">⭐ Pro Access Active · ${_daysLeft} days left</div>`;
        } else {
            banner.innerHTML = `
                <div class="banner-free">
                    <div class="banner-free-text">
                        <strong>📚 Free version</strong> — 30 practice questions (10 per domain)
                    </div>
                    <button class="banner-upgrade-btn" onclick="Paywall.showUpgrade()">
                        ⭐ Get Full Access
                    </button>
                </div>`;
        }
    }

    // ---- Mostra opzioni upgrade ----

    function showUpgrade() {
        const existing = document.getElementById('upgrade-modal');
        if (existing) { existing.style.display = 'flex'; return; }

        const modal = document.createElement('div');
        modal.id = 'upgrade-modal';
        modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.7);display:flex;align-items:center;justify-content:center;z-index:9999;padding:20px;';

        const isAndroid = _isCapacitor() && !_isIos();

        modal.innerHTML = `
            <div style="background:var(--card-bg,#fff);border-radius:16px;padding:28px;max-width:380px;width:100%;text-align:center;box-shadow:0 8px 40px rgba(0,0,0,0.3);">
                <div style="font-size:2.5rem;margin-bottom:12px;">⭐</div>
                <h2 style="margin:0 0 8px;font-size:1.3rem;color:var(--text,#111);">AAIR Exam Simulator Pro</h2>
                <p style="color:#666;font-size:0.9rem;margin:0 0 20px;line-height:1.5;">
                    Unlock all <strong>1,006 questions</strong> across all 3 domains.<br>
                    Unlimited sessions · PDF reports · No ads.
                </p>
                <div style="margin-bottom:16px; padding:16px; background:linear-gradient(135deg,rgba(0,122,255,0.07),rgba(1,135,95,0.07)); border-radius:12px; border:1px dashed #ccc;">
                    <div style="font-size:1.5rem; margin-bottom:8px;">🚀</div>
                    <p style="margin:0; font-size:0.95rem; font-weight:700; color:var(--text,#111);">Coming Soon</p>
                    <p style="margin:6px 0 0; font-size:0.85rem; color:#666; line-height:1.5;">
                        The full version will be available on<br>
                        <span style="color:#007aff; font-weight:600;">🍎 Apple App Store</span>
                        &nbsp;and&nbsp;
                        <span style="color:#01875f; font-weight:600;">▶ Google Play</span>
                    </p>
                </div>
                ${isAndroid ? `
                <div style="border-top:1px solid #eee;padding-top:16px;">
                    <p style="font-size:0.82rem;color:#888;margin:0 0 10px;">Have a promo code?</p>
                    <input id="promo-input-free" type="text" placeholder="e.g. AAIR-XXXX-YYYY"
                        style="width:100%;padding:10px;border:1px solid #ddd;border-radius:8px;font-size:0.9rem;text-transform:uppercase;margin-bottom:8px;box-sizing:border-box;"
                        autocapitalize="characters" autocorrect="off">
                    <button onclick="Paywall._submitCode()" style="width:100%;background:#6c757d;color:#fff;border:none;padding:10px;border-radius:8px;font-size:0.9rem;cursor:pointer;">
                        Activate Code
                    </button>
                </div>` : ''}
                <button onclick="Paywall.hideUpgrade()" style="margin-top:14px;background:none;border:none;color:#aaa;font-size:0.85rem;cursor:pointer;">
                    Continue with free version
                </button>
            </div>`;

        document.body.appendChild(modal);

        // Uppercase automatico
        const input = modal.querySelector('#promo-input-free');
        if (input) {
            input.addEventListener('input', () => {
                const pos = input.selectionStart;
                input.value = input.value.toUpperCase();
                input.setSelectionRange(pos, pos);
            });
            input.addEventListener('keydown', e => {
                if (e.key === 'Enter') Paywall._submitCode();
            });
        }
    }

    function hideUpgrade() {
        const modal = document.getElementById('upgrade-modal');
        if (modal) modal.remove();
    }

    function _openStore(platform) {
        const url = platform === 'ios'
            ? APP_CONFIG.proAppStoreUrl
            : APP_CONFIG.proPlayStoreUrl;
        if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Browser) {
            window.Capacitor.Plugins.Browser.open({ url });
        } else {
            window.open(url, '_blank');
        }
    }

    // ---- Codici promo (solo Android) ----

    const _USED_CODES_KEY = 'used_promo_codes';
    const _PROMO_PURCHASE_KEY = 'promo_purchase_date';

    async function _getUsedCodes() { return Storage.getJSON(_USED_CODES_KEY, []); }
    async function _markCodeAsUsed(code) {
        const used = await _getUsedCodes();
        used.push(code.toUpperCase().trim());
        await Storage.setJSON(_USED_CODES_KEY, used);
    }

    async function _isPromoValid() {
        const raw = await Storage.get(_PROMO_PURCHASE_KEY);
        if (!raw) return false;
        const expiryDate = new Date(new Date(raw).getTime() + APP_CONFIG.promoCodes.durationDays * 86400000);
        return new Date() < expiryDate;
    }

    async function _getPromoDaysLeft() {
        const raw = await Storage.get(_PROMO_PURCHASE_KEY);
        if (!raw) return 0;
        const expiryDate = new Date(new Date(raw).getTime() + APP_CONFIG.promoCodes.durationDays * 86400000);
        return Math.max(0, Math.ceil((expiryDate - new Date()) / 86400000));
    }

    async function redeemCode(rawCode) {
        const code = (rawCode || '').toUpperCase().trim();
        if (!code) { _showToast('Please enter a code.', '#dc3545'); return { success: false }; }
        if (typeof PROMO_CODES === 'undefined') { _showToast('Code system unavailable.', '#dc3545'); return { success: false }; }
        if (!PROMO_CODES.includes(code)) { _showToast('Invalid code. Please check and try again.', '#dc3545'); return { success: false }; }
        const usedCodes = await _getUsedCodes();
        if (usedCodes.includes(code)) { _showToast('This code has already been used on this device.', '#dc3545'); return { success: false }; }

        await Storage.set(_PROMO_PURCHASE_KEY, new Date().toISOString());
        await _markCodeAsUsed(code);
        _isPremium = true;
        _daysLeft  = APP_CONFIG.promoCodes.durationDays;
        hideUpgrade();
        _updateBanner();
        _showToast(`⭐ Access activated — ${_daysLeft} days!`, '#28a745');
        return { success: true };
    }

    async function _submitCode() {
        const input = document.getElementById('promo-input-free');
        if (!input) return;
        const code = input.value.trim();
        input.value = '';
        await redeemCode(code);
    }

    // ---- Toast ----
    function _showToast(msg, color) {
        const t = document.createElement('div');
        t.style.cssText = `position:fixed;bottom:30px;left:50%;transform:translateX(-50%);background:${color};color:#fff;padding:12px 24px;border-radius:8px;font-size:0.9rem;z-index:99999;box-shadow:0 4px 16px rgba(0,0,0,0.2);`;
        t.textContent = msg;
        document.body.appendChild(t);
        setTimeout(() => t.remove(), 3500);
    }

    // ---- Public API ----
    function isPremium()   { return _isPremium; }
    function getDaysLeft() { return _daysLeft; }
    function showPaywall() { showUpgrade(); }
    function hidePaywall() { hideUpgrade(); }

    return {
        init, isPremium, getDaysLeft,
        showPaywall, hidePaywall,
        showUpgrade, hideUpgrade,
        redeemCode,
        _submitCode, _openStore,
    };

})();
