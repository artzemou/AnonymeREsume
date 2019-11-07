_this = document.createElement('article')

_this.setAttribute('id', 'formations')

wrap.append(_this)

$('#formations').append('<i class="material-icons">school</i><span></span>')
setTimeout(function() {
  $('#formations').append(
    '<ul class="content">' +
      '<li><a href="https://delicious-insights.com/fr/formations/node-js/">Formation Python Iot</a><br/><br/>Greta - Asnières-sur-Seine - 2019</li>' +
      '<li><a href="https://delicious-insights.com/fr/formations/node-js/">Formation Node.js</a><br/><br/>Delicious Insights - Paris 11ème - 2019</li>' +
      '<li><a href="https://delicious-insights.com/fr/formations/git-total/">Formation Git Total</a><br/><br/>Delicious Insights - Paris 11ème - 2019</li>' +
      '<li><a href="https://3wa.fr/">Formation Développeur Web</a><br/><br/>3wa - Paris 18ème - 2015</li>' +
      '<li><a href="http://esadhar.fr/">Beaux Arts de Rouen</a><br/><br/>1998 à 2003 </li>' +
      '<li><ul><li>Diplômé du DNSEP en 5éme année</li>' +
      '<li>Diplômé de DNAP avec félicitation en 3éme année</li></ul></li>' +
      '<li>Bac S option SVT en 1998</li>' +
      '</ul>'
  )
}, 750)
