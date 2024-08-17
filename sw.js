self.addEventListener('install', (event) => {
  event.waitUntil(
      caches.open('my-cache').then((cache) => {
          return cache.addAll([
              '/',
              '/index.html',
              '/index.css',
              '/index2.html',
              '/index2.css',
              '/icon-192x192.png',
              '/icon-144x144.png',
              '/descarga.png'
          ]);
      }).catch((error) => {
          console.error('Fallo en la caché de recursos:', error);
      })
  );
});

self.addEventListener('install', (event) => {
  event.respondWith(
      caches.match(event.request).then((response) => {
          return response || fetch(event.request);
      })
  );
});
