riot.tag2('app', '<header> <a href="/"> <img id="logo" src="/images/logo-eac.gif" alt="Logo de la Plateforme EAC"> <h1>Plateforme EAC</h1> <h2>L\'Éducation artistique et culturelle à portée de main</h2> </a> <p> Trouvez les activités artistiques et culturelles au plus proche de vous </p> <search-form q="{this.q}" school-id="{this.schoolId}"></search-form> </header> <main ref="container"></main>', 'app header,[data-is="app"] header{ padding: 3rem; margin-bottom: 3rem; border-bottom: .5rem solid; border-image: linear-gradient( to right, #4f2559 calc(100%/6), #ea8323 calc(100%/6), #ea8323 calc((100%/6)*2), #7d932d calc((100%/6)*2), #7d932d calc((100%/6)*3), #209fd6 calc((100%/6)*3), #209fd6 calc((100%/6)*4), #f7da34 calc((100%/6)*4), #f7da34 calc((100%/6)*5), #dd0e29 75% ) 5; background-color: #fff; } app header > a,[data-is="app"] header > a{ display: grid; grid-template: ". logo title ." ". logo baseline ." / 1fr 8rem 38rem 1fr ; color: inherit; } app header > a #logo,[data-is="app"] header > a #logo{ grid-area: logo; } app header > a h1,[data-is="app"] header > a h1{ grid-area: title; font-size: 1.4em; margin: .4em 0 0 1rem; align-self: end; font-weight: normal; } app header > a h2,[data-is="app"] header > a h2{ grid-area: baseline; font-size: 1em; margin: 0 0 1rem 1rem; } app header > p,[data-is="app"] header > p{ max-width: 50rem; text-align: center; font-size: 2.5rem; font-weight: 100; margin: 2rem auto 0 auto; }', '', function(opts) {

    page('/', (ctx) => {
      this.refs.container.innerHTML = ''
      this.update()
    })

    page('/search', (ctx) => {
      const params = urlParams(ctx.querystring)
      this.q = decodeURI(params.get('q') || '')
      this.schoolId = params.get('school') || ''
      const filters = encodeURI(params.get('filters') || '')
      this.refs.container.innerHTML = `<page-search
        school-id="${this.schoolId}"
        q="${this.q}"
        filters="${filters}"
        />`
      riot.mount('page-search')
      this.update()
    })

    page('/actor/create', ctx => {
      this.refs.container.innerHTML = `<page-actor-edit/>`
      riot.mount('page-actor-edit')
      this.update()
    })

    page('/actor/:id/edit', ctx => {
      this.refs.container.innerHTML = `<page-actor-edit actor-id="${ctx.params.id}"/>`
      riot.mount('page-actor-edit')
      this.update()
    })

    page('/actor/:id', (ctx) => {
      this.schoolId = ctx.params.school
      this.refs.container.innerHTML = `<page-actor
        school-id="${this.schoolId}"
        actor-id="${ctx.params.id}"
        />`
      riot.mount('page-actor')
      this.update()
    })

    page('/actor/:id/action/:index', (ctx) => {
      this.refs.container.innerHTML = `<page-action
        actor-id="${ctx.params.id}" action-index="${ctx.params.index}"
        />`
      riot.mount('page-action')
      this.update()
    })

    this.on('mount', () => {
      page()
      document.body.classList.add('ready')
    })
});

riot.tag2('page-action', '<article class="block"> <h1>{this.action.name}</h1> <section> {this.action.description} </section> <nav if="{this.action.medias}"> <a each="{media in this.action.medias}" href="{media}" target="_blank">Consulter {media.split(\'/\').splice(-1)[0]}</a> </nav> <a if="{this.action.website}" href="{this.action.website}" target="_blank">Voir la page internet de cette action</a> </article> <aside> <section class="block"> <h3>Informations complémentaires</h3> <ul> <li if="{this.action.schoolLevels}">Niveaux concernés : {this.action.schoolLevels.join(\', \')}</li> <li if="{this.action.topics}">Matières concernées : {this.action.topics.join(\', \')}</li> <li if="{this.action.capacity}">Capacité maximum de {this.action.capacity} élèves</li> <li if="{this.action.duration}">Durée estimée de {this.action.duration}</li> <li if="{this.action.cost}">Coût global approximatif de {this.action.cost}€</li> <li if="{this.action.dateRange[0] && this.action.dateRange[1]}">Disponible entre le {this.action.dateRange[0]} et le {this.action.dateRange[1]}</li> <li if="{this.action.dateRange[0] && !this.action.dateRange[1]}">Débute le {this.action.dateRange[0]}</li> <li if="{!this.action.dateRange[0] && this.action.dateRange[1]}">Effective jusqu\'au {this.action.dateRange[1]}</li> </ul> </section> <section class="block" id="actor"> <h3>Animé par {this.actor.name}</h3> <img if="{this.actor.image}" riot-src="{this.actor.image}"> <a href="/actor/{this.actor._id}" title="Voir la fiche de {this.actor.name}">Voir la fiche</a> </section> </aside>', 'page-action,[data-is="page-action"]{ display: grid; grid-template: "article aside"; / auto minmax(1fr, 20rem); } page-action article,[data-is="page-action"] article{ grid-area: article; } page-action aside,[data-is="page-action"] aside{ grid-area: aside; } page-action #actor,[data-is="page-action"] #actor{ position: relative; } page-action #actor img,[data-is="page-action"] #actor img{ display: block; margin: 0 auto; } page-action #actor a,[data-is="page-action"] #actor a{ display: block; position: absolute; top: 0; bottom: 0; left: 0; right: 0; text-indent: -9999px; }', '', function(opts) {

    this.actor = {}
    this.action = {}

    this.on('mount', async () => {
      this.actor = await api(`/actors/${this.opts.actorId}`)
      this.action = this.actor.actions[this.opts.actionIndex]
      this.update()
    })
});

riot.tag2('page-actor-edit', '<section> <h2>{this.actor ? \'Modifier\' : \'Ajouter\'} un acteur culturel</h2> <form onsubmit="{this.submit}"> <fieldset class="block"> <h3>Présentation générale</h3> <label for="name">Nom</label> <input type="text" name="name" id="name" riot-value="{this.actor && this.actor.name}" required> <label for="image">URL de photo</label> <input type="url" oninput="{this.updateImage}" name="image" id="image" riot-value="{this.actor && this.actor.image}"> <small><img ref="image" show="{this.actor.image}" riot-src="{this.actor.image}" alt="L\'image mentionnée n\'existe pas" height="100"></small> <label for="description">Description</label> <textarea name="description" id="description" required>{this.actor && this.actor.description}</textarea> </fieldset> <fieldset class="block"> <h3>Contact accueil</h3> <label for="website">Site internet</label> <input type="url" name="website" id="website" riot-value="{this.actor && this.actor.website}"> <label for="mainPhone">Numéro de téléphone principal</label> <input type="text" name="mainPhone" id="mainPhone" riot-value="{this.actor && this.actor.mainPhone}"> <label for="address">Adresse</label> <input type="text" name="address" id="address" riot-value="{this.actor && this.actor.address}" required> <label for="city">Ville</label> <input type="text" name="city" id="city" riot-value="{this.actor && this.actor.city}" required> <label for="postalCode">Code postal</label> <input type="text" name="postalCode" id="postalCode" riot-value="{this.actor && this.actor.postalCode}" required> </fieldset> <fieldset class="block"> <h3>Contact pour l\'organisation d\'une sortie / intervention</h3> <label for="contactName">Nom du contact EAC</label> <input type="text" name="contactName" id="contactName" riot-value="{this.actor && this.actor.contactName}" required> <label for="contactPhone">Téléphone du contact EAC</label> <input type="tel" name="contactPhone" id="contactPhone" riot-value="{this.actor && this.actor.contactPhone}" required> <label for="contactEmail">Email du contact EAC</label> <input name="contactEmail" id="contactEmail" riot-value="{this.actor && this.actor.contactEmail}" required type="{\'email\'}"> </fieldset> <fieldset class="block domains"> <h3>Domaines</h3> <label each="{domain in this.domains}"> <input type="checkbox" name="domains" riot-value="{domain}" checked="{this.actor && this.actor.domains.includes(domain)}"> {domain} </label> </fieldset> <fieldset> <h3>Actions proposées</h3> <section each="{action, index in this.actions}" class="block"> <h4>Action n°{index + 1}</h4> <button class="delete button-outline" type="button" onclick="{this.deleteAction}" data-id="{index}">Supprimer</button> <label>Intitulé</label> <input type="text" name="action[{index}].name" riot-value="{action.name}"> <label>Description</label> <textarea name="action[{index}].description">{action.description}</textarea> <label>Liste des liens vers des photos en ligne, vidéos Youtube et documents téléchargeables (séparés par une virgule)</label> <input type="text" name="action[{index}].medias" riot-value="{action.medias.join(\', \')}"> <label>Date de début</label> <input name="action[{index}].dateRangeStart" riot-value="{action.dateRange && action.dateRange[0]}" type="{\'date\'}"> <label>Date de fin</label> <input name="action[{index}].dateRangeEnd" riot-value="{action.dateRange.length && action.dateRange[1]}" type="{\'date\'}"> <label>Durée sur place</label> <input type="text" name="action[{index}].duration" riot-value="{action.duration}"> <label>Niveaux concernés</label> <select name="action[{index}].schoolLevels" multiple> <option value="maternelle" selected="{\'maternelle\' in action.schoolLevels}">Maternelle</option> <option value="elementaire" selected="{\'elementaire\' in action.schoolLevels}">Élémentaire</option> <option value="college" selected="{\'college\' in action.schoolLevels}">Collège</option> <option value="lycee" selected="{\'lycee\' in action.schoolLevels}">Lycée</option> </select> <label>Matières concernées</label> <select name="action[{index}].topics" multiple> <option value="francais" selected="{\'francais\' in action.topics}">Français</option> <option value="mathematiques" selected="{\'mathematiques\' in action.topics}">Mathématiques</option> <option value="histoire" selected="{\'histoire\' in action.topics}">Histoire</option> <option value="geographie" selected="{\'geographie\' in action.topics}">Géographie</option> <option value="langue-vivante" selected="{\'langue-vivante\' in action.topics}">Langue Vivante</option> <option value="physique" selected="{\'physique\' in action.topics}">Physique</option> <option value="chimie" selected="{\'chimie\' in action.topics}">Chimie</option> <option value="svt" selected="{\'svt\' in action.topics}">Sciences de la vie et de la Terre</option> <option value="eps" selected="{\'eps\' in action.topics}">Éducation physique et sportive</option> <option value="civisme" selected="{\'civisme\' in action.topics}">Éducation civique, juridique et sociale</option> <option value="autre" selected="{\'autre\' in action.topics}">Autre(s)</option> </select> <label>Page internet de l\'action</label> <input type="url" name="action[{index}].website" riot-value="{action.website}"> <label>Nombre maximum d\'élèves</label> <input name="action[{index}].capacity" riot-value="{action.capacity}" type="{\'number\'}"> <label>État de l\'action</label> <select name="action[{index}].status"> <option value="done" selected="{action.status == \'done\'}">C\'est une action achevée</option> <option value="progress" selected="{action.status == \'progress\'}">Il y a déjà des établissements scolaires sur cette action</option> <option value="todo" selected="{action.status == \'todo\'}">Cette action est plannifiée</option> </select> <label>Établissement(s) scolaire(s) en lien avec cette action</label> <input type="text" name="action[{index}].school" riot-value="{action.school}"> <label>Coût prévisionnel total pour cette action (€)</label> <input name="action[{index}].cost" riot-value="{action.cost}" type="{\'number\'}"> </section> <button onclick="{this.addAction}" class="button-outline" type="button">Ajouter une action</button> </fieldset> <button type="submit">Enregistrer</button> </form> </section>', 'page-actor-edit .domains > label,[data-is="page-actor-edit"] .domains > label{ display: inline-block; margin: 1rem; } page-actor-edit .delete,[data-is="page-actor-edit"] .delete{ float: right; } page-actor-edit .delete + label,[data-is="page-actor-edit"] .delete + label{ clear: both; } page-actor-edit h4,[data-is="page-actor-edit"] h4{ float: left; } page-actor-edit textarea,[data-is="page-actor-edit"] textarea{ min-height: 20rem; }', '', function(opts) {


    const actorId = this.opts.actorId
    this.actor = {}

    function actionTemplate () {
      return {
        name: '',
        description: ''
      }
    }

    this.addAction = (event) => {
      this.actions.push(actionTemplate())
    }

    this.deleteAction = (event) => {
      this.actions.splice(event.target.dataset.id, 1)
    }

    this.updateImage = (event) => {
      this.actor.image = event.target.value
    }

    this.on('mount', async () => {
      this.actor = actorId ? await api(`/actors/${actorId}`) : {}
      this.actions = this.actor && this.actor.actions ? this.actor.actions : [actionTemplate()]
      this.domains = await api('/domains')
      this.update()
    })

    this.submit = async (event) => {
      event.preventDefault()

      const data = new FormData(event.target)
      const apiAddress = 'https://api-adresse.data.gouv.fr/search/?limit=1&autocomplete=0'
      const addresses = await request(
        `${apiAddress}&q=${data.get('address')} ${data.get('city')}&postcode=${data.get('postalCode')}`)
      const address = addresses.features[0]

      function getActionProperty(name, index, isArray) {
        return data[isArray ? 'getAll' : 'get'](`action[${index}].${name}`)
      }

      const actions = this.actions.map((_, i) => {
        return {
          name: getActionProperty('name', i),
          description: getActionProperty('description', i),
          medias: getActionProperty('medias', i).split(',').map(s => s.trim()),
          website: getActionProperty('website', i),
          dateRange: [getActionProperty('dateRangeStart', i), getActionProperty('dateRangeStart', i)],
          capacity: getActionProperty('capacity', i),
          duration: getActionProperty('duration', i),
          status: getActionProperty('status', i),
          topics: getActionProperty('topics', i, true),
          schoolLevels: getActionProperty('schoolLevels', i, true),
          school: getActionProperty('school', i),
          cost: getActionProperty('cost', i),

        }
      })

      debugger;

      const loc = address.geometry
      loc.coordinates.reverse()

      const actor = await api(actorId ? `/actors/${actorId}` : '/actors', {
        method: actorId ? 'PUT' : 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: data.get('name'),
          image: data.get('image'),
          description: data.get('description'),
          website: data.get('website'),
          mainPhone: data.get('mainPhone'),
          contactName: data.get('contactName'),
          contactPhone: data.get('contactPhone'),
          contactEmail: data.get('contactEmail'),
          address: data.get('address'),
          city: data.get('city'),
          postalCode: data.get('postalCode'),
          loc: loc,
          domains: data.getAll('domains'),
          actions: actions
        })
      })

      page(`/actor/${actor._id}`)
    }
});

riot.tag2('page-actor', '<article> <section class="block actor"> <h2>{this.actor.name}</h2> <nav class="tags"> <color-tag each="{tag in this.actor.domains}" label="{tag}"></color-tag> </nav> <p if="{this.actor.description}">{this.actor.description}</p> <virtual if="{this.actor.mainPhone || this.actor.website}"> <h4>En savoir plus</h4> <ul> <li if="{this.actor.mainPhone}"><a href="tel:{this.actor.mainPhone}">Téléphone : {this.actor.mainPhone}</a></li> <li if="{this.actor.website}"> <a target="_blank" href="{this.actor.website}">Visiter le site internet</a></li> </ul> </virtual> <p if="{!this.actor.description}"> Cet acteur culturel n\'a pas renseigné ses informations.<br> <a class="button" href="https://duckduckgo.com/?q={encodeURI(`${this.actor.name} ${this.actor.city}`)}" target="_blank">Faire une recherche</a> </p> </section> <section id="actions"> <h3>Actions animée par {this.actor.name} :</h3> <article each="{action, i in this.actor.actions}" class="block"> <h4>{action.name}</h4> <p>{action.description.substr(0, 200)}…</p> <a href="/actor/{this.actor._id}/action/{i}" title="Voir l\'action « {action.name} »">Voir cette action en détail</a> </article> </section> <section if="{!this.actor.actions}"> <p> Les actions proposées par cet acteur sont sur demande.<br> Veillez à prendre contact avec cet Acteur Culturel. </p> </section> <aside> <section class="block" if="{this.actor.image}" id="image"> <img riot-src="{this.actor.image}" alt="Photo de {this.actor.name}"> </section> <section class="block" id="contact"> <h3 if="{this.contact}">Contacter {this.contact}</h3> <h3 if="{!this.contact}">Contacter le responsable EAC</h3> <ul> <li if="{this.phone}">Par téléphone : {this.phone}</li> <li if="{this.email}">Par email : {this.email}</li> </ul> <a if="{this.email}" class="button" target="_blank" href="mailto:{this.email}?subject=À propos de {this.actor.name}&cc=loup.wolff@beta.gouv.fr&body={encodeURIComponent(this.emailBody)}">Envoyer un email</a> <a if="{this.phone}" class="button" href="tel:{this.phone}">Appeler</a> <p if="{!this.phone && !this.email}"> Aucune information de contact n\'est disponible pour cet acteur culturel.<br> <a class="button" href="https://duckduckgo.com/?q={encodeURI(`${this.actor.name} ${this.actor.city}`)}" target="_blank">Faire une recherche</a> </p> </section> <section class="block"> <geo if="{this.actor.distance}">à {Math.ceil(this.actor.distance)}&nbsp;km</geo> <address if="{this.latLng}"> <iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" riot-src="https://www.openstreetmap.org/export/embed.html?bbox={Number(this.latLng[1]) - 0.02}%2C{Number(this.latLng[0]) - 0.02}%2C{Number(this.latLng[1]) + 0.02}%2C{Number(this.latLng[0]) + 0.02}&amp;layer=hot&amp;marker={this.latLng[0]}%2C{this.latLng[1]}"></iframe><br> <small> <a href="https://www.openstreetmap.org/?mlat={this.latLng[0]}&mlon={this.latLng[1]}#map=15/{this.latLng[0]}/{this.latLng[1]}&layers=T" target="_blank"> {this.actor.address}<br> {this.actor.postalCode} {this.actor.city} </a> </small> </address> <a if="{this.actor.mainPhone}" href="tel:{this.actor.mainPhone}">Tél. : {this.actor.mainPhone}</a> </section> </aside> <section class="edit"> <a href="/actor/{this.opts.actorId}/edit" class="button"> Mettre à jour les informations de cet acteur </a> </section> </article>', 'page-actor,[data-is="page-actor"]{ display: grid; grid-template: \'actor aside\' \'actions aside\' \'edit edit\' / auto 51rem; } page-actor > article,[data-is="page-actor"] > article{ display: contents; } page-actor .actor,[data-is="page-actor"] .actor{ grid-area: actor; } page-actor #actions,[data-is="page-actor"] #actions{ grid-area: actions; } page-actor .edit,[data-is="page-actor"] .edit{ grid-area: edit; margin: 1rem auto; } page-actor aside,[data-is="page-actor"] aside{ grid-area: aside; } page-actor #actions article,[data-is="page-actor"] #actions article{ position: relative; display: grid; margin-right: 2%; padding-bottom: 1rem; margin-bottom: 1rem; border-bottom: 1px solid #ccc; } page-actor #actions article a,[data-is="page-actor"] #actions article a{ position: absolute; display: block; text-indent: -9999px; top: 0; bottom: 0; left: 0; right: 0; } page-actor .actor > nav,[data-is="page-actor"] .actor > nav{ margin-bottom: 1rem; } page-actor .actor > p:first-of-type,[data-is="page-actor"] .actor > p:first-of-type{ white-space: pre-wrap; } page-actor #image,[data-is="page-actor"] #image{ text-align: center; max-width: 100%; }', '', function(opts) {

    this.actor = {}

    this.on('mount', async () => {
      this.actor = await api(`/actors/${this.opts.actorId}`)
      this.phone = this.actor.contactPhone || this.actor.ownerPhone
      this.email = this.actor.contactEmail || this.actor.ownerEmail
      this.latLng = this.actor.loc.coordinates[0] && this.actor.loc.coordinates
      this.contact = (this.actor.contactName || this.actor.ownerName || '').replace(',', '')
      this.emailBody = `Bonjour ${this.contact},\n\n` +
        `Je vous contacte suite à ma consultation de la fiche ${location.href}.\n\n` +
        `Questions ou remarques :\n\n\n\n`
      this.update()
    })
});

riot.tag2('page-search', '<section class="block" id="filters"> <search-filters filters="{this.filters}" q="{this.q}" school-id="{this.schoolId}" actors="{this.actors}"></search-filters> </section> <section id="tags"> <color-tag each="{domain in this.domains}" label="{domain}"></color-tag> </section> <section if="{this.viewType == \'list\'}" id="results"> <button onclick="{this.setViewType}" value="map">Voir les résultats sur une carte</button> <div class="block"> <h4 if="{this.q}">Résultats pour «&nbsp;{this.q}&nbsp;»</h4> <h4 if="{!this.q && this.school}"> Résultats autour de {this.school.name} ({this.school.city})</h4> <p if="{!this.actors.length}">Aucun résultat ne correspond à cette recherche à proximité de votre établissement.</p> </div> <actor-card class="block" each="{actor in this.actors}" actor="{actor}" school-id="{this.schoolId}"></actor-card> </section> <section if="{this.viewType == \'map\'}" id="map"> <button onclick="{this.setViewType}" value="list">Voir la liste des résultats</button> <actors-map class="block" actors="{this.actors}" school-id="{this.schoolId}"></actors-map> </section> <section id="extra" class="block"> <h4>Vous n\'avez rien trouvé d\'intéressant ?</h4> <p> Si aucun résultat ne correspond à vos attentes, d\'autres sites peuvent éventuellement compléter votre recherche&nbsp;: </p> <actors-externals department="{this.department}"></actors-externals> <p> Vous pouvez également participer à améliorer la base de données en ajoutant un acteur culturel&nbsp;: </p> <a href="/actor/create" class="button">Ajouter un acteur culturel</a> </section>', 'page-search,[data-is="page-search"]{ display: grid; grid-template: \'search search\' \'tags tags\' \'filters results\' \'filters extra\' / minmax(auto, 35%) 1fr; grid-gap: 2rem; } page-search #search,[data-is="page-search"] #search{ grid-area: search; } page-search #tags,[data-is="page-search"] #tags{ grid-area: tags; height: 4rem; } page-search #filters,[data-is="page-search"] #filters{ grid-area: filters; height: auto; } page-search #results,[data-is="page-search"] #results{ grid-area: results; } page-search #map,[data-is="page-search"] #map{ grid-area: results; } page-search #extra,[data-is="page-search"] #extra{ grid-area: extra; } page-search h4,[data-is="page-search"] h4{ margin-top: 1rem; } page-search search-filters,[data-is="page-search"] search-filters{ position: sticky; top: 0; } page-search input[type=search],[data-is="page-search"] input[type=search]{ border-color: #999; box-shadow: 0 0 .1em #ccc; font-size: 1.2em; padding: 1em .7em; transition: box-shadow .3s; } page-search input[type=search]:focus,[data-is="page-search"] input[type=search]:focus{ box-shadow: .05em .05em .2em #bbb; } page-search input[type=submit],[data-is="page-search"] input[type=submit]{ display: block; margin: 0 auto; } page-search actor-card,[data-is="page-search"] actor-card{ padding-bottom: 1rem; margin-bottom: 1rem; border-bottom: 1px solid #eee; } page-search #tags .tag,[data-is="page-search"] #tags .tag{ background-color: #fff; box-shadow: .1rem .1rem .5rem #eee; border-radius: .8rem; border: 1px solid #e6e6e6; margin-right: 2rem; }', '', function(opts) {

    this.q = this.opts.q
    this.schoolId = this.opts.schoolId
    try {
      this.filters = JSON.parse(decodeURI(this.opts.filters))
    } catch (e) {
      this.filters = {}
    }
    this.actors = []
    this.viewType = 'list'
    this.domains = this.filters.domains || []
    this.school = null

    this.on('mount', async () => {
      let params = this.filters.domains ? `?domains=${this.domains}` : ''
      if (this.schoolId) {
        this.school = await api(`/schools/${this.schoolId}`)
        if (this.school.loc.coordinates) {
          params += (params ? '&' : '?')
          params += `from=${this.school.loc.coordinates[1]},${this.school.loc.coordinates[0]}`
        }
      }
      this.actors = await api(`/actors/search/${normalizeString(this.q)}${params}`)
      this.department = this.school.postalCode && this.school.postalCode.substr(0, 2)
      this.update()
    })

    this.setViewType = (event) => {
      this.viewType = event.target.value
    }
});

riot.tag2('actor-card', '<h3>{this.actor.name} <small>(dept {this.actor.department})</small></h3> <p>{this.actor.description.length < this.maxlength ? this.actor.description : this.actor.description.substr(0, this.maxlength) + \'…\'}</p> <footer> <geo if="{this.actor.distance}">{Math.ceil(this.actor.distance)}&nbsp;km</geo> <nav class="tags"> <color-tag class="tag" each="{domain in this.actor.domains}" label="{domain}"> <a>{domain}</a> </color-tag> </nav> </footer> <a href="/actor/{this.actor._id}?school={this.schoolId}"></a>', 'actor-card,[data-is="actor-card"]{ position: relative; display: block; } actor-card > a,[data-is="actor-card"] > a{ display: block; position: absolute; top: 0; left: 0; bottom: 0; right: 0; } actor-card:hover,[data-is="actor-card"]:hover{ color: #111; transition: color .3s; } actor-card h3,[data-is="actor-card"] h3{ font-size: 1.4em; margin: 1rem 0 .5rem 0; text-transform: capitalize; } actor-card h3 small,[data-is="actor-card"] h3 small{ text-transform: none; font-style: italic; font-size: .8em; } actor-card p,[data-is="actor-card"] p{ margin: 0; } actor-card footer,[data-is="actor-card"] footer{ display: grid; grid-template-columns: 1fr auto; padding-top: 1rem; margin-top: 1rem; border-top: 1px solid #ccc; align-items: center; } actor-card .tags,[data-is="actor-card"] .tags{ text-align: right; } actor-card geo,[data-is="actor-card"] geo{ font-size: 1.3rem; background: url(/images/gps.icon.png) no-repeat; background-size: 1.8rem; padding-left: 2rem; }', '', function(opts) {

    this.schoolId = opts.schoolId
    this.actor = opts.actor
    this.maxlength = this.opts.maxlength || 150
});

riot.tag2('actors-externals', '<nav> <a if="{this.inDepartment(\'26\')}" target="_blank" href="http://www.ladrome.fr/nos-actions/culture/pratiques-artistiques-culturelles/actions-educatives-colleges/dispositifs-departementaux-culture-colleges"> <img src="http://www.ladrome.fr/sites/all/themes/ladromeax/images/logo.png"> </a> <a if="{this.inDepartment([\'44\', \'49\', \'53\', \'72\', \'85\'])}" target="_blank" href="https://www.laplateforme.net/pages/type/structures"> <img src="https://www.laplateforme.net/app/themes/p2/dist/images/logo.svg"> </a> <a if="{this.inDepartment(\'38\')}" target="_blank" href="http://www.ac-grenoble.fr/educationartistique.isere"> <img src="http://cache.media.education.gouv.fr/image/Academie/04/9/Logo_Grenoble_956049.png"> </a> </nav>', 'actors-externals a,[data-is="actors-externals"] a{ display: inline-block; width: 30%; padding: 2rem; text-align: center; }', '', function(opts) {
    this.inDepartment = (codes) => {
      if (!Array.isArray(codes)) {
        codes = [codes]
      }
      return this.opts.department && (!this.opts.department.length || codes.includes(this.opts.department))
    }
});

riot.tag2('actors-map', '<div ref="map"></div>', 'actors-map,[data-is="actors-map"]{ display: block; width: 100%; height: auto; } actors-map [ref=map],[data-is="actors-map"] [ref=map]{ height: 600px; } actors-map .leaflet-popup a,[data-is="actors-map"] .leaflet-popup a{ color: inherit; } actors-map .leaflet-user,[data-is="actors-map"] .leaflet-user{ background: red; border: 5px solid rgba(255,255,255,0.5); color: blue; font-weight: bold; text-align: center; border-radius: 50%; line-height: 80px; width: 50px; }', '', function(opts) {

    this.schoolId = opts.schoolId
    this.actors = opts.actors

    this.on('mount', async () => {
      let school = null
      let lngLat = [46.495, 2.207]
      let zoom = 6
      if (this.schoolId) {
        school = await api(`/schools/${this.schoolId}`)
        lngLat = school.loc.coordinates.reverse()
        zoom = 9
      }

      const map = L.map(this.refs.map).setView(lngLat, zoom)
      const actorMarker = L.icon({iconUrl: `/images/marker.svg`, iconSize: [40, 45]})

      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
          '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.streets'
      }).addTo(map)

      const markers = this.actors
        .filter(a => a.loc && a.loc.coordinates[0])
        .map(a => {
          const marker = L.marker(a.loc.coordinates, {icon: actorMarker})
          marker.actor = a
          marker.bindPopup(`
            <a href=/actor/${a._id}?school=${this.schoolId} title="Voir le détail">
              <h4>${a.name}</h4>
              <p>${a.description.length > 80 ? (a.description.substr(0, 300) + '…') : a.description}</p>
              <p>Voir le détail</p>
            </a>
          `)
          return marker
        })

      if (this.schoolId) {
        L.marker(lngLat, {
          icon: L.divIcon({className: 'leaflet-user', iconSize: [25, 25]})
        })
          .bindPopup('Votre établissement scolaire')
          .addTo(map)
      }

      L.featureGroup(markers)
        .addTo(map)
    })
});

riot.tag2('color-tag', '<a class="tag"> <span riot-style="background-color: {this.color}"></span> {this.label} </a>', 'color-tag span,[data-is="color-tag"] span{ display: inline-block; width: 1.2rem; height: 1.2rem; margin-right: .5rem; border-radius: 100%; border-color: 1px solid #e6e6e6; }', '', function(opts) {
    this.label = this.opts.label || ''

    const r = this.label.charCodeAt(0) * 2
    const g = 255 - (this.label.length * 25) % 255
    const b = this.label.charCodeAt(this.label.length - 1) * 2
    this.color = `rgb(${r}, ${g}, ${b})`
});

riot.tag2('search-filters', '<details title="Domaine" open> <summary>Affiner par domaines</summary> <label each="{domain in this.domains}"> <input type="checkbox" name="domains" riot-value="{domain}" onchange="{this.submit}" checked="{this.filters.domains && this.filters.domains.includes(domain)}"> {domain} </label> </details>', 'search-filters label,[data-is="search-filters"] label{ font-weight: normal; cursor: pointer; margin-left: 1.5rem; } search-filters label > input,[data-is="search-filters"] label > input{ margin-right: 0.75rem; } search-filters summary,[data-is="search-filters"] summary{ margin-bottom: 1rem; cursor: pointer; }', '', function(opts) {

    this.filters = opts.filters || {}
    this.actors = opts.actors || []
    this.q = opts.q
    this.schoolId = opts.schoolId

    this.on('update', () => {
      this.actors = opts.actors
      this.domains = Array.from(new Set(
        [].concat(...this.actors.filter(a => a.domains).map(a => a.domains))
      )).filter(d => String(d) === d)
        .map(d => d.trim())
        .filter(d => d.length)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    })

    this.submit = (event) => {
      const q = this.q
      const schoolId = this.schoolId
      const filters = this.filters
      const category = event.target.name
      const value = event.target.value
      const activate = event.target.checked

      if (!filters[category]) filters[category] = []
      if (activate) {
        if (filters[category].indexOf(value) < 0) filters[category].push(value)
      } else filters[category].splice(filters[category].indexOf(value), 1)
      if (!filters[category].length) delete filters[category]

      page(`/search?q=${q}&school=${schoolId}&filters=${encodeURI(JSON.stringify(filters))}`)
    }
});

riot.tag2('search-form', '<form onsubmit="{this.submit}"> <label for="q">Vous recherchez</label> <input type="search" name="q" id="q" riot-value="{this.opts.q}" placeholder="Ex : Visite artisan" autofocus> <label for="search">À proximité de</label> <select-school ref="school" type="search" name="school" id="school" school-id="{this.opts.schoolId}"></select-school> <input class="button" type="submit" value="Rechercher"> </form>', 'search-form form,[data-is="search-form"] form{ display: grid; grid-template: \'label-q label-school .\' \'q school button\' / 2fr 1fr auto; grid-column-gap: 1rem; max-width: 120rem; margin: 2rem auto 0 auto; } search-form label,[data-is="search-form"] label{ margin-bottom: 0; } search-form [for=q],[data-is="search-form"] [for=q]{ grid-area: label-q; } search-form #q,[data-is="search-form"] #q{ grid-area: q; } search-form [for=school],[data-is="search-form"] [for=school]{ grid-area: label-school; } search-form #school,[data-is="search-form"] #school{ grid-area: school; } search-form [type=submit],[data-is="search-form"] [type=submit]{ grid-area: button; }', '', function(opts) {

    this.submit = (event) => {
      event.preventDefault()
      let params = `?q=${encodeURI(event.target.q.value)}`
      const schoolId = this.refs.school.schoolId
      if (schoolId) {
        params += `&school=${schoolId}`
      }
      page(`/search${params}`)
    }
});

riot.tag2('select-school', '<input type="search" ref="input" placeholder="Ex : Lycée Jean Moulin Paris">', '', '', function(opts) {


    this.displaySchool = (school) => {
      return `${school.name} (${school.postalCode} ${school.city})`
    }

    this.on('mount', async () => {
      let id = this.opts.schoolId

      if (id) {
        const school = await api(`/schools/${id}`)
        this.refs.input.value = this.displaySchool(school)
      }

      const completer = new Awesomplete(this.refs.input, {
        replace: function (suggestion) {
          this.input.value = suggestion.label
          id = suggestion.value
        },
        filter: function (text, input) {
          const words = normalizeString(input).split(' ')
          return words.filter(word => normalizeString(text.label).includes(word)).length === words.length
        },
        item: function (text, input) {
          return Awesomplete.ITEM(text.label, '')
        }
      })

      this.refs.input.addEventListener('input', async event => {
        const q = event.target.value
        if (q === '') {
          this.schoolId = ''
        }
        if (!q || q.length < 3) {
          return
        }
        const schools = await api(`/schools/search/${q}`)
        completer.list = schools && schools.map(s => {
          return {
            label: this.displaySchool(s),
            value: s._id
          }
        })
      })

      this.refs.input.addEventListener('awesomplete-selectcomplete', event => {
        this.schoolId = id
      })
    })
});
