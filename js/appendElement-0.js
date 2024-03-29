var section, ul, li, wrap
wrap = $('.wrap')
_this = document.createElement('article')

_this.setAttribute('id', 'title')

wrap.append(_this)

_this = document.createElement('article')

_this.setAttribute('id', 'contact')

wrap.append(_this)

$('#contact').append(
  '<div>' +
    '<div id="name"><i class="material-icons">face</i><span>...</span></div>' +
    '<div id="place"><i class="material-icons">place</i><span>Clichy</span></div>' +
    '<div id="mail"><i class="material-icons">mail_outline</i><a href="mailto:"><span>...</span></a></div>' +
    '<div id="tel"><i class="material-icons">stay_current_portrait</i><span>...</span></div>' +
    '</div>'
)

_this = document.createElement('article')

_this.setAttribute('id', 'about_myself')

wrap.append(_this)

setTimeout(function() {
  document.getElementById('about_myself').innerHTML =
    '<i class="material-icons">face</i><span></span><ul class="content">'
}, 750)

setTimeout(function() {
  $('#title').append('<h1>UX Développeur</h1>')
  $('#about_myself .content').append(
    "<li>À l'issue d'un cursus artistique, ma porte d'entrée dans le Web a été le dessin d'animation.</li>"
  )
  $('#about_myself .content').append(
    "<li>J'ai beaucoup travaillé avec le logiciel Macromedia Flash. A la mort annoncée de ce format, je me suis tourné vers le code Open source.</li>"
  )
  $('#about_myself .content').append(
    "<li>Coté navigateur, trafiquer l'image...</li>"
  )
  $('#about_myself .content').append(
    '<li>Très, très bien, mais vite un peu frustrant !</li>'
  )
  $('#about_myself .content').append(
    "<li>Le CSS n'ayant plus de secret, j'ai a ce moment décidé de suivre une formation courte et axée travaux pratiques pour comprendre et apprendre réellement PHP, JavaScript, la programmation orienté objet et le web Dynamique.</li>"
  )
  $('#about_myself .content').append(
    "<li>Séduit par l'approche modulaire de Node.js et le DOM virtuel de React, je balbutie un peu, puis un peu moins et je souhaiterais aujourd'hui évoluer professionnellement dans cadre qui me permette de monter en compétences avec ces technologies.</li>"
  )
}, 750)

console.log(
  '\n(...)' + '%c\n(...)',
  'font-size:23pt;  color: #333',
  '\n\n(...)',
  '\n\n... Copy paste at the beginning !\nAnd after thinking the code. \nEat from beat...\n\n\n'
)

setTimeout(function() {
  console.log(
    'Here now is Anagram of Nowhere!' +
      '\n' +
      '\nhttp://id3419.securedata.net/artnotart/fluxus/' +
      '\n' +
      '\nHere an other code...' +
      '\n' +
      '\nhttp://krafrt.com/poem/poem.html'
  )
}, 250)

setTimeout(function() {
  console.log('https://codepen.io/')
  console.log(
    'http://codepen.io/jakealbaugh/blog/self-coding-pens-and-finding-joy-in-useless-code'
  )
  console.log('http://davealger.info/')
  console.log('https://codepen.io/artzemou/')
}, 500)
