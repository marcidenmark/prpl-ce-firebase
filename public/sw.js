importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "elements/detail-view.js",
    "revision": "74cb8d634cfab3dc639dbc6172dc45fe"
  },
  {
    "url": "elements/list-view.js",
    "revision": "c67ff3c519e7026524e99fa46e72ee65"
  },
  {
    "url": "elements/my-app.js",
    "revision": "c988f5e5dbe96c2d60c4537e9f3873c0"
  },
  {
    "url": "favicon.ico",
    "revision": "25ba468ed4ce64ffbd05c18ec78a63a4"
  },
  {
    "url": "index.html",
    "revision": "e064b4f32f697de711d1a67414e2b0fb"
  },
  {
    "url": "style.css",
    "revision": "136144651ad43b738bee8feeaef6dd93"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
