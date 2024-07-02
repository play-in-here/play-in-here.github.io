// ==UserScript==
// @name          play-in-here - aethric.user.js
// @version       0.0.0
// @match         https://aethric.com/*
// @run-at        document-end
// @grant         unsafeWindow
// @noframes
// ==/UserScript==
/* global unsafeWindow */
(window => {
  const { document } = window
  const nav = document.getElementById('nav')

  if (nav) {
    const btn = document.createElement('a')

    btn.href = '#'
    btn.textContent = 'Play Now!'
    btn.onclick = playNow
    btn.className = 'nav-item nav-item-desktop'
    nav.appendChild(btn)
  }

  function playNow() {
    const script = document.createElement('script')

    script.src = 'https://play-in-here.github.io/test.js'
    document.documentElement.appendChild(script)
  }
})(
  // @ts-ignore
  unsafeWindow
)
