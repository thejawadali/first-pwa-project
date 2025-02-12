const CACHE_NAME = "cache-v1"
const urlsToCache = [
  "/",
  "index.html",
  "style.css",
  "img_.png",
  "icon.png"
]

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});


self.addEventListener("activate", (event) => {
  console.log("Service Worker Activated");
});
