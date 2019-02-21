/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
<<<<<<< HEAD
<<<<<<< HEAD
  "/precache-manifest.f2fa85d10461b63b10190a21dc837b92.js"
=======
  "/precache-manifest.32956f1c1f7e6e31bc93c88f783f4a59.js"
>>>>>>> edec116a69bcb34c17d962b79cce20c0b4962284
=======
  "/precache-manifest.32956f1c1f7e6e31bc93c88f783f4a59.js"
>>>>>>> edec116a69bcb34c17d962b79cce20c0b4962284
);

workbox.core.setCacheNameDetails({prefix: "share-platform"});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
