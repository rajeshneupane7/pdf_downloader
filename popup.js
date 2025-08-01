document.getElementById('download').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: findAndSendPDFs
  });
});

function findAndSendPDFs() {
  const links = Array.from(document.querySelectorAll('a[href$=".pdf"]')).map(a => a.href);
  chrome.runtime.sendMessage({ type: 'pdfLinks', links });
}
