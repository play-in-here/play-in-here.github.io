/** @param {Window} window */
export function playNow(window) {
  const html = window.document.getElementsByTagName('html').item(0)
  html.className = 'game'
  html.style.backgroundColor = '#000'
  html.innerHTML = `

  `
}

/*
(async ()=>{
  const {playNow} = await import('https://play-in-here.github.io/play-now-orna.js')
  playNow(window)
})()
*/
