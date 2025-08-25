'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b0a482b585cb556086b6d0e57ddff869",
"version.json": "875f37b54636a526a65f72ad029dcc0b",
"index.html": "e70aee80476f902e21d38bfdccca5252",
"/": "e70aee80476f902e21d38bfdccca5252",
"main.dart.js": "49e4a0da3ef8708965f48420947bdc1d",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "17289d5c7d7443df2a6dd525f183bacb",
"assets/AssetManifest.json": "3a09d035ece5f6baacf4c6b7eb66f96c",
"assets/NOTICES": "a32f645cc534acf059f84bdb821c6c8e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "445abc978d1a18868996aa17a9857fdc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2c2fc656c600d82252acde4929bea3c2",
"assets/fonts/MaterialIcons-Regular.otf": "a2ec18d03ba66bae140e9a725a4bf783",
"assets/assets/images/flags/ru.png": "01da7b27e00103c41198efd6ab11d424",
"assets/assets/images/flags/de.png": "52ce5902ed51d2db9393c9439c46b82c",
"assets/assets/images/flags/uk.png": "5f94d206a4956ec58c461b2520f12887",
"assets/assets/audio/de_zamek_8.mp3": "5bb620ac9ca7f802672df8b31d7fd905",
"assets/assets/audio/ru_zamek_4.mp3": "fde98764d2b408db147d9e43edd90389",
"assets/assets/audio/en_zamek_5.mp3": "7e274d5130ea15a605fe03b1f247591e",
"assets/assets/audio/en_kapitola_12.mp3": "ce4936933e065b29470a41c31b5dd64b",
"assets/assets/audio/en_kapitola_13.mp3": "5954f5f92935d315894a7b25e534c8a8",
"assets/assets/audio/en_zamek_4.mp3": "fde98764d2b408db147d9e43edd90389",
"assets/assets/audio/ru_zamek_5.mp3": "7e274d5130ea15a605fe03b1f247591e",
"assets/assets/audio/de_zamek_9.mp3": "044e8dc72163573f6a6779683a05cc4e",
"assets/assets/audio/en_zamek_6.mp3": "41c54ec5d343940d5e9b5cf257314df8",
"assets/assets/audio/ru_zamek_7.mp3": "8ae05cddd3c2e3bf849cf78d00dd521e",
"assets/assets/audio/en_kapitola_11.mp3": "d1e0b4e532fbffd06d97e729f04b3071",
"assets/assets/audio/en_kapitola_10.mp3": "f1e37cf4276c40e3c77a47d6b08a48f8",
"assets/assets/audio/ru_zamek_6.mp3": "41c54ec5d343940d5e9b5cf257314df8",
"assets/assets/audio/en_zamek_7.mp3": "8ae05cddd3c2e3bf849cf78d00dd521e",
"assets/assets/audio/en_zamek_3.mp3": "730c5c16f6be4dbdf343b41145a0819e",
"assets/assets/audio/ru_zamek_2.mp3": "ccaf7f8b298b48077c1f767bd4ed1150",
"assets/assets/audio/ru_zamek_3.mp3": "730c5c16f6be4dbdf343b41145a0819e",
"assets/assets/audio/en_zamek_2.mp3": "ccaf7f8b298b48077c1f767bd4ed1150",
"assets/assets/audio/ru_zamek_1.mp3": "26d829509ba303abc934edc7974c8ff2",
"assets/assets/audio/en_zamek_1.mp3": "26d829509ba303abc934edc7974c8ff2",
"assets/assets/audio/en_kapitola_6.mp3": "4519f69c4112ee77506dbf86dca9eb23",
"assets/assets/audio/ru_kapitola_1.mp3": "1f4eef3254336e24c865e2851669e922",
"assets/assets/audio/de_kapitola_1.mp3": "e225be9a7e7945ebc88902d50ec73b76",
"assets/assets/audio/en_kapitola_7.mp3": "504e3993313f9976fb0ad9de06d9a850",
"assets/assets/audio/en_kapitola_5.mp3": "06760f29fbb740a8f168c3835db038d3",
"assets/assets/audio/de_zamek_14.mp3": "bad0aba46578a61946d47a8d705f230b",
"assets/assets/audio/de_kapitola_3.mp3": "8d1e28780e8d2f6b24b29cf29466003b",
"assets/assets/audio/ru_kapitola_2.mp3": "21f119cf22c14ef0c6b72dc240eb4532",
"assets/assets/audio/ru_kapitola_3.mp3": "f9b39a4584edc76a955f0df8fd317dee",
"assets/assets/audio/de_kapitola_2.mp3": "5439ba08286cb11a8d84e7175d867706",
"assets/assets/audio/en_kapitola_4.mp3": "5729a2080665a736acc7e8a12c5d7325",
"assets/assets/audio/de_zamek_11.mp3": "7cfa19cca9df0b0b3e4229bb7e774bff",
"assets/assets/audio/de_kapitola_6.mp3": "4370e7713177ee13cc8bbbc1c9fba1ee",
"assets/assets/audio/ru_kapitola_7.mp3": "eec3545a3895bb8e445bd0337c968194",
"assets/assets/audio/ru_kapitola_6.mp3": "2772bc9f4cf27d16fc35a5ebf9e60fb2",
"assets/assets/audio/de_kapitola_7.mp3": "870f01ca8d4d76ddfde2124006ad660c",
"assets/assets/audio/de_zamek_10.mp3": "a9d3e934c9b9a38ae73810b890257df3",
"assets/assets/audio/en_kapitola_1.mp3": "0718dc2afc6869a5466eb1ba092e0253",
"assets/assets/audio/en_kapitola_3.mp3": "2e4cb7ade1526757f6cd6806b26bd2b0",
"assets/assets/audio/de_kapitola_5.mp3": "c662e021be92ccfa1aa145357674a73d",
"assets/assets/audio/de_zamek_12.mp3": "3e49ea5372899c740bc8d1babc285038",
"assets/assets/audio/ru_kapitola_4.mp3": "a2a7d19be8be4eebc34d995b9764eb1b",
"assets/assets/audio/ru_kapitola_5.mp3": "b2fcb191adae52e78317e06876bb608c",
"assets/assets/audio/de_zamek_13.mp3": "e661b10baa2d6f877328ab1fd0abe597",
"assets/assets/audio/de_kapitola_4.mp3": "bab0e597586a3d895f027d719680fb9f",
"assets/assets/audio/en_kapitola_2.mp3": "7bf2300fa58ebbdebbdaf0a94dafeb52",
"assets/assets/audio/de_kapitola_9.mp3": "b1dfdcd06abb4b67cd71ee87235e9a33",
"assets/assets/audio/ru_kapitola_8.mp3": "51d37705037620c5b5fc88b66f8f8ebb",
"assets/assets/audio/ru_kapitola_9.mp3": "5b5acf70b157e9a0de0280544a406590",
"assets/assets/audio/de_kapitola_8.mp3": "194e9844ffb15da2b9d625b226136b93",
"assets/assets/audio/ru_kapitola_12.mp3": "48fa125bca51471e377b43cdbf7c2ce7",
"assets/assets/audio/en_kapitola_9.mp3": "6da5f75ea55bd15c8df9393c3b2f871f",
"assets/assets/audio/en_kapitola_8.mp3": "820d119887ec5dd2ce5d75c9146c7326",
"assets/assets/audio/ru_kapitola_13.mp3": "cae356c36e70d5d7a3d5df1025b6b971",
"assets/assets/audio/ru_kapitola_11.mp3": "82594d4d8d91bc4b95a83d95f6076aad",
"assets/assets/audio/ru_kapitola_10.mp3": "d1c42df5f301c41f5d329871ebc211e3",
"assets/assets/audio/de_kapitola_12.mp3": "4bdb4547fb72a489c0305ce959eb93a3",
"assets/assets/audio/de_zamek_1.mp3": "a6627d3b6247f0e29c3df79f78c3ec6c",
"assets/assets/audio/en_zamek_13.mp3": "ea3add7e477c44eaad3900b7ebcbd461",
"assets/assets/audio/ru_zamek_11.mp3": "e0661376f07e6aa041cc3da4038164f7",
"assets/assets/audio/ru_zamek_10.mp3": "f1fc6be0422e83ab746b69175d8a0bd0",
"assets/assets/audio/en_zamek_12.mp3": "0955ff6530a76fbd1fd0d21296a5a29e",
"assets/assets/audio/de_kapitola_13.mp3": "04380ca5e134816338b7a41800f9ae3c",
"assets/assets/audio/de_kapitola_11.mp3": "36f96b984bfd0a7c635ac12210820349",
"assets/assets/audio/de_zamek_2.mp3": "8011cfde00150f9f8ead7983f0390439",
"assets/assets/audio/en_zamek_10.mp3": "f1fc6be0422e83ab746b69175d8a0bd0",
"assets/assets/audio/ru_zamek_12.mp3": "0955ff6530a76fbd1fd0d21296a5a29e",
"assets/assets/audio/ru_zamek_13.mp3": "ea3add7e477c44eaad3900b7ebcbd461",
"assets/assets/audio/en_zamek_11.mp3": "e0661376f07e6aa041cc3da4038164f7",
"assets/assets/audio/de_zamek_3.mp3": "c5b5afcb5d9d263243c6c8d20a38b64a",
"assets/assets/audio/de_kapitola_10.mp3": "971d1d4339225e8238356892571dc87c",
"assets/assets/audio/de_zamek_7.mp3": "a7d0991813bbcc68691cc6c93c4fa520",
"assets/assets/audio/en_zamek_14.mp3": "88e428b5b9db3e93c9de3aabd4ba10f6",
"assets/assets/audio/de_zamek_6.mp3": "ded01f69cea68e1c19516ca847059785",
"assets/assets/audio/de_zamek_4.mp3": "5f261f901e88d4bcf430effe88db1737",
"assets/assets/audio/en_zamek_9.mp3": "703734fc491e81c49281ae47a83863d8",
"assets/assets/audio/ru_zamek_8.mp3": "1ddfa15b72b0d845f95e8351516eae55",
"assets/assets/audio/ru_zamek_14.mp3": "88e428b5b9db3e93c9de3aabd4ba10f6",
"assets/assets/audio/ru_zamek_9.mp3": "703734fc491e81c49281ae47a83863d8",
"assets/assets/audio/en_zamek_8.mp3": "1ddfa15b72b0d845f95e8351516eae55",
"assets/assets/audio/de_zamek_5.mp3": "9538e068391b6adb4acb3046b7758bb4",
"assets/assets/logo.png": "0e372d978d5e9a17b5ec3d772a57e87b",
"assets/assets/data/chapters.json": "9abfe90bd23fea18ff8572c507edb79c",
"app.js": "b8a94e1e628ee1ca12eee864861ad795",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
