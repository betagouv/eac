<page-home>
  <header>
    <section class=block>
      <h2>Proche de vous</h2>
      <poi-cards data={ closests }></poi-cards>
    </section>
    <section class=block>
      <h2>Actualité</h2>
      <poi-cards data={ newests }></poi-cards>
    </section>
  </header>

  <form ref=form action=/search class=block>
    <h2>Vous recherchez</h2>
      <input type=search name=q id=q required autofocus>
      <input type=submit value=Rechercher>

    <section id=filters>
      <section>
        <h3>Type</h3>
        <checkbox each={ item in filters.type } name=type label={ item }></checkbox>
      </section>

      <section class=disabled>
        <h3>Niveau</h3>
        <label for=1er><input type=checkbox name=type value=1er id=1er>1er niveau</label>
        <label for=college><input type=checkbox name=type value=college id=college>Collège</label>
        <label for=lycee><input type=checkbox name=type value=lycee id=lycee>Lycée</label>
      </section>

      <section class=disabled>
        <h3>Domaine</h3>
        <label for=danse><input type=checkbox name=type value=danse id=danse>Danse</label>
        <label for=theatre><input type=checkbox name=type value=theatre id=theatre>Theatre</label>
        <label for=sciences><input type=checkbox name=type value=sciences id=sciences>Culture scientifique et technique</label>
        <label for=plastique><input type=checkbox name=type value=plastique id=plastique>Arts plastiques</label>
      </section>

      <section class=disabled>
        <h3>Compétences PEAC</h3>
        <label for=1><input type=checkbox name=type value=1 id=1>Cultiver sa sensibilité</label>
        <label for=2><input type=checkbox name=type value=2 id=2>Échanger avec un artiste</label>
        <label for=3><input type=checkbox name=type value=3 id=3>Appréhender des oeuvres</label>
      </section>
    </form>
  </section>

  <script>
    const pois = this.opts.data
    this.closests = pois.slice(0, 3)
    this.newests = pois.sort((a, b) => a.createdTime < b.createdTime).slice(0, 3)
    this.filters = {
      type: [...new Set(Array.concat(...pois.map(p => p.Type)))].sort(),

    }

    this.on('mount', () => {
      this.refs.form.addEventListener('submit', event => {
        event.preventDefault()
        const form = event.target
        const filters = {
          type: Array.from(form.type).filter(input => input.checked).map(input => input.value)
        }
        route(`/search?q=${encodeURI(form.q.value)}&filters=${JSON.stringify(filters)}`)
      })
    })
  </script>

  <style scoped>
    header {
      display: flex;
      flex: 1;
    }
    input[type=search] {
      border-color: #999;
      box-shadow: 0 0 .1em #ccc;
      font-size: 1.2em;
      padding: 1em .7em;
      transition: box-shadow .3s;
    }
    input[type=search]:focus {
      box-shadow: .05em .05em .2em #bbb;
    }
    input[type=submit] {
      display: block;
      margin: 0 auto;
    }

    #filters {
      display: flex;
      margin-top: 2rem;
    }
    #filters section {
      flex: 1;
    }
    #filters label {
      font-weight: normal;
    }
    label input[type=checkbox] {
      margin-right: .8rem;
    }
  </style>
</page-home>
