/** @param {Window} window */
function playNow(window) {
  const cdn = 'https://play-in-here.github.io/orna/'
  const html = window.document.getElementsByTagName('html').item(0)
  const head = window.document.head
  const body = window.document.body
  const stylesheets = [
    'vendor-BbLJ9bNe.css',
    'sprite-cache-D2lcEJLo.css',
    'touch-manager-UdHo9GzG.css',
    'common-DzDL5oCw.css',
    'fonts-Dl_ucFy9.css',
    'buttons-DqFJwy7H.css',
    'gps-DSWNjl_R.css'
  ]
  const scripts = [
    'common-DXtOKQMO.js',
    'vendor-DzvT6gzj.js',
    'sprite-cache-Bffs2Z0b.js',
    'entry-point-DBBuXc5f.js',
    'touch-manager-DSi1NsVQ.js',
    'gps-BgV5JYOx.js',
    'modulepreload-polyfill-NXl4maoO.js'
  ]
  const gameML = `
    <div id="app">
      <div style="background: black;  height: 200vh; margin: -8px" id="goneWithVue">
        <div style="display: flex; flex-direction: column; color: white; font-size: 80%; font-family: Merriweather, Inter, Arial, Helvetica, sans-serif; position:fixed; top: 50%; left:50%; transform: translate(-50%, -50%)">
          <img style="width: 192px; height: 192px" src="https://playorna.com/static/img/northern_forge.jpg" />
        </div>
      </div>
    </div>
  `

  window.REALM = 'gps';
  window.APP_VERSION = '3.26.2';
  window.CONTENT_VERSION = '3.26.2';
  window.STATIC_URL = './static/';
  window.SERVER_URI = 'https://playorna.com';
  window.CHAT_URI = 'wss://chat.orna.gg/ws/';
  window.DEBUG = false;
  window.SANDBOX = false;
  if (navigator.userAgent && navigator.userAgent.includes('Android 12') && (
    navigator.userAgent.includes('SM-') || navigator.userAgent.includes(' vivo ')
  )) {
    document.getElementById('viewport').setAttribute('content', 'initial-scale=1, user-scalable=no, width=' + screen.width);
  }

  html.className = 'game'
  html.style.backgroundColor = '#000'
  body.className = 'game'
  body.innerHTML = gameML

  const loaded = []

  for (const stylesheet of stylesheets) {
    loaded.push(new Promise(async resolve => {
      const style = document.createElement('style')
      let stlText = await fetch(`${cdn}${stylesheet}`)

      stlText = await stlText.text()
      style.textContent = stlText
        .replaceAll('url(img/', 'url(https://playorna.com/static/img/')
        .replaceAll('url(fonts/', 'url(https://playorna.com/static/fonts/')
        .replaceAll('url(/static/fonts/', 'url(https://playorna.com/static/fonts/')
      style.type = 'text/css'
      head.appendChild(style)
      resolve()
    }))
  }

  for (const script of scripts) {
    const scr = document.createElement('script')

    scr.type = 'module'
    scr.src = `${cdn}${script}`

    loaded.push(new Promise((resolve => {
      scr.onload = () => resolve()
    })))

    head.appendChild(scr)
  }

  Promise.all(loaded).then(() => {
    window.appinterface.grantPermission('location', true)
    window.appinterface.grantPermission('activity', true)
    window.onload(new Event('onload'))
  })
}

// playNow(window)
/*
(async ()=>{
  const {playNow} = await import('https://play-in-here.github.io/play-now-orna.js')
  playNow(window)
})()
*/

export { playNow }
