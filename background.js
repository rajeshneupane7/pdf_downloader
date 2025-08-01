chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'pdfLinks' || message.type === 'pdfLinksFromContentScript') {
    message.links.forEach((url, index) => {
      chrome.downloads.download({
        url: url,
        filename: `pdf-${index + 1}.pdf`
      });
    });
  }
});
