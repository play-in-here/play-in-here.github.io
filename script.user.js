// ==UserScript==
// @name          anroyalp.github.io
// @namespace     anroyalp.github.io
// @version       0.0.0
// @description   anroyalp.github.io
// @include       https://playorna.com/*
// @run-at        document-end
// @grant         unsafeWindow
// @noframes
// ==/UserScript==
/* global unsafeWindow */
(({ document }) => {
  const script = document.createElement('script')

  script.id = 'anroyalp.github.io'
  script.src = 'https://cdn.jsdelivr.net/gh/anroyalp/anroyalp.github.io@0.0.0/test.js'

  document.documentElement.appendChild(script)
})(
  // @ts-ignore
  unsafeWindow
)
