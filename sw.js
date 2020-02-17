const staticCacheName = 'site-static-v2';
const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    '/js/ui.js',
    '/js/materialize.min.js',
    '/css/styles.css',
    '/css/materialize.min.css',
    '/img/dish.png',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'
];
// caches.open(staticCacheName) is a asynchronous task and it returns to us a promise.

// install service worker
self.addEventListener('install', evt => {
    // console.log('service worker has been installed');
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('caching all assets');
            cache.addAll(assets)
        })
    )

});

// activate event
self.addEventListener('activate', evt => {
    // console.log('service worker has been activated');
    // cache.keys is a asynchronous method which returns a promise.
    // here in waitUntil it checks the staticCacheName check the keys filter it out map it and cache the new assets reagrind the new key in the cache.
    evt.waitUntil(
        caches.keys().then(keys => {
            // console.log(keys);
            return Promise.all(keys 
                .filter(key => key !== staticCacheName)
                .map(key => caches.delete(key))
            )
        }) 
    );
})

// fetch event
self.addEventListener('fetch', evt => {
    // console.log('fetch event', evt);
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request);
        })
    )
})

