const CACHE_NAME = 'todo-list-cache';

// List of URLs to cache for offline use
const urlsToCache = [
    '/',
    '/index.html',
    '/script.js',
    '/style.css',
    '/manifest.json',
    '/images/favicon128.ico',
    '/images/favicon256.png'
]

// Install event: cache all specified resources
self.addEventListener("install", event =>{
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache =>
            cache.addAll(urlsToCache)
        )
    )
})

// Fetch event: respond with cached resource if available, otherwise fetch from network
self.addEventListener("fetch", event =>{
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});