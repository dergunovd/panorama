const cacheName = 'panorama-demo',
  filesToCache = [
    '/',
    '/index.html',
    '/panorama.js',
    '/images/room0/px.webp',
    '/images/room0/nx.webp',
    '/images/room0/py.webp',
    '/images/room0/ny.webp',
    '/images/room0/pz.webp',
    '/images/room0/nz.webp',
    '/images/room1/px.webp',
    '/images/room1/nx.webp',
    '/images/room1/py.webp',
    '/images/room1/ny.webp',
    '/images/room1/pz.webp',
    '/images/room1/nz.webp',
    '/images/room2/px.webp',
    '/images/room2/nx.webp',
    '/images/room2/py.webp',
    '/images/room2/ny.webp',
    '/images/room2/pz.webp',
    '/images/room2/nz.webp',
    '/images/room0/px.jpg',
    '/images/room0/nx.jpg',
    '/images/room0/py.jpg',
    '/images/room0/ny.jpg',
    '/images/room0/pz.jpg',
    '/images/room0/nz.jpg',
    '/images/room1/px.jpg',
    '/images/room1/nx.jpg',
    '/images/room1/py.jpg',
    '/images/room1/ny.jpg',
    '/images/room1/pz.jpg',
    '/images/room1/nz.jpg',
    '/images/room2/px.jpg',
    '/images/room2/nx.jpg',
    '/images/room2/py.jpg',
    '/images/room2/ny.jpg',
    '/images/room2/pz.jpg',
    '/images/room2/nz.jpg'
  ];
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(response => {
      return response || fetch(event.request);
    })
  );
});
