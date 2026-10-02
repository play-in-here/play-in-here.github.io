// ==UserScript==
// @name          play-in-here - orna
// @version       0.0.3
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
  const navPlay = document.querySelector('.nav-item.nav-play')
  const playNowBtn = document.createElement('a')

  playNowBtn.href = location.hash || '#'
  playNowBtn.textContent = 'Play Now!'
  playNowBtn.onclick = () => playNow(window)
  playNowBtn.className = 'nav-item nav-play'

  if (navPlay) {
    navPlay.after(playNowBtn)
  } else if (nav) {
    nav.appendChild(playNowBtn)
  }

})(unsafeWindow)
