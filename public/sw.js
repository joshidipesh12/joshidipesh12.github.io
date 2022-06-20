try {
  const PRECACHE = 'precache-v2';
  const RUNTIME = 'runtime';

  // A list of local resources we always want to be cached.
  const PRECACHE_URLS = [
    `public/favicon.ico`,
    `public/me.webp`,
    `public/myData.json`,
    `public/screenshot.png`,
    `public/vercel.svg`,
    `public/icons/chevron-down.svg`,
    `public/icons/link.svg`,
    `public/icons/vercel.ico`,
    `public/images/4runners.png`,
    `public/images/animeapis.png`,
    `public/images/deepfake.webp`,
    `public/images/door2door.png`,
    `public/images/drivey.png`,
    `public/images/express_mongodb.png`,
    `public/images/nalanda.png`,
    `public/images/poison.png`,
    `public/images/posters.png`,
    `public/images/thoughtboard.png`,
    `public/images/travming.png`,
    `public/images/weatherapp.png`,
    `public/stack/github.svg`,
    `public/stack/figma.svg`,
    `public/stack/web.svg`,
    `public/stack/store.svg`,
  ];

  // The install handler takes care of precaching the resources we always need.
  self.addEventListener('install', event => {
    console.log('installing sw');
    event.waitUntil(
      caches
        .open(PRECACHE)
        .then(cache => cache.addAll(PRECACHE_URLS))
        .then(() => self.skipWaiting()),
    );
  });
  // The activate handler takes care of cleaning up old caches.
  self.addEventListener('activate', event => {
    const currentCaches = [PRECACHE, RUNTIME];
    console.log('activate cache');
    event.waitUntil(
      caches
        .keys()
        .then(cacheNames => {
          return cacheNames.filter(
            cacheName => !currentCaches.includes(cacheName),
          );
        })
        .then(cachesToDelete => {
          console.log('deleting old cache');
          return Promise.all(
            cachesToDelete.map(cacheToDelete => {
              return caches.delete(cacheToDelete);
            }),
          );
        })
        .then(() => self.clients.claim()),
    );
  });

  // The fetch handler serves responses for same-origin resources from a cache.
  // If no response is found, it populates the runtime cache with the response
  // from the network before returning it to the page.
  self.addEventListener('fetch', event => {
    // Skip cross-origin requests, like those for Google Analytics.
    if (event.request.url.startsWith(self.location.origin)) {
      event.respondWith(
        caches.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }

          return caches.open(RUNTIME).then(cache => {
            return fetch(event.request, {}).then(response => {
              // Put a copy of the response in the runtime cache.
              return cache.put(event.request, response.clone()).then(() => {
                return response;
              });
            });
          });
        }),
      );
    }
  });
} catch (e) {
  console.log('Error: ', e);
}
