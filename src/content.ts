const isWhatsAppFullyLoaded = (): boolean => {
  // Check if main WhatsApp container is loaded
  const chatList = document.querySelectorAll("div[role=listitem]").length;

  return chatList > 0;
};

const waitForWhatsAppLoad = (): Promise<void> => {
  return new Promise((resolve) => {
    if (isWhatsAppFullyLoaded()) {
      resolve();
      return;
    }

    const observer = new MutationObserver(() => {
      if (isWhatsAppFullyLoaded()) {
        observer.disconnect();
        resolve();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
};
