// ==UserScript==
// @name          play-in-here - orna/aethric
// @version       0.0.1
// @match         https://playorna.com/*
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
    btn.className = 'nav-item'
    nav.appendChild(btn)
  }

  function playNow() {
    const cdn = 'https://cdn.jsdelivr.net/gh/play-in-here/'
    const aethric = document.location.host === 'aethric.com'
    const appName = aethric ? 'aethric' : 'orna'
    const game = document.createElement('script')
    const font = document.createElement('script')
    const appendChildOrigin = document.head.appendChild
    const hashs = new URLSearchParams(location.hash).get('#s')
    const s = hashs ? `https://${hashs}?s=` : ''

    if (aethric) {
      window.REALM = 'avalon'
      window.APP_VERSION = '1.6.10'
      window.CONTENT_VERSION = '3.11.0'
      window.SERVER_URI = 'https://prod.aethric.com'

      font.src = `${cdn}${appName}@${window.APP_VERSION}/fonts-61de7ed52a106deeda28.js`
      game.src = `${s}${cdn}${appName}@${window.APP_VERSION}/avalon-d2aeef6df3024b92a2a4.js`
    } else {
      window.REALM = 'gps'
      window.APP_VERSION = '3.11.10'
      window.CONTENT_VERSION = '3.11.0'
      window.SERVER_URI = 'https://playorna.com'

      font.src = `${cdn}${appName}@${window.APP_VERSION}/fonts-61de7ed52a106deeda28.js`
      game.src = `${s}${cdn}${appName}@${window.APP_VERSION}/gps-5c1af58d04f71d003087.js`
    }

    window.STATIC_URL = './static/'
    window.CHAT_URI = 'wss://chat.orna.gg/ws/'
    window.I18N_ENABLED = true
    window.DEBUG = false
    window.SANDBOX = false

    document.head.appendChild = ch => {
      if (ch.tagName === 'SCRIPT') {
        /** @type {string} */
        const src = ch.getAttribute('src')

        if (src.startsWith('lang-') || src.startsWith('game-lang-')) {
          ch.setAttribute('src', `${cdn}${appName}@${window.APP_VERSION}/${src}`)
        }
      }

      return appendChildOrigin.apply(document.head, [ch])
    }

    document.body.className = 'game'
    document.body.innerHTML = '<div id="app"></div>'
    document.documentElement.appendChild(font)
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
