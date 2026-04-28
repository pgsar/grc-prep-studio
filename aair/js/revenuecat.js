// Inizializza il plugin RevenueCat da Capacitor
document.addEventListener('deviceready', async () => {
  if (window.Capacitor && window.Capacitor.isNativePlatform()) {
    try {
      const plugin = Capacitor.Plugins.PurchasesPlugin;
      if (plugin) {
        window.Purchases = plugin;
        console.log('[RC] Plugin RevenueCat caricato');
      } else {
        console.warn('[RC] Plugin non trovato');
      }
    } catch(e) {
      console.error('[RC] Errore caricamento plugin:', e);
    }
  }
});