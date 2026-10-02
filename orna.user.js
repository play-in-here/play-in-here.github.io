// ==UserScript==
// @name          play-in-here - orna
// @version       0.0.2
// @match         https://playorna.com
// @run-at        document-end
// @grant         unsafeWindow
// @noframes
// ==/UserScript==
/* global unsafeWindow */
(async window => {
  const { document } = window
  const { playNow } = await import('https://play-in-here.github.io/play-now-orna.js')
  const nav = document.getElementById('nav')

  if (nav) {
    const btn = document.createElement('a')

    btn.href = location.hash || '#'
    btn.textContent = 'Play Now!'
    btn.onclick = () => playNow(window)
    btn.className = 'nav-item'
    nav.appendChild(btn)
  }

})(unsafeWindow)
