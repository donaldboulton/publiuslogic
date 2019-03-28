const injectTwitterScript = () => {
  function addJS(jsCode) {
    var s = document.createElement(`script`)

    s.type = `text/javascript`
    s.innerText = jsCode
    document.getElementsByTagName(`head`)[0].appendChild(s)
  }
  addJS(`
    window.twttr = (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
      if (d.getElementById(id)) return t;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);
      t._e = [];
      t.ready = function(f) {
        t._e.push(f);
      };
      return t;
    })(document, "script", "twitter-wjs");
  `)
}

let injectedTwitterScript = false

const embedClasses = [
  `.twitter-tweet`,
  `.twitter-timeline`,
  `.twitter-follow-button`,
  `.twitter-share-button`,
].join(`,`)

exports.onRouteUpdate = () => {
  // If there's an embedded element, lazy-load the twitter script (if it hasn't
  // already been loaded), and then run the twitter load function.
  if (document.querySelector(embedClasses) !== null) {
    if (!injectedTwitterScript) {
      injectTwitterScript()
      injectedTwitterScript = true
    }

    if (
      typeof twttr !== `undefined` &&
      window.twttr.widgets &&
      typeof window.twttr.widgets.load === `function`
    ) {
      window.twttr.widgets.load()
    }
  }
}
(function () {
  if (window.__twitterIntentHandler) return
  var intentRegex = /twitter\.com\/intent\/(\w+)/
  var windowOptions = 'scrollbars=yes,resizable=yes,toolbar=no,location=yes'
  var width = 550
  var height = 420
  var winHeight = screen.height
  var winWidth = screen.width

  function handleIntent (e) {
    e = e || window.event
    var target = e.target || e.srcElement
    var m; var left
    var top
    while (target && target.nodeName.toLowerCase() !== 'a') {
      target = target.parentNode
    }

    if (target && target.nodeName.toLowerCase() === 'a' && target.href) {
      m = target.href.match(intentRegex)
      if (m) {
        left = Math.round((winWidth / 2) - (width / 2))
        top = 0

        if (winHeight > height) {
          top = Math.round((winHeight / 2) - (height / 2))
        }
        window.open(target.href, 'intent', windowOptions + ',width=' + width +
                                             ',height=' + height + ',left=' + left + ',top=' + top)
        e.returnValue = false
        e.preventDefault && e.preventDefault()
      }
    }
  }

  if (document.addEventListener) {
    document.addEventListener('click', handleIntent, false)
  } else if (document.attachEvent) {
    document.attachEvent('onclick', handleIntent)
  }
  window.__twitterIntentHandler = true
}())
