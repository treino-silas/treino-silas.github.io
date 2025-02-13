const CACHE_NAME = "treino-cache-v1";
const urlsToCache = [
    "/", 
    "/index.html",
    "/treino.json",
    "/css/bootstrap.min.css",
    "/js/bootstrap.bundle.min.js"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
