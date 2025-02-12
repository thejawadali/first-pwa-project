console.log("PWA is loading...");
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
  .then(reg => console.log("Service Worker registered!", reg))
  .catch(err => console.log("Service Worker failed", err));
}
