/** @param {Window} window */
export function playNow(window) {
  const html = window.document.getElementsByTagName('html').item(0)
  const gameML = `
    <head>
      <meta name="viewport" id="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
      <meta name="apple-mobile-web-app-capable" content="yes">
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
      <meta name="format-detection" content="telephone=no" />
      <meta name="format-detection" content="email=no" />
      <meta name="format-detection" content="address=no"/>
      <meta http-equiv="content-type" content="text/html; charset=UTF-8">
      <link rel="shortcut icon" href="/img/favicon.png">
      <title> </title>

      <script>
        window.REALM = 'gps';
        window.APP_VERSION = '3.26.2';
        window.CONTENT_VERSION = '3.26.2';
        window.STATIC_URL = './';
        window.SERVER_URI = 'https://playorna.com';
        window.CHAT_URI = 'wss://chat.orna.gg/ws/';
        window.DEBUG =  false;
        window.SANDBOX =  false;
        if (navigator.userAgent && navigator.userAgent.includes('Android 12') && (
          navigator.userAgent.includes('SM-') || navigator.userAgent.includes(' vivo ')
        )) {
          document.getElementById('viewport').setAttribute('content', 'initial-scale=1, user-scalable=no, width=' + screen.width);
        }
      </script>

    <link  rel="stylesheet" href="./vendor-BbLJ9bNe.css" />
    <link  rel="stylesheet" href="./sprite-cache-D2lcEJLo.css" />
    <link  rel="stylesheet" href="./touch-manager-UdHo9GzG.css" />
    <link  rel="stylesheet" href="./common-DzDL5oCw.css" />
    <link  rel="stylesheet" href="./fonts-Dl_ucFy9.css" />
    <link  rel="stylesheet" href="./buttons-DqFJwy7H.css" />
    <script type="module" crossorigin="" src="./common-DXtOKQMO.js"></script>
    <link href="./vendor-DzvT6gzj.js" type="text/javascript" crossorigin="anonymous" rel="modulepreload" as="script" />
    <link href="./sprite-cache-Bffs2Z0b.js" type="text/javascript" crossorigin="anonymous" rel="modulepreload" as="script" />
    <link href="./entry-point-DBBuXc5f.js" type="text/javascript" crossorigin="anonymous" rel="modulepreload" as="script" />
    <link href="./touch-manager-DSi1NsVQ.js" type="text/javascript" crossorigin="anonymous" rel="modulepreload" as="script" />
    <link  rel="stylesheet" href="./vendor-BbLJ9bNe.css" />
    <link  rel="stylesheet" href="./sprite-cache-D2lcEJLo.css" />
    <link  rel="stylesheet" href="./gps-DSWNjl_R.css" />
    <script type="module" crossorigin="" src="./gps-BgV5JYOx.js"></script>
    <link href="./modulepreload-polyfill-NXl4maoO.js" type="text/javascript" crossorigin="anonymous" rel="modulepreload" as="script" />
    <link href="./sprite-cache-Bffs2Z0b.js" type="text/javascript" crossorigin="anonymous" rel="modulepreload" as="script" />
    <link href="./entry-point-DBBuXc5f.js" type="text/javascript" crossorigin="anonymous" rel="modulepreload" as="script" />
    <link href="./vendor-DzvT6gzj.js" type="text/javascript" crossorigin="anonymous" rel="modulepreload" as="script" />
    </head>

    <body class="game">
      <div id="app">
        <div style="background: black;  height: 200vh; margin: -8px" id="goneWithVue">
          <div style="display: flex; flex-direction: column; color: white; font-size: 80%; font-family: Merriweather, Inter, Arial, Helvetica, sans-serif; position:fixed; top: 50%; left:50%; transform: translate(-50%, -50%)">
            <img style="width: 192px; height: 192px" src="./img/northern_forge.jpg" />
          </div>
        </div>
      </div>
    </body>
  `
    .replace('src="./img', 'src="https://playorna.com/static/img')
    .replace(`STATIC_URL = './'`, `STATIC_URL = 'https://playorna.com/static/'`)
    .replaceAll('./', "https://play-in-here.github.io/orna/")

  html.className = 'game'
  html.style.backgroundColor = '#000'
  html.innerHTML = gameML

  setTimeout(() => {
    window.onload(new Event('onload'))
  }, 3000)
}

/*
(async ()=>{
  const {playNow} = await import('https://play-in-here.github.io/play-now-orna.js')
  playNow(window)
})()
*/
