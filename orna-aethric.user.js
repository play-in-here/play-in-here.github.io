// ==UserScript==
// @name          play-in-here - orna/aethric
// @version       0.0.8
// @match         https://playorna.com
// @match         https://aethric.com
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

    btn.href = location.hash || '#'
    btn.textContent = 'Play Now!'
    btn.onclick = playNow
    btn.className = 'nav-item'
    nav.appendChild(btn)
  }

  function playNow() {
    const aethric = document.location.host === 'aethric.com'
    const cdn = `https://play-in-here.github.io/${aethric ? 'aethric' : 'orna'}`
    const game = document.createElement('script')
    const font = document.createElement('script')
    const appendChildOrigin = document.head.appendChild
    const hashs = new URLSearchParams(location.hash).get('#s')
    const s = hashs ? `https://${hashs}?s=` : ''

    if (aethric) {
      window.REALM = 'avalon'
      window.APP_VERSION = '1.6.13'
      window.CONTENT_VERSION = '3.11.2'
      window.SERVER_URI = 'https://prod.aethric.com'

      font.src = `${cdn}/fonts-61de7ed52a106deeda28.js`
      game.src = `${s}${cdn}/avalon-c08ad879d52096227cc8.js`
    } else {
      window.REALM = 'gps'
      window.APP_VERSION = '3.12.8'
      window.CONTENT_VERSION = '3.11.2'
      window.SERVER_URI = 'https://playorna.com'

      font.src = `${cdn}/fonts-61de7ed52a106deeda28.js`
      game.src = `${s}${cdn}/gps-bea8f193e11dcec24486.js`
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
          ch.setAttribute('src', `${cdn}/${src}`)
        }
      }

      return appendChildOrigin.apply(document.head, [ch])
    }

    if (aethric) {
      const protIMG = Object.getPrototypeOf(document.createElement('img'))
      const setAttrOriginIMG = protIMG.setAttribute

      protIMG.setAttribute = function setAttribute(name, value) {
        if (name === 'src' && value && value.includes('/img/avalon/')) {
          value = value.replace('./static', cdn)
        }

        return setAttrOriginIMG.apply(this, [name, value])
      }

      Object.defineProperty(protIMG, 'src', {
        get() {
          return this.getAttribute('src')
        },
        set(value) {
          this.setAttribute('src', value)
        },
        enumerable: true,
        configurable: true
      })
    }

    if (s) {
      window.$tms = () => onload()
    } else {
      game.onload = () => {
        if (!aethric) {
          if (typeof window?.appinterface?.grantPermission === 'function') {
            // @ts-ignore
            window.appinterface.grantPermission('location', true)
            // @ts-ignore
            window.appinterface.grantPermission('activity', true)
          }
        }
        onload()
        window.onload()
      }
    }

    document.body.style.overscrollBehaviorX = 'none'
    document.body.style.overscrollBehaviorY = 'none'
    document.body.className = 'game'
    document.body.innerHTML = '<div id="app"></div>'
    document.documentElement.appendChild(font)
    document.documentElement.appendChild(game)
  }

  function onload() {
    document.querySelectorAll('style').forEach(style => {
      style.textContent = style.textContent
        .replaceAll('"img/', '"static/img/')
        .replaceAll('"fonts/', '"static/fonts/')
    })
  }
})(
  // @ts-ignore
  unsafeWindow
)
