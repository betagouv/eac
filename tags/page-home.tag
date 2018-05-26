<page-home>
  <header>
    <section class=block>
      <h2>Proche de vous</h2>
      <div class=cards id=closest-pois-list></div>
      <virtual each={ data in closests }>
        <poi-card data={ data }></poi-card>
      </virtual>
    </section>

    <section class=block>
      <h2>Actualité</h2>
      <virtual each={ data in newests }>
        <poi-card data={ data }></poi-card>
      </virtual>
    </section>
  </header>

  <section id=search class=block>
    <h2>Vous recherchez</h2>
    <form action=/search>
      <input type=search name=q id=q value="" required autofocus>
      <input type=submit value=Rechercher>
    </form>

    <section id=filters>
      <section>
        <h3>Type</h3>
        <label for=sortie><input type=checkbox name=type value=sortie id=sortie>Sortie</label>
        <label for=intervention><input type=checkbox name=type value=intervention id=intervention>Intervention</label>
      </section>

      <section>
        <h3>Niveau</h3>
        <label for=1er><input type=checkbox name=type value=1er id=1er>1er niveau</label>
        <label for=college><input type=checkbox name=type value=college id=college>Collège</label>
        <label for=lycee><input type=checkbox name=type value=lycee id=lycee>Lycée</label>
      </section>

      <section>
        <h3>Domaine</h3>
        <label for=danse><input type=checkbox name=type value=danse id=danse>Danse</label>
        <label for=theatre><input type=checkbox name=type value=theatre id=theatre>Theatre</label>
        <label for=sciences><input type=checkbox name=type value=sciences id=sciences>Culture scientifique et technique</label>
        <label for=plastique><input type=checkbox name=type value=plastique id=plastique>Arts plastiques</label>
      </section>

      <section>
        <h3>Compétences PEAC</h3>
        <label for=1><input type=checkbox name=type value=1 id=1>Cultiver sa sensibilité</label>
        <label for=2><input type=checkbox name=type value=2 id=2>Échanger avec un artiste</label>
        <label for=3><input type=checkbox name=type value=3 id=3>Appréhender des oeuvres</label>
      </section>
    </section>
  </section>

  <script>
    this.closests = this.opts.data.slice(0, 3)
    this.newests = this.opts.data.sort((a, b) => a.createdTime < b.createdTime).slice(0, 3)
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
