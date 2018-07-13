(function () {
  try {
    eval('const f = async _ => {}')
  }
  catch(e) {
    browserIsOutdated()
  }

  function browserIsOutdated() {
    var div = document.createElement('div')
    div.id = 'browserOutdatedAlert'
    div.innerHTML = `
      <p>Votre navigateur est obsolète. Ce site ne pourra pas fonctionner correctement.</p>
      <small>Vous pouvez mettre votre navigateur à jour ou utiliser un autre navigateur plus récent.</small>
    `
    var body = document.body
    body.className += 'browserIsOutdated'
    body.insertBefore(div, body.firstChild)

    var style = document.createElement('style')
    style.rel = 'stylesheet'
    style.innerHTML = `
      #browserOutdatedAlert {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        background-color: #f0dc00;
        padding: 10px;
        text-align: center;
        border-bottom: 1px solid #c90;
        box-shadow: 3px 0 5px #ccc;
        color: #333;
      }
      #browserOutdatedAlert p {
        font-weight: bold;
        margin: 0;
      }
    `
    document.head.appendChild(style)
  }
})()
