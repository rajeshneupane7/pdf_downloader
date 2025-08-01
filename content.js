// Extract all links ending with .pdf (case-insensitive)
const pdfLinks = Array.from(document.querySelectorAll('a[href$=".pdf"], a[href$=".PDF"]'))
  .map(a => a.href)
  .filter((value, index, self) => self.indexOf(value) === index); // Remove duplicates

// Store in local storage (optional for debugging or later use)
chrome.storage.local.set({ foundPDFs: pdfLinks });

// Send the links to the background script
chrome.runtime.sendMessage({
  type: "pdfLinksFromContentScript",
  links: pdfLinks
});
