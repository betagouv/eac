'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

riot.tag2('app', '<header> <a href="/"> <img id="logo" src="/images/logo-eac.gif" alt="Logo de la Plateforme EAC"> <h1>Plateforme EAC</h1> <h2>L\'Éducation artistique et culturelle à portée de main</h2> </a> <p> Trouvez les activités artistiques et culturelles au plus proche de vous </p> <search-form q="{this.q}" school-id="{this.schoolId}"></search-form> </header> <main ref="container"></main>', 'app header,[data-is="app"] header{ padding: 3rem; margin-bottom: 3rem; border-bottom: .5rem solid; border-image: linear-gradient( to right, #4f2559 calc(100%/6), #ea8323 calc(100%/6), #ea8323 calc((100%/6)*2), #7d932d calc((100%/6)*2), #7d932d calc((100%/6)*3), #209fd6 calc((100%/6)*3), #209fd6 calc((100%/6)*4), #f7da34 calc((100%/6)*4), #f7da34 calc((100%/6)*5), #dd0e29 75% ) 5; background-color: #fff; } app header > a,[data-is="app"] header > a{ display: grid; grid-template: ". logo title ." ". logo baseline ." / 1fr 8rem 38rem 1fr ; color: inherit; } app header > a #logo,[data-is="app"] header > a #logo{ grid-area: logo; } app header > a h1,[data-is="app"] header > a h1{ grid-area: title; font-size: 1.4em; margin: .4em 0 0 1rem; align-self: end; font-weight: normal; } app header > a h2,[data-is="app"] header > a h2{ grid-area: baseline; font-size: 1em; margin: 0 0 1rem 1rem; } app header > p,[data-is="app"] header > p{ max-width: 50rem; text-align: center; font-size: 2.5rem; font-weight: 100; margin: 2rem auto 0 auto; }', '', function (opts) {
  var _this = this;

  page('/', function (ctx) {
    _this.refs.container.innerHTML = '';
    _this.update();
  });

  page('/search', function (ctx) {
    var params = urlParams(ctx.querystring);
    _this.q = decodeURI(params.get('q') || '');
    _this.schoolId = params.get('school') || '';
    var filters = encodeURI(params.get('filters') || '');
    _this.refs.container.innerHTML = '<page-search\n        school-id="' + _this.schoolId + '"\n        q="' + _this.q + '"\n        filters="' + filters + '"\n        />';
    riot.mount('page-search');
    _this.update();
  });

  page('/actor/create', function (ctx) {
    _this.refs.container.innerHTML = '<page-actor-edit/>';
    riot.mount('page-actor-edit');
    _this.update();
  });

  page('/actor/:id/edit', function (ctx) {
    _this.refs.container.innerHTML = '<page-actor-edit actor-id="' + ctx.params.id + '"/>';
    riot.mount('page-actor-edit');
    _this.update();
  });

  page('/actor/:id', function (ctx) {
    _this.schoolId = ctx.params.school;
    _this.refs.container.innerHTML = '<page-actor\n        school-id="' + _this.schoolId + '"\n        actor-id="' + ctx.params.id + '"\n        />';
    riot.mount('page-actor');
    _this.update();
  });

  this.on('mount', function () {
    page();
    document.body.classList.add('ready');
  });
});

riot.tag2('page-actor-edit', '<section> <h2>{this.actor ? \'Modifier\' : \'Ajouter\'} un acteur culturel</h2> <form onsubmit="{this.submit}"> <fieldset class="block"> <h3>Présentation générale</h3> <label for="name">Nom</label> <input type="text" id="name" riot-value="{this.actor && this.actor.name}" required> <label for="image">URL de photo</label> <input type="url" oninput="{this.updateImage}" id="image" riot-value="{this.actor && this.actor.image}"> <img ref="image" if="{this.actor.image}" riot-src="{this.actor.image}" height="100"> <label for="description">Description</label> <textarea id="description" required>{this.actor && this.actor.description}</textarea> </fieldset> <fieldset class="block"> <h3>Contact accueil</h3> <label for="url">Site internet</label> <input type="url" id="url" riot-value="{this.actor && this.actor.url}"> <label for="mainPhone">Numéro de téléphone principal</label> <input type="text" id="mainPhone" riot-value="{this.actor && this.actor.mainPhone}"> <label for="address">Adresse</label> <input type="text" id="address" name="address" riot-value="{this.actor && this.address}" required> <label for="city">Ville</label> <input type="text" id="city" name="city" riot-value="{this.actor && this.city}" required> <label for="postalCode">Code postal</label> <input type="text" id="postalCode" name="postalCode" riot-value="{this.actor && this.postalCode}" required> </fieldset> <fieldset class="block"> <h3>Contact pour l\'organisation d\'une sortie / intervention</h3> <label for="contactName">Nom du contact EAC</label> <input type="text" id="contactName" name="contactName" riot-value="{this.actor && this.actor.contactName}" required> <label for="contactPhone">Téléphone du contact EAC</label> <input type="tel" id="contactPhone" name="contactPhone" riot-value="{this.actor && this.actor.contactPhone}" required> <label for="contactEmail">Email du contact EAC</label> <input id="contactEmail" name="contactEmail" riot-value="{this.actor && this.actor.contactEmail}" required type="{\'email\'}"> </fieldset> <fieldset class="block domains"> <h3>Domaines</h3> <label each="{domain in this.domains}"> <input type="checkbox" name="domains" riot-value="{domain}" checked="{this.actor && this.actor.domains.includes(domain)}"> {domain} </label> </fieldset> <fieldset> <h3>Actions proposées</h3> <section each="{action, index in this.actions}" class="block"> <h4>Action n°{index + 1}</h4> <button class="delete button-outline" type="button" onclick="{this.deleteAction}" data-id="{index}">Supprimer</button> <label>Intitulé</label> <input type="text" name="action-name" riot-value="{action.name}"> <label>Description</label> <textarea name="action-description">{action.description}</textarea> <label>Liste des liens vers des photos en ligne, vidéos Youtube et documents téléchargeables (séparés par une virgule)</label> <input type="text" name="medias"> <label>Date de début</label> <input name="dateRangeStart" riot-value="{action.dateRange && action.dateRange[0]}" type="{\'date\'}"> <label>Date de fin</label> <input name="dateRangeEnd" riot-value="{action.dateRange.length && action.dateRange[1]}" type="{\'date\'}"> <label>Durée sur place</label> <input type="text" name="duration" riot-value="{action.duration}"> <label>Niveaux concernés</label> <select name="schoolLevels" multiple> <option value="maternelle" selected="{\'maternelle\' in action.schoolLevels}">Maternelle</option> <option value="elementaire" selected="{\'elementaire\' in action.schoolLevels}">Élémentaire</option> <option value="college" selected="{\'college\' in action.schoolLevels}">Collège</option> <option value="lycee" selected="{\'lycee\' in action.schoolLevels}">Lycée</option> </select> <label>Matières concernées</label> <select name="topics" multiple> <option value="francais" selected="{\'francais\' in action.schoolLevels}">Français</option> <option value="mathematiques" selected="{\'mathematiques\' in action.schoolLevels}">Mathématiques</option> <option value="histoire" selected="{\'histoire\' in action.schoolLevels}">Histoire</option> <option value="geographie" selected="{\'geographie\' in action.schoolLevels}">Géographie</option> <option value="langue-vivante" selected="{\'langue-vivante\' in action.schoolLevels}">Langue Vivante</option> <option value="physique" selected="{\'physique\' in action.schoolLevels}">Physique</option> <option value="chimie" selected="{\'chimie\' in action.schoolLevels}">Chimie</option> <option value="svt" selected="{\'svt\' in action.schoolLevels}">Sciences de la vie et de la Terre</option> <option value="eps" selected="{\'eps\' in action.schoolLevels}">Éducation physique et sportive</option> <option value="civisme" selected="{\'civisme\' in action.schoolLevels}">Éducation civique, juridique et sociale</option> <option value="autre" selected="{\'autre\' in action.schoolLevels}">Autre(s)</option> </select> <label>Page internet de l\'action</label> <input type="url" name="website" riot-value="{action.website}"> <label>Nombre maximum d\'élèves</label> <input name="capacity" riot-value="{action.capacity}" type="{\'number\'}"> <label>État de l\'action</label> <select name="status"> <option value="done" selected="{action.status == \'done\'}">C\'est une action achevée</option> <option value="progress" selected="{action.status == \'progress\'}">Il y a déjà des établissements scolaires sur cette action</option> <option value="todo" selected="{action.status == \'todo\'}">Cette action est plannifiée</option> </select> <label>Établissement(s) scolaire(s) en lien avec cette action</label> <input type="text" name="school" riot-value="{action.school}"> <label>Coût prévisionnel total pour cette action (€)</label> <input riot-value="{action.cost}" type="{\'number\'}"> </section> <button onclick="{this.addAction}" class="button-outline" type="button">Ajouter une action</button> </fieldset> <button type="submit">Enregistrer</button> </form> </section>', 'page-actor-edit .domains > label,[data-is="page-actor-edit"] .domains > label{ display: inline-block; margin: 1rem; } page-actor-edit .delete,[data-is="page-actor-edit"] .delete{ float: right; } page-actor-edit .delete + label,[data-is="page-actor-edit"] .delete + label{ clear: both; } page-actor-edit h4,[data-is="page-actor-edit"] h4{ float: left; }', '', function (opts) {
  var _this2 = this;

  function actionTemplate() {
    return {
      name: '',
      description: ''
    };
  }

  this.addAction = function (event) {
    _this2.actions.push(actionTemplate());
  };

  this.deleteAction = function (event) {
    _this2.actions.splice(event.target.dataset.id, 1);
  };

  this.updateImage = function (event) {
    _this2.refs.image.src = event.target.value;
  };

  this.on('mount', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _this2.actorId = _this2.opts.actorId;

            if (!_this2.actorId) {
              _context.next = 6;
              break;
            }

            _context.next = 4;
            return api('/actors/' + _this2.actorId);

          case 4:
            _this2.actor = _context.sent;

            _this2.address = _this2.actor.address + ' ' + _this2.actor.address2 + ' ' + _this2.actor.postalCode + ' ' + _this2.actor.city;

          case 6:
            _this2.actions = _this2.actor && _this2.actor.actions ? _this2.actor.actions : [actionTemplate()];
            _context.next = 9;
            return api('/domains');

          case 9:
            _this2.domains = _context.sent;

            _this2.update();

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this2);
  })));

  this.submit = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event) {
      var form, apiAddress, addresses, address, actions, domains, loc, actor;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();

              form = event.target;
              apiAddress = 'https://api-adresse.data.gouv.fr/search/?q=';
              _context2.next = 5;
              return request('' + apiAddress + form.address.value);

            case 5:
              addresses = _context2.sent;
              address = addresses.features[0];
              actions = Array.from(form['action-name']).length ? Array.from(form['action-name']).map(function (name, index) {
                return {
                  name: name.value,
                  description: form['action-description'][index].value
                };
              }) : [{
                name: form['action-name'].value,
                description: form['action-description'].value
              }];
              domains = Array.from(form.domains).filter(function (d) {
                return d.checked;
              }).map(function (d) {
                return d.value;
              });
              loc = address.geometry;

              loc.coordinates.reverse();

              _context2.next = 13;
              return api(_this2.actorId ? '/actors/' + _this2.actorId : '/actors', {
                method: _this2.actorId ? 'PUT' : 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  address: address.properties.name,
                  city: address.properties.city,
                  postalCode: address.properties.postcode,
                  loc: loc,
                  name: form.name.value,
                  contactPhone: form.contactPhone.value,
                  contactName: form.contactName.value,
                  contactEmail: form.contactEmail.value,
                  description: form.description.value,
                  domains: domains,
                  actions: actions
                })
              });

            case 13:
              actor = _context2.sent;


              page('/actor/' + actor._id);

            case 15:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }();
});

riot.tag2('page-actor', '<article> <section class="block actor"> <h2>{this.actor.name}</h2> <nav class="tags"> <color-tag each="{tag in this.actor.domains}" label="{tag}"></color-tag> </nav> <p if="{this.actor.description}">{this.actor.description}</p> <p if="{!this.actor.description}"> Cet acteur culturel n\'a pas renseigné ses informations.<br> <a class="button" href="https://duckduckgo.com/?q={encodeURI(`${this.actor.name} ${this.actor.city}`)}" target="_blank">Faire une recherche</a> </p> </section> <section class="block actions"> <h2>Actions proposées</h2> <article each="{action in this.actor.actions}"> <h3>{action.name}</h3> <p>{action.description}</p> </article> <article if="{!this.actor.actions}">Les actions proposées par cet acteur sont sur demande.<br> Veillez à prendre contact avec cet Acteur Culturel.</article> </section> <aside> <section class="block" id="contact"> <h3>Contacter {this.contact}</h3> <ul> <li if="{this.phone}">Par téléphone : {this.phone}</li> <li if="{this.email}">Par email : {this.email}</li> </ul> <a if="{this.email}" class="button" target="_blank" href="mailto:{this.email}?subject=À propos de {this.actor.name}&cc=loup.wolff@beta.gouv.fr&body={encodeURIComponent(this.emailBody)}">Envoyer un email</a> <a if="{this.phone}" class="button" href="tel:{this.phone}">Appeler</a> <p if="{!this.phone && !this.email}"> Aucune information de contact n\'est disponible pour cet acteur culturel.<br> <a class="button" href="https://duckduckgo.com/?q={encodeURI(`${this.actor.name} ${this.actor.city}`)}" target="_blank">Faire une recherche</a> </p> </section> <section class="block"> <geo if="{this.actor.distance}">à {Math.ceil(this.actor.distance)}}&nbsp;km</geo> <address if="{this.latLng}"> <iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" riot-src="https://www.openstreetmap.org/export/embed.html?bbox={Number(this.latLng[1]) - 0.02}%2C{Number(this.latLng[0]) - 0.02}%2C{Number(this.latLng[1]) + 0.02}%2C{Number(this.latLng[0]) + 0.02}&amp;layer=hot&amp;marker={this.latLng[0]}%2C{this.latLng[1]}"></iframe><br> <small> <a href="https://www.openstreetmap.org/?mlat={this.latLng[0]}&mlon={this.latLng[1]}#map=15/{this.latLng[0]}/{this.latLng[1]}&layers=T" target="_blank"> {this.actor.address}<br> {this.actor.postalCode} {this.actor.city} </a> </small> </address> </section> </aside> <section class="edit"> <a href="/actor/{this.opts.actorId}/edit" class="button"> Mettre à jour les informations de cet acteur </a> </section> </article>', 'page-actor,[data-is="page-actor"]{ display: grid; grid-template: \'actor aside\' \'actions aside\' \'edit edit\' / auto 51rem; } page-actor > article,[data-is="page-actor"] > article{ display: contents; } page-actor .actor,[data-is="page-actor"] .actor{ grid-area: actor; } page-actor .actions,[data-is="page-actor"] .actions{ grid-area: actions; } page-actor .edit,[data-is="page-actor"] .edit{ grid-area: edit; margin: 1rem auto; } page-actor aside,[data-is="page-actor"] aside{ grid-area: aside; } page-actor .actions article:not(:last-of-type),[data-is="page-actor"] .actions article:not(:last-of-type){ padding-bottom: 1rem; margin-bottom: 1rem; border-bottom: 1px solid #ccc; } page-actor .actor > nav,[data-is="page-actor"] .actor > nav{ margin-bottom: 1rem; } page-actor .actor > p:first-of-type,[data-is="page-actor"] .actor > p:first-of-type{ white-space: pre-wrap; }', '', function (opts) {
  var _this3 = this;

  this.actor = {};

  this.on('mount', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return api('/actors/' + opts.actorId);

          case 2:
            _this3.actor = _context3.sent;

            _this3.phone = _this3.actor.contactPhone || _this3.actor.ownerPhone;
            _this3.email = _this3.actor.contactEmail || _this3.actor.ownerEmail;
            _this3.latLng = _this3.actor.loc.coordinates[0] && _this3.actor.loc.coordinates;
            _this3.contact = (_this3.actor.contactName || _this3.actor.ownerName || '').replace(',', '');
            _this3.emailBody = 'Bonjour ' + _this3.contact + ',\n\n' + ('Je vous contacte suite \xE0 ma consultation de la fiche ' + location.href + '.\n\n') + 'Questions ou remarques :\n\n\n\n';
            _this3.update();

          case 9:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this3);
  })));
});

riot.tag2('page-search', '<virtual if="{this.q}"> <section class="block" id="filters"> <search-filters filters="{this.filters}" q="{this.q}" school-id="{this.schoolId}" actors="{this.actors}"></search-filters> </section> <section id="tags"> <color-tag each="{domain in this.domains}" label="{domain}"></color-tag> </section> <section if="{this.viewType == \'list\'}" id="results"> <button onclick="{this.setViewType}" value="map">Voir les résultats sur une carte</button> <div class="block"> <h4>Résultats pour «&nbsp;{this.q}&nbsp;»</h4> <p if="{!this.actors.length}">Aucun résultat ne correspond à cette recherche à proximité de votre établissement.</p> </div> <actor-card class="block" each="{actor in this.actors}" actor="{actor}" school-id="{this.schoolId}"></actor-card> </section> <section if="{this.viewType == \'map\'}" id="map"> <button onclick="{this.setViewType}" value="list">Voir la liste des résultats</button> <actors-map class="block" actors="{this.actors}" school-id="{this.schoolId}"></actors-map> </section> <section id="extra" class="block"> <h4>Vous n\'avez rien trouvé d\'intéressant ?</h4> <p> Si aucun résultat ne correspond à vos attentes, d\'autres sites peuvent éventuellement compléter votre recherche&nbsp;: </p> <actors-externals department="{this.department}"></actors-externals> <p> Vous pouvez également participer à améliorer la base de données en ajoutant un acteur culturel&nbsp;: </p> <a href="/actor/create" class="button">Ajouter un acteur culturel</a> </section> </virtual>', 'page-search,[data-is="page-search"]{ display: grid; grid-template: \'search search\' \'tags tags\' \'filters results\' \'filters extra\' / minmax(auto, 35%) 1fr; grid-gap: 2rem; } page-search #search,[data-is="page-search"] #search{ grid-area: search; } page-search #tags,[data-is="page-search"] #tags{ grid-area: tags; height: 4rem; } page-search #filters,[data-is="page-search"] #filters{ grid-area: filters; height: auto; } page-search #results,[data-is="page-search"] #results{ grid-area: results; } page-search #map,[data-is="page-search"] #map{ grid-area: results; } page-search #extra,[data-is="page-search"] #extra{ grid-area: extra; } page-search h4,[data-is="page-search"] h4{ margin-top: 1rem; } page-search search-filters,[data-is="page-search"] search-filters{ position: sticky; top: 0; } page-search actor-card,[data-is="page-search"] actor-card{ padding-bottom: 1rem; margin-bottom: 1rem; border-bottom: 1px solid #eee; } page-search #tags .tag,[data-is="page-search"] #tags .tag{ background-color: #fff; box-shadow: .1rem .1rem .5rem #eee; border-radius: .8rem; border: 1px solid #e6e6e6; margin-right: 2rem; }', '', function (opts) {
  var _this4 = this;

  this.q = this.opts.q;
  this.schoolId = this.opts.schoolId;
  try {
    this.filters = JSON.parse(decodeURI(opts.filters));
  } catch (e) {
    this.filters = {};
  }
  this.actors = [];
  this.viewType = 'list';
  this.domains = this.filters.domains || [];
  this.school = {};_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var params;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            params = _this4.filters.domains ? '?domains=' + _this4.domains : '';

            if (!_this4.schoolId) {
              _context4.next = 6;
              break;
            }

            _context4.next = 4;
            return api('/schools/' + _this4.schoolId);

          case 4:
            _this4.school = _context4.sent;

            if (_this4.school.loc.coordinates) {
              params += params ? '&' : '?';
              params += 'from=' + _this4.school.loc.coordinates[1] + ',' + _this4.school.loc.coordinates[0];
            }

          case 6:
            _context4.next = 8;
            return api('/actors/search/' + normalizeString(_this4.q) + params);

          case 8:
            _this4.actors = _context4.sent;

            _this4.department = _this4.school.postalCode && _this4.school.postalCode.substr(0, 2);
            _this4.update();

          case 11:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, _this4);
  }))();

  this.setViewType = function (event) {
    _this4.viewType = event.target.value;
  };
});

riot.tag2('actor-card', '<h3>{this.actor.name} <small>(dept {this.actor.department})</small></h3> <p>{this.actor.description.length < this.maxlength ? this.actor.description : this.actor.description.substr(0, this.maxlength) + \'…\'}</p> <footer> <geo if="{this.actor.distance}">{Math.ceil(this.actor.distance)}&nbsp;km</geo> <nav class="tags"> <color-tag class="tag" each="{domain in this.actor.domains}" label="{domain}"> <a>{domain}</a> </color-tag> </nav> </footer> <a href="/actor/{this.actor._id}?school={this.schoolId}"></a>', 'actor-card,[data-is="actor-card"]{ position: relative; display: block; } actor-card > a,[data-is="actor-card"] > a{ display: block; position: absolute; top: 0; left: 0; bottom: 0; right: 0; } actor-card:hover,[data-is="actor-card"]:hover{ color: #111; transition: color .3s; } actor-card h3,[data-is="actor-card"] h3{ font-size: 1.4em; margin: 1rem 0 .5rem 0; text-transform: capitalize; } actor-card h3 small,[data-is="actor-card"] h3 small{ text-transform: none; font-style: italic; font-size: .8em; } actor-card p,[data-is="actor-card"] p{ margin: 0; } actor-card footer,[data-is="actor-card"] footer{ display: grid; grid-template-columns: 1fr auto; padding-top: 1rem; margin-top: 1rem; border-top: 1px solid #ccc; align-items: center; } actor-card .tags,[data-is="actor-card"] .tags{ text-align: right; } actor-card geo,[data-is="actor-card"] geo{ font-size: 1.3rem; background: url(/images/gps.icon.png) no-repeat; background-size: 1.8rem; padding-left: 2rem; }', '', function (opts) {

  this.schoolId = opts.schoolId;
  this.actor = opts.actor;
  this.maxlength = this.opts.maxlength || 150;
});

riot.tag2('actors-externals', '<nav> <a if="{this.inDepartment(\'26\')}" target="_blank" href="http://www.ladrome.fr/nos-actions/culture/pratiques-artistiques-culturelles/actions-educatives-colleges/dispositifs-departementaux-culture-colleges"> <img src="http://www.ladrome.fr/sites/all/themes/ladromeax/images/logo.png"> </a> <a if="{this.inDepartment([\'44\', \'49\', \'53\', \'72\', \'85\'])}" target="_blank" href="https://www.laplateforme.net/pages/type/structures"> <img src="https://www.laplateforme.net/app/themes/p2/dist/images/logo.svg"> </a> <a if="{this.inDepartment(\'38\')}" target="_blank" href="http://www.ac-grenoble.fr/educationartistique.isere"> <img src="http://cache.media.education.gouv.fr/image/Academie/04/9/Logo_Grenoble_956049.png"> </a> <a target="_blank" href="https://www.messortiesculture.com"> <img src="http://www.messortiesculture.com/images/logo.svg"> </a> <a target="_blank" href="https://www.agendaculturel.fr" class="backgrounded"> <img src="https://static.agendaculturel.fr/layout/agenda-culturel-logo.png"> </a> </nav>', 'actors-externals a,[data-is="actors-externals"] a{ display: inline-block; width: 30%; padding: 2rem; text-align: center; vertical-align: middle; } actors-externals .backgrounded,[data-is="actors-externals"] .backgrounded{ background-color: #999; }', '', function (opts) {
  var _this5 = this;

  this.inDepartment = function (codes) {
    if (!Array.isArray(codes)) {
      codes = [codes];
    }
    return _this5.opts.department && (!_this5.opts.department.length || codes.includes(_this5.opts.department));
  };
});

riot.tag2('actors-map', '<div ref="map"></div>', 'actors-map,[data-is="actors-map"]{ display: block; width: 100%; height: auto; } actors-map [ref=map],[data-is="actors-map"] [ref=map]{ height: 600px; } actors-map .leaflet-popup a,[data-is="actors-map"] .leaflet-popup a{ color: inherit; } actors-map .leaflet-user,[data-is="actors-map"] .leaflet-user{ background: red; border: 5px solid rgba(255,255,255,0.5); color: blue; font-weight: bold; text-align: center; border-radius: 50%; line-height: 80px; width: 50px; }', '', function (opts) {
  var _this6 = this;

  this.schoolId = opts.schoolId;
  this.actors = opts.actors;

  this.on('mount', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var school, lngLat, zoom, map, actorMarker, markers;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            school = null;
            lngLat = [46.495, 2.207];
            zoom = 6;

            if (!_this6.schoolId) {
              _context5.next = 9;
              break;
            }

            _context5.next = 6;
            return api('/schools/' + _this6.schoolId);

          case 6:
            school = _context5.sent;

            lngLat = school.loc.coordinates.reverse();
            zoom = 9;

          case 9:
            map = L.map(_this6.refs.map).setView(lngLat, zoom);
            actorMarker = L.icon({ iconUrl: '/images/marker.svg', iconSize: [40, 45] });


            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
              maxZoom: 18,
              attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' + '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
              id: 'mapbox.streets'
            }).addTo(map);

            markers = _this6.actors.filter(function (a) {
              return a.loc && a.loc.coordinates[0];
            }).map(function (a) {
              var marker = L.marker(a.loc.coordinates, { icon: actorMarker });
              marker.actor = a;
              marker.bindPopup('\n            <a href=/actor/' + a._id + '?school=' + _this6.schoolId + ' title="Voir le d\xE9tail">\n              <h4>' + a.name + '</h4>\n              <p>' + (a.description.length > 80 ? a.description.substr(0, 300) + '…' : a.description) + '</p>\n              <p>Voir le d\xE9tail</p>\n            </a>\n          ');
              return marker;
            });


            if (_this6.schoolId) {
              L.marker(lngLat, {
                icon: L.divIcon({ className: 'leaflet-user', iconSize: [25, 25] })
              }).bindPopup('Votre établissement scolaire').addTo(map);
            }

            L.featureGroup(markers).addTo(map);

          case 15:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, _this6);
  })));
});

riot.tag2('color-tag', '<a class="tag"> <span riot-style="background-color: {this.color}"></span> {this.label} </a>', 'color-tag span,[data-is="color-tag"] span{ display: inline-block; width: 1.2rem; height: 1.2rem; margin-right: .5rem; border-radius: 100%; border-color: 1px solid #e6e6e6; }', '', function (opts) {
  this.label = this.opts.label || '';

  var r = this.label.charCodeAt(0) * 2;
  var g = 255 - this.label.length * 25 % 255;
  var b = this.label.charCodeAt(this.label.length - 1) * 2;
  this.color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});

riot.tag2('search-filters', '<details title="Domaine" open> <summary>Affiner par domaines</summary> <label each="{domain in this.domains}"> <input type="checkbox" name="domains" riot-value="{domain}" onchange="{this.submit}" checked="{this.filters.domains && this.filters.domains.includes(domain)}"> {domain} </label> </details>', 'search-filters label,[data-is="search-filters"] label{ font-weight: normal; cursor: pointer; margin-left: 1.5rem; } search-filters label > input,[data-is="search-filters"] label > input{ margin-right: 0.75rem; } search-filters summary,[data-is="search-filters"] summary{ margin-bottom: 1rem; cursor: pointer; }', '', function (opts) {
  var _this7 = this;

  this.filters = opts.filters || {};
  this.actors = opts.actors || [];
  this.q = opts.q;
  this.schoolId = opts.schoolId;

  this.on('update', function () {
    var _ref6;

    _this7.actors = opts.actors;
    _this7.domains = Array.from(new Set((_ref6 = []).concat.apply(_ref6, _toConsumableArray(_this7.actors.filter(function (a) {
      return a.domains;
    }).map(function (a) {
      return a.domains;
    }))))).filter(function (d) {
      return String(d) === d;
    }).map(function (d) {
      return d.trim();
    }).filter(function (d) {
      return d.length;
    }).sort(function (a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });
  });

  this.submit = function (event) {
    var q = _this7.q;
    var schoolId = _this7.schoolId;
    var filters = _this7.filters;
    var category = event.target.name;
    var value = event.target.value;
    var activate = event.target.checked;

    if (!filters[category]) filters[category] = [];
    if (activate) {
      if (filters[category].indexOf(value) < 0) filters[category].push(value);
    } else filters[category].splice(filters[category].indexOf(value), 1);
    if (!filters[category].length) delete filters[category];

    page('/search?q=' + q + '&school=' + schoolId + '&filters=' + encodeURI(JSON.stringify(filters)));
  };
});

riot.tag2('search-form', '<form onsubmit="{this.submit}"> <label for="q">Vous recherchez</label> <input type="search" name="q" id="q" riot-value="{this.opts.q}" placeholder="Ex : Visite artisan" required autofocus> <label for="school">À proximité d\'une école…</label> <select-school ref="school" type="search" name="school" id="school" school-id="{this.opts.schoolId}"></select-school> <label for="address">… ou à proximité d\'une ville/code postal</label> <select-address ref="address" type="search" name="address" id="address"></select-address> <input class="button" type="submit" value="Rechercher"> </form>', 'search-form form,[data-is="search-form"] form{ display: grid; grid-template: \'label-q label-school label-address .\' \'q school address button\'; grid-column-gap: 1rem; max-width: 120rem; margin: 2rem auto 0 auto; } search-form label,[data-is="search-form"] label{ margin-bottom: 0; } search-form [for=q],[data-is="search-form"] [for=q]{ grid-area: label-q; } search-form #q,[data-is="search-form"] #q{ grid-area: q; } search-form [for=school],[data-is="search-form"] [for=school]{ grid-area: label-school; } search-form #school,[data-is="search-form"] #school{ grid-area: school; } search-form [for=address],[data-is="search-form"] [for=address]{ grid-area: label-address; } search-form #address,[data-is="search-form"] #address{ grid-area: address; } search-form [type=submit],[data-is="search-form"] [type=submit]{ grid-area: button; }', '', function (opts) {
  var _this8 = this;

  this.submit = function (event) {
    event.preventDefault();
    var params = '?q=' + encodeURI(event.target.q.value);
    var schoolId = _this8.refs.school.schoolId;
    var latLng = _this8.refs.address.latLng;
    if (schoolId) {
      params += '&school=' + schoolId;
    }
    if (latLng) {
      params += '&latlng=' + latLng.join(',');
    }

    page('/search' + params);
  };
});

riot.tag2('select-address', '<input type="search" ref="input" placeholder="Ex : 75011 Paris">', '', '', function (opts) {
  var _this9 = this;

  this.latLng = [];

  this.on('mount', function () {
    var timeout = void 0;
    var latLng = void 0;

    var completer = new Awesomplete(_this9.refs.input, {
      replace: function replace(suggestion) {
        this.input.value = suggestion.label;
        latLng = suggestion.value;
      },
      item: function item(text, input) {
        return Awesomplete.ITEM(text.label, '');
      }
    });

    console.debug('listener', _this9.refs.input.addEventListener);

    _this9.refs.input.addEventListener('input', function (event) {
      var q = event.target.value;
      console.debug(q);
      if (q.length < 3) {
        return;
      }
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var matches, addresses;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return request('https://api-adresse.data.gouv.fr/search/?q=' + q);

              case 2:
                matches = _context6.sent;
                addresses = matches && matches.features && matches.features;

                completer.list = addresses && addresses.map(function (a) {
                  return {
                    label: a.properties.postcode + ' ' + a.properties.name,
                    value: a.geometry.coordinates
                  };
                });

              case 5:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, _this9);
      })), 500);
    });

    _this9.refs.input.addEventListener('awesomplete-selectcomplete', function (event) {
      _this9.latLng = latLng;
    });
  });
});

riot.tag2('select-school', '<input type="search" ref="input" placeholder="Ex : Lycée Jean Moulin Paris">', '', '', function (opts) {
  var _this10 = this;

  this.displaySchool = function (school) {
    return school.name + ' (' + school.postalCode + ' ' + school.city + ')';
  };

  this.on('mount', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var id, school, completer;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            id = _this10.opts.schoolId;

            if (!id) {
              _context8.next = 6;
              break;
            }

            _context8.next = 4;
            return api('/schools/' + id);

          case 4:
            school = _context8.sent;

            _this10.refs.input.value = _this10.displaySchool(school);

          case 6:
            completer = new Awesomplete(_this10.refs.input, {
              replace: function replace(suggestion) {
                this.input.value = suggestion.label;
                id = suggestion.value;
              },
              filter: function filter(text, input) {
                var words = normalizeString(input).split(' ');
                return words.filter(function (word) {
                  return normalizeString(text.label).includes(word);
                }).length === words.length;
              },
              item: function item(text, input) {
                return Awesomplete.ITEM(text.label, '');
              }
            });


            _this10.refs.input.addEventListener('input', function () {
              var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(event) {
                var q, schools;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        q = event.target.value;

                        if (q === '') {
                          _this10.schoolId = '';
                        }

                        if (!(!q || q.length < 3)) {
                          _context7.next = 4;
                          break;
                        }

                        return _context7.abrupt('return');

                      case 4:
                        _context7.next = 6;
                        return api('/schools/search/' + q);

                      case 6:
                        schools = _context7.sent;

                        completer.list = schools && schools.map(function (s) {
                          return {
                            label: _this10.displaySchool(s),
                            value: s._id
                          };
                        });

                      case 8:
                      case 'end':
                        return _context7.stop();
                    }
                  }
                }, _callee7, _this10);
              }));

              return function (_x2) {
                return _ref9.apply(this, arguments);
              };
            }());

            _this10.refs.input.addEventListener('awesomplete-selectcomplete', function (event) {
              _this10.schoolId = id;
            });

          case 9:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, _this10);
  })));
});