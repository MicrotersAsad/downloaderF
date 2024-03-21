// Service worker activation logic
console.log('Service worker activated.');

// Listen for install event
chrome.runtime.onInstalled.addListener((details) => {
  console.log('Extension installed:', details);

  // Perform any additional tasks after installation
  // For example, open a new tab with a welcome page
  
  chrome.tabs.create({ url: 'https://www.google.co.uk/' });
  chrome.runtime.setUninstallURL('https://www.google.co.uk/');
   
});