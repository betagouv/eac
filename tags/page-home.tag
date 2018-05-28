<page-home>
  <header>
    <section class=block>
      <h2>Proche de vous</h2>
      <poi-cards data={ closests }></poi-cards>
      <p if={ !closests.length }>Veuillez saisir l'établissement auquel vous êtes rataché·e.</p>
      <select ref=schoolSelector onchange={ changeSchool } value={ school && school.id }>
          <option value="">Sélectionnez votre établissement</option>
          <option each={ school in opts.schools } value={ school.id }>{ school.appellation_officielle }</option>
      </select>
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
    this.closests = []
    this.newests = pois.sort((a, b) => a.createdTime < b.createdTime).slice(0, 3)
    this.filters = {
      type: [...new Set(Array.concat(...pois.map(p => p.Type)))].sort()
    }

    setSchool(schoolId) {
      const school = this.opts.schools.find(school => school.id === schoolId)
      if(school) {
        updatePoisDistance([school.latitude, school.longitude])
        localStorage.setItem('schoolId', school.id)
        this.closests = pois.sort((a, b) => a.distance > b.distance).slice(0, 3)
      }
      else {
        updatePoisDistance(null)
        localStorage.removeItem('schoolId')
        this.closests = []
      }
      this.school = school
      this.update()
    }

    function updatePoisDistance(latlng) {
      pois.forEach((poi, i) => {
        pois[i].distance = latlng ? Math.round(distance(latlng, [poi.latitude, poi.longitude])) : null
      })
    }

    changeSchool(event) {
      this.setSchool(this.refs.schoolSelector.value)
    }

    this.on('mount', () => {
      this.setSchool(localStorage.getItem('schoolId'))

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

    select {
      display: block;
      padding-left: 35px;
      background: url(images/gps.icon.png) no-repeat 7px center;
    }

    @media (min-width: 60rem) {
      header {
        display: flex;
      }
    }
  </style>
</page-home>
