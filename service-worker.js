const CACHE_NAME = 'todo-list-cache';

const urlsToCache = [
    '/',
    '/index.html',
    '/script.js',
    '/style.css',
    '/manifest.json',
    '/images/favicon256.ico'
]

self.addEventListener("install", event =>{
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache =>
            cache.addAll(urlsToCache)
        )
    )
})

self.addEventListener("fetch", event =>{
    event.respondWith(
        caches.match(event.request).then(response => response ||  fetch(event.request))
    );
});