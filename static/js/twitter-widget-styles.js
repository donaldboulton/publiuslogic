function customizeTweet() {

    if (document.getElementById("twitter-widget-0")) {

        var maxTweets = 10;

        for (i = 0; i < maxTweets; i++) {

            if (document.getElementById("twitter-widget-" + i)) {
                var isChromium = window.chrome;
                var winNav = window.navigator;
                var vendorName = winNav.vendor;
                var isOpera = typeof window.opr !== "undefined";
                var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
                var isIOSChrome = winNav.userAgent.match("CriOS");
                var isSafari6Plus = !!navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i) && typeof document.body.style.webkitFilter !== "undefined";
                var tweetCSS = ".EmbeddedTweet{height:auto !important}";
                var tweetStyle = document.createElement("style");

                tweetStyle.setAttribute("id", "tweet-style-" + i);
                tweetStyle.innerHTML = tweetCSS;
                tweetStyle.type = "text/css";

                if ((isIOSChrome) || (isChromium !== null && typeof isChromium !== "undefined" && vendorName === "Google Inc." && isIEedge === false) || (isOpera === true) || (isSafari6Plus)) {

                    var styleTag = document.getElementById("twitter-widget-" + i).shadowRoot;
                    styleTag.insertBefore(tweetStyle, styleTag.childNodes[0]);
                } else {

                    var tweetWidget = document.getElementById("twitter-widget-" + i).contentDocument;
                    tweetWidget.head.appendChild(tweetStyle);
                }
            } else break;
        }
    }
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}

addLoadEvent(customizeTweet);