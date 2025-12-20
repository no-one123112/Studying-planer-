self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("study-planner-cache").then(cache => {
      return cache.addAll([
        "/Studying-planer/",
        "/Studying-planer/index.html"
      ]);
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
