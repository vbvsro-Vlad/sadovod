// Простейший Service Worker, который умеет только перехватывать запросы
// Это нужно только для того, чтобы Chrome разрешил установить приложение

self.addEventListener('fetch', function(event) {
  // Ничего не делаем, просто перехватываем запрос и пускаем дальше
  event.respondWith(fetch(event.request));
});
