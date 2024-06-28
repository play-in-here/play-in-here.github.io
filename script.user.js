// ==UserScript==
// @name          anroyalp.github.io
// @namespace     anroyalp.github.io
// @version       0.0.6
// @description   anroyalp.github.io
// @match         https://playorna.com/*
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
    window.APP_VERSION = '3.11.7'
    window.CONTENT_VERSION = '3.11.0'
    window.STATIC_URL = './static/'
    window.SERVER_URI = 'https://playorna.com'
    window.CHAT_URI = 'wss://chat.orna.gg/ws/'
    window.I18N_ENABLED = true
    window.DEBUG = false
    window.SANDBOX = false

    document.body.className = 'game'
    document.body.innerHTML = '<div id="app"></div>'

    const fonts = document.createElement('script')
    const game = document.createElement('script')

    fonts.src = 'https://cdn.jsdelivr.net/gh/anroyalp/anroyalp.github.io@0.0.6/fonts-3.11.7.js'
    game.src = 'https://cdn.jsdelivr.net/gh/anroyalp/anroyalp.github.io@0.0.6/game-3.11.7.js'

    document.documentElement.appendChild(fonts)
    document.documentElement.appendChild(game)

    game.onload = () => {
      document.querySelectorAll('style').forEach(style => {
        style.textContent = style.textContent
          .replaceAll('"img/', '"static/img/')
          .replaceAll('"fonts/', '"static/fonts/')
      })

      window.onload()
    }
  }
})(
  // @ts-ignore
  unsafeWindow
)
