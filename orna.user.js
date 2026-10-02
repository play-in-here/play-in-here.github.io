// ==UserScript==
// @name          play-in-here - orna
// @version       0.0.1
// @match         https://playorna.com
// @run-at        document-end
// @grant         unsafeWindow
// @noframes
// ==/UserScript==
/* global unsafeWindow */
(async () => {
  const { playNow } = await import('https://play-in-here.github.io/play-now-orna.js')
  playNow(unsafeWindow)
})()
