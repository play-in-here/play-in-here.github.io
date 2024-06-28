// ==UserScript==
// @name          anroyalp.github.io
// @namespace     anroyalp.github.io
// @version       0.0.3
// @description   anroyalp.github.io
// @include       https://playorna.com/*
// @run-at        document-end
// @grant         unsafeWindow
// @noframes
// ==/UserScript==
/* global unsafeWindow */
(({ document }) => {
  document.body.className = 'game'
  document.body.innerHTML = '<div id="app"></div>'
  
  const fonts = document.createElement('script')
  const game = document.createElement('script')

  fonts.src = 'https://cdn.jsdelivr.net/gh/anroyalp/anroyalp.github.io@0.0.3/fonts-3.11.7.js'
  game.src = 'https://cdn.jsdelivr.net/gh/anroyalp/anroyalp.github.io@0.0.3/game-3.11.7.js'

  document.documentElement.appendChild(fonts)
  document.documentElement.appendChild(game)
})(
  // @ts-ignore
  unsafeWindow
)
