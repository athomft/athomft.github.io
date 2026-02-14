// Basic service worker for PWA offline support
const CACHE_NAME = 'loan-note-cache-v1';
const urlsToCache = [
    'index.html',
    'contact.html',
    'blogs.html',
    'styles.css',
    'assets/icons/favicon-96x96.png',
    'assets/icons/favicon.svg',
    'assets/icons/apple-touch-icon.png',
    'assets/icons/web-app-manifest-192x192.png',
    'assets/icons/web-app-manifest-512x512.png',
    'assets/icons/site.webmanifest'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(name => name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            );
        })
    );
});
