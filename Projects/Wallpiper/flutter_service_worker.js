'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "4ff65d4c60b7edd5c7f77b2a948588cd",
"assets/assets/categories/3D.jpeg": "14e95542c3745aa25eab8512514f736f",
"assets/assets/categories/Abstract.jpeg": "54c594e2b225b46af10776cccebd2a60",
"assets/assets/categories/Alone.jpeg": "a3fa42c9bfd3faf09b49a23bfd975a4f",
"assets/assets/categories/Animals.jpeg": "d4f51cc30f8e5ea323983690c9c58535",
"assets/assets/categories/Anime.jpeg": "02b42c18eae868970d1f5dcb2ba44ffc",
"assets/assets/categories/Art.jpeg": "3771313307abd9e1bc8d6ceec9fc81a6",
"assets/assets/categories/Black.jpeg": "45b2e71a26d4971ccd4ca56430087dc1",
"assets/assets/categories/Cars.jpeg": "cf209de3b863501727f482c607941008",
"assets/assets/categories/City.jpeg": "770d76a0de7b21a591a9aa4d13abf533",
"assets/assets/categories/Drinks.jpeg": "f94281a38cbfe88a2fc884785406ca51",
"assets/assets/categories/Entertainment.jpeg": "1687354bebfe4e8c281d5f16017cd57d",
"assets/assets/categories/Fantasy.jpeg": "0ec1e54227984d6ccf96db8e89699362",
"assets/assets/categories/Flowers.jpeg": "839c57c9567b5e395c09ba631f758cc5",
"assets/assets/categories/Food.jpeg": "58af43f8c64520051ae8685c90609d30",
"assets/assets/categories/Holiday.jpeg": "f74b1db1eaf8ff14afcc07a845a8f8cb",
"assets/assets/categories/Macro.jpeg": "9964548c013435fbd0c9697bbff595ef",
"assets/assets/categories/Mask.jpeg": "b58969ef73c76119de435277a6b1c70a",
"assets/assets/categories/Motorcycles.jpeg": "9c07204eeab3aba4a1733fc1a89d21de",
"assets/assets/categories/Music.jpeg": "b38ad495959ee329c26f646dd576fdfb",
"assets/assets/categories/Nature.jpeg": "67712e984e671fcdcab0bcdf3a38051c",
"assets/assets/categories/Neon.jpeg": "62b55056994fe0087a2804981b7b9cd6",
"assets/assets/categories/People.jpeg": "09522867cf4f2f44ba7bef561e66fdc2",
"assets/assets/categories/Predator.jpeg": "68915f34cc7f93e7748585c096611406",
"assets/assets/categories/Smiles.jpeg": "51b66a0f0ed05e65552540c869b962f9",
"assets/assets/categories/Space.jpeg": "02e9d3a25b442c7bb9a1a49f6956d672",
"assets/assets/categories/Sports.jpeg": "f22d7ad4718ba54ca3d860468160220c",
"assets/assets/categories/Summer.jpeg": "6e2e9847daaceb5b3210b7777a008b2c",
"assets/assets/categories/Technology.jpeg": "0450e5423121c852e0312385ab855555",
"assets/assets/categories/Textures.jpeg": "88a844ba88cbefbfe36cd563ad05e389",
"assets/assets/categories/Vector.jpeg": "df5bd86a09e5091d948f8cf501eac0d3",
"assets/assets/categories/Vehicles.jpeg": "f350691e454f3777e870dabcc0bc3f55",
"assets/assets/categories/White.jpeg": "15dcfe235c0afe27b5e28dbc5a4427b0",
"assets/assets/categories/Winter.jpeg": "6a7adaa5499b7c7776e3dc35b91c2071",
"assets/assets/categories/Words.jpeg": "4a690cbe8fc3888dacbef86f403e9f79",
"assets/assets/categories/World.jpeg": "c909f916bf7fd5a581e9479ea1015714",
"assets/assets/favicon.ico": "a20a09dd766ba6790638969dcbd10ca2",
"assets/assets/giphy.gif": "b71b7d6046bdfbee99ed17e1c3adecdf",
"assets/assets/hugo-under-construction.png": "58c36f446ced93c58730bd96c1bd7130",
"assets/assets/no_connection.png": "479b0f6048a89c3a5573622d8faf0d52",
"assets/assets/splash.png": "af262e8d67c7e9a14cffbf58e94b030e",
"assets/assets/splash2.png": "f47b6fdaa1ba4ec5ea5a97eb6d9abe20",
"assets/assets/the-list-is-empty.png": "ee2eb57c3fcad9cdcd9f3ed4be14dfa2",
"assets/assets/wallpiper.png": "1c89f49d49fd32bdbaadbf353333d780",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "36c9d891815c8c4ec7b7ab5262bbfe92",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "e75f8a8b07435a7802d7d6838c2a89ca",
"icons/Icon-192.png": "2e261c0416860b584fa02d3cde33b597",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f25fe6459cf1e194090797b9ae0c1fd2",
"/": "f25fe6459cf1e194090797b9ae0c1fd2",
"main.dart.js": "51014017c8d5e8b9498b59a6e82f1a6a",
"manifest.json": "b8371f2cf47ccefd3ce992822fee16e6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
