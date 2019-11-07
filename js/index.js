/*
 ** A special thanks goes out to Jake Albaugh ( and pen#PwLXXP )
 ** http://codepen.io/jakealbaugh/blog/self-coding-pens-and-finding-joy-in-useless-code
 **
 */
;(function() {
  var openComment,
    styles,
    time,
    writeStyleChar,
    writeStyles,
    send,
    loadCSS,
    i = 0

  styles =
    '/*** Special thanks to Dave Alger and Jake Albaugh !' +
    '\n *** Find them on codepen.io' +
    '\n *** Dave Alger writing:' +
    '\n **  "Jake Albaugh is the first person I know of to inject css code into the DOM character by character."' +
    '\n *** Very  Impressive! Thanks for the inspiration Jake!' +
    "\n *** Dave say he's a robots but is'nt' a robot..." +
    '\n *** He makes jokes and he makes the machine speak!' +
    '\n *** I enjoy his humor :):):)\n' +
    '\n *** Excuse me for my poor english !\n' +
    '\n *** By reading while writing, trying to make it better !\n' +
    '\n *** Here my own Resume... ' +
    '\n\n **********************************/' +
    '\n\nbody{\n font-size: 14px; \n line-height: 14px;\n -webkit-font-smoothing: subpixel-antialiased;\n}' +
    '\n\npre{\n width: 100%;\n height: 100vh;\n float: right;\n margin: 0;\n background-color: #333333;\n color: #ffffff;\n padding: 12px;\n}' +
    '\n\npre em:not(.comment) {\n font-style: normal;\n }' +
    '\n\n.comment{ \n color: #bbbbbb;\n }' +
    '\n\n.selector{ \n color: #446fc9;\n }' +
    '\n\n.selector .key {\n color: #446fc9;\n }' +
    '\n\n.key{\n color: #8757ad;\n } \n\n.value{ \n color: #93C763;\n }   ' +
    '\n\npre{\nwidth:75%;\n}' +
    '\n\n#about_myself{\n float: left; $\n width: 25%;\n background: #f2f2f2;\n height: 650px;\n color: #333333; \n}                     ' +
    '\n\n#about_myself span::before{\n display: inline-block;\n padding-bottom: 1rem;\n font-size: 1.3rem;\n font-weight: bolder; \n content: "À mon sujet";\n}  ' +
    '\n\n#skills{\n float:left; $\n height:0;\n width:25%;\n background:#f2f2f2;\n height: 650px;\n color:#333333;\n } ' +
    '\n\npre{\nwidth:50%;\n}' +
    '\n\n#skills span:before{\n font-size:1.3rem; \n font-weight:bolder; \n content:"Compétences";\n \n display:inline-block;\n padding-bottom:1rem;\n} ' +
    '\n\n#article span:before{\n font-size:1.5rem;  \n}  ' +
    '\n\n#skills li{\n padding:.5rem;\n}' +
    '\n\n#skills li:nth-child(1)::before{\n content:"HTML5 - CSS3";\n}' +
    '\n\n#skills li:nth-child(2)::before{\n content:"PHP - MYSQL - AJAX";\n}' +
    '\n\n#skills li:nth-child(3)::before{\n content:"JavaScript (ES6)";\n}' +
    '\n\n#skills li:nth-child(4)::before{\n content:"Jquery";\n}' +
    '\n\n#skills li:nth-child(5)::before{\n content:"React.js - Vue.js - Webpack.js";\n}' +
    '\n\n#skills li:nth-child(6)::before{\n content:"Node.js - Express, ejs  ";\n}' +
    '\n\n#skills li:nth-child(7)::before{\n content:"GraphQl";\n}' +
    '\n\n#skills li:nth-child(9)::before{\n content:"POO MVC PRF";\n}' +
    '\n\n#skills li:nth-child(10)::before{\n content:"";\n}' +
    '\n\n#skills li:nth-child(11)::before{\n content:"Design Pattern";\n}' +
    '\n\n#skills li:nth-child(12)::before{\n content:"UX - UI ";\n}' +
    '\n\n#skills li:nth-child(13)::before{\n content:"Responsive Webdesign - Flat - Almost - Material Design";\n}' +
    '\n\n#skills li:nth-child(14)::before{\n content:"Adobe Ceative Suite";\n}' +
    '\n\npre{\n height: 400px;\n}' +
    '\n\n#work_experiences{\n float:left;\n width:25%; \n min-height:475px; $\n background:#f2f2f2; \n color:#333333;\n}         ' +
    '\n\n#work_experiences span:before{\n font-size:1.3rem; \n font-weight:bolder;\n content:"Expériences";\n display: inline-block;\n padding-bottom:1rem;\n} ' +
    '\n\npre{\n height: 200px;\n}' +
    '\n\n#title{\n text-align:center; \n background:#f2f2f2;\n width:50%;\n height:0; \n height:100px;\n line-height:100px;\n color:#333333;\n border-bottom: 2px dashed #d9d9d9\n} ' +
    '\n\n#about_myself{\nborder-right: 2px dashed #d9d9d9; \nborder-bottom: 2px dashed #d9d9d9;\n} ' +
    '\n\n#skills{\nborder-right: 2px dashed #d9d9d9; \nborder-bottom: 2px dashed #d9d9d9;\n} ' +
    '\n\n#title{\n border-bottom: 2px dashed #d9d9d9\n} \n\n' +
    '\n\n#contact{\n float: \n left;\n background: #f2f2f2;\n height: 200px;\n width: 25%;\ncolor: #333333;\n border-right: 2px dashed #d9d9d9;\n}' +
    '\n\n#mail a{\n color:#333333;\n }' +
    '\n\n#name{\n padding:1rem; \n display:block;\n font-size:1.3rem;\n border-bottom: 2px dashed #d9d9d9;\n }' +
    '\n\n#place{\n padding:1rem; \n display:block;\n border-bottom: 2px dashed #d9d9d9;\n }' +
    '\n\n#mail{\n padding:1rem; \n display:block;\n  border-bottom: 2px dashed #d9d9d9; \n}' +
    '\n\n#tel{\n padding:1rem; \n display:block;\n border-bottom: 2px dashed #d9d9d9;\n}' +
    '\n\n#about_myself{\n margin-top:200px;\n  margin-left:-25%;\n }' +
    '\n\n#work_experiences{\n border-right: 2px dashed #d9d9d9;\n border-bottom: 2px dashed #d9d9d9\n} ' +
    // '\n\npre{\n height:100px;\n}' +
    // '\n\npre{\n width:25%;\n}' +
    // '\n\n#title{\n width:75%\n} ' +
    '\n\n#formations{\n height: 475px; \n width:25%; $\n background:#f2f2f2; \n float:left; \n color:#333333;\n border-bottom: 2px dashed #d9d9d9;\n } ' +
    '\n\n#formations span:before{\npadding-bottom:1rem; \n font-size:1.3rem; \n font-weight:bolder; \n content:"Formations";\n display:inline-block;\n } ' +
    '\n\n#raspberry{\nfloat:left; \n height:300px; \n$  background:#f2f2f2; \n width:30%; \n border-right: 2px dashed #d9d9d9; \n border-bottom: 2px dashed #d9d9d9;\n} ' +
    '\n\n#raspberry svg{\n display:inline-block; } ' +
    '\n\n#raspberry span:before{\npadding-bottom:1rem;\n font-size:1.3rem; \n font-weight:bolder; \n content:"Raspberry";\n display:inline-block;\n } ' +
    '\n\n#raspberry{\n float:left;\n color:#333333;\n } ' +
    '\n\n#raspberry{\n border-bottom: 2px dashed #d9d9d9\n} ' +
    '\n\nbody{\n background:#f1f1f1\n } '

  openComment = false

  writeStyleChar = function(which) {
    if (which === '$') {
      send('js/appendElement-' + i + '.min.js')
      i++
      return
    } else if (which === '/' && openComment === false) {
      openComment = true
      styles = $('pre').html() + which
    } else if (which === '/' && openComment === true) {
      openComment = false
      styles = $('pre')
        .html()
        .replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>')
    } else if (which === ':' && openComment === false) {
      styles = $('pre')
        .html()
        .replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:')
    } else if (which === ';') {
      styles = $('pre')
        .html()
        .replace(/([^:]*)$/, '<em class="value">$1</em>;')
    } else if (which === '{') {
      styles = $('pre')
        .html()
        .replace(/(.*)$/, '<em class="selector">$1</em>{')
    } else {
      styles = $('pre').html() + which
    }
    $('pre').html(styles)
    return $('#style-tag').append(which)
  }

  writeStyles = function(message, index, interval) {
    if (index < message.length) {
      var pre = document.getElementsByTagName('pre')[0]
      pre.scrollTop = pre.scrollHeight

      writeStyleChar(message[index++])
      return setTimeout(function() {
        return writeStyles(message, index, interval)
      }, interval)
    }
  }

  send = function(sUrl) {
    var DSLScript = document.createElement('script')
    DSLScript.src = sUrl
    DSLScript.type = 'text/javascript'
    document.body.appendChild(DSLScript)
    document.body.removeChild(DSLScript)
  }

  interval = window.innerWidth <= 378 ? 2 : 3

  writeStyles(styles, 0, interval)

  loadCSS = function(href, before, media, callback) {
    'use strict'
    // Arguments explained:
    // `href` is the URL for your CSS file.
    // `before` optionally defines the element we'll use as a reference for injecting our <link>
    // By default, `before` uses the first <script> element in the page.
    // However, since the order in which stylesheets are referenced matters, you might need a more specific location in your document.
    // If so, pass a different reference element to the `before` argument and it'll insert before that instead
    // note: `insertBefore` is used instead of `appendChild`, for safety re: http://www.paulirish.com/2011/surefire-dom-element-insertion/

    var ss = window.document.createElement('link')
    var ref = before || window.document.getElementsByTagName('script')[0]
    var sheets = window.document.styleSheets
    ss.rel = 'stylesheet'
    ss.href = href
    // temporarily, set media to something non-matching to ensure it'll fetch without blocking render
    ss.media = 'only x'
    // DEPRECATED
    if (callback) {
      ss.onload = callback
    }

    // inject link
    ref.parentNode.insertBefore(ss, ref)
    // This function sets the link's media back to `all` so that the stylesheet applies once it loads
    // It is designed to poll until document.styleSheets includes the new sheet.
    ss.onloadcssdefined = function(cb) {
      var defined
      for (var i = 0; i < sheets.length; i++) {
        if (sheets[i].href && sheets[i].href.indexOf(href) > -1) {
          defined = true
        }
      }
      if (defined) {
        cb()
      } else {
        setTimeout(function() {
          ss.onloadcssdefined(cb)
        })
      }
    }
    ss.onloadcssdefined(function() {
      ss.media = media || 'all'
    })
    return ss
  }
}.call(this))
