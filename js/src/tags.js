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

    this.on('mount', () => {
      page()
      document.body.classList.add('ready')
    })
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXBoYWVsL3dlYi92YWxldHMvZWFjL3RhZ3MvYXBwLnRhZy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLEFBU0ksQUFnRUksQUFHQSxBQUNBLEFBQ0EsQUFDQSxBQUlGLEFBRUYsQUFPSSxBQUVKLEFBR0EsQUFPQSxBQUtBLEFBT0E7Q0FsR0E7Q0FoQkEsQUFXRixBQU1JLEFBK0ZBO0NBOUZBLEFBY0EsQUFNQSxBQU1BLEFBVUEsQUF3QkUsQUFDQSxBQU9GO0NBbkVGLEFBY0EsQUFNQSxBQU1BLEFBVUEsQUFLQTtDQXZDQSxBQXdDRixBQVdNLEFBQ0EsQUEwQ047Q0FoSEksQUFHQSxBQVNGLEFBT0UsQUEwQ0osQUEyQkk7Q0FwRUE7Q0FDQTtDQUNBO0NBQ0EsQUE4REUsQUFXRixBQUtBLEFBRUEsQUFLQTtDQXZHRixBQW1CSSxBQXVCQSxBQTJERjtDQWpGRTtDQUNBLEFBaUZGO0NBaEZFLEFBc0JBO0NBckJGLEFBK0RBLEFBR0EsQUFHQTs7O0NBbkdBLEFBQ0EsQUFZSixBQXFCRSxBQXNESTtDQXJERixBQThCQTtDQTdCQSxBQU1BOzs7Q0FGRixBQTRDRSxBQUVFO0NBN0NGLEFBMkJBLEFBNENBOzs7O0NBN0dGLEFBMkNBLEFBcUVKO0NBcEVNO0NBM0NGLEFBNENFLEFBa0JBLEFBa0NBOztDQWxERSxBQWlCRjs7Q0FmQSxBQWlCRSxBQVlGOzs7Q0F6QkYsQUF5Q0UsQUFPQTtDQS9DQTtDQTNESixBQVVBLEFBa0RJLEFBTUYsQUFlSSxBQUlKLEFBU0EsQUFHQSxBQU9BLEFBS0EiLCJmaWxlIjoiL1VzZXJzL3JhcGhhZWwvd2ViL3ZhbGV0cy9lYWMvdGFncy9hcHAudGFnLmh0bWwiLCJzb3VyY2VzQ29udGVudCI6WyI8YXBwPlxuICA8aGVhZGVyPlxuICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICA8aW1nIGlkPWxvZ28gc3JjPS9pbWFnZXMvbG9nby1lYWMuZ2lmIGFsdD1cIkxvZ28gZGUgbGEgUGxhdGVmb3JtZSBFQUNcIj5cbiAgICAgIDxoMT5QbGF0ZWZvcm1lIEVBQzwvaDE+XG4gICAgICA8aDI+TCfDiWR1Y2F0aW9uIGFydGlzdGlxdWUgZXQgY3VsdHVyZWxsZSDDoCBwb3J0w6llIGRlIG1haW48L2gyPlxuICAgIDwvYT5cbiAgICA8cD5cbiAgICAgIFRyb3V2ZXogbGVzIGFjdGl2aXTDqXMgYXJ0aXN0aXF1ZXMgZXQgY3VsdHVyZWxsZXMgYXUgcGx1cyBwcm9jaGUgZGUgdm91c1xuICAgIDwvcD5cbiAgICA8c2VhcmNoLWZvcm0gcT17IHRoaXMucSB9IHNjaG9vbC1pZD17IHRoaXMuc2Nob29sSWQgfSAvPlxuICA8L2hlYWRlcj5cblxuICA8bWFpbiByZWY9Y29udGFpbmVyPjwvbWFpbj5cblxuXG4gIDxzY3JpcHQ+XG4gICAgLyogZ2xvYmFsIHBhZ2UsIHJpb3QsIHVybFBhcmFtcyAqL1xuICAgIHBhZ2UoJy8nLCAoY3R4KSA9PiB7XG4gICAgICB0aGlzLnJlZnMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgfSlcblxuICAgIHBhZ2UoJy9zZWFyY2gnLCAoY3R4KSA9PiB7XG4gICAgICBjb25zdCBwYXJhbXMgPSB1cmxQYXJhbXMoY3R4LnF1ZXJ5c3RyaW5nKVxuICAgICAgdGhpcy5xID0gZGVjb2RlVVJJKHBhcmFtcy5nZXQoJ3EnKSB8fCAnJylcbiAgICAgIHRoaXMuc2Nob29sSWQgPSBwYXJhbXMuZ2V0KCdzY2hvb2wnKSB8fCAnJ1xuICAgICAgY29uc3QgZmlsdGVycyA9IGVuY29kZVVSSShwYXJhbXMuZ2V0KCdmaWx0ZXJzJykgfHwgJycpXG4gICAgICB0aGlzLnJlZnMuY29udGFpbmVyLmlubmVySFRNTCA9IGA8cGFnZS1zZWFyY2hcbiAgICAgICAgc2Nob29sLWlkPVwiJHt0aGlzLnNjaG9vbElkfVwiXG4gICAgICAgIHE9XCIke3RoaXMucX1cIlxuICAgICAgICBmaWx0ZXJzPVwiJHtmaWx0ZXJzfVwiXG4gICAgICAgIC8+YFxuICAgICAgcmlvdC5tb3VudCgncGFnZS1zZWFyY2gnKVxuICAgICAgdGhpcy51cGRhdGUoKVxuICAgIH0pXG5cbiAgICBwYWdlKCcvYWN0b3IvY3JlYXRlJywgY3R4ID0+IHtcbiAgICAgIHRoaXMucmVmcy5jb250YWluZXIuaW5uZXJIVE1MID0gYDxwYWdlLWFjdG9yLWVkaXQvPmBcbiAgICAgIHJpb3QubW91bnQoJ3BhZ2UtYWN0b3ItZWRpdCcpXG4gICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgfSlcblxuICAgIHBhZ2UoJy9hY3Rvci86aWQvZWRpdCcsIGN0eCA9PiB7XG4gICAgICB0aGlzLnJlZnMuY29udGFpbmVyLmlubmVySFRNTCA9IGA8cGFnZS1hY3Rvci1lZGl0IGFjdG9yLWlkPVwiJHtjdHgucGFyYW1zLmlkfVwiLz5gXG4gICAgICByaW90Lm1vdW50KCdwYWdlLWFjdG9yLWVkaXQnKVxuICAgICAgdGhpcy51cGRhdGUoKVxuICAgIH0pXG5cbiAgICBwYWdlKCcvYWN0b3IvOmlkJywgKGN0eCkgPT4ge1xuICAgICAgdGhpcy5zY2hvb2xJZCA9IGN0eC5wYXJhbXMuc2Nob29sXG4gICAgICB0aGlzLnJlZnMuY29udGFpbmVyLmlubmVySFRNTCA9IGA8cGFnZS1hY3RvclxuICAgICAgICBzY2hvb2wtaWQ9XCIke3RoaXMuc2Nob29sSWR9XCJcbiAgICAgICAgYWN0b3ItaWQ9XCIke2N0eC5wYXJhbXMuaWR9XCJcbiAgICAgICAgLz5gXG4gICAgICByaW90Lm1vdW50KCdwYWdlLWFjdG9yJylcbiAgICAgIHRoaXMudXBkYXRlKClcbiAgICB9KVxuXG4gICAgdGhpcy5vbignbW91bnQnLCAoKSA9PiB7XG4gICAgICBwYWdlKClcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgncmVhZHknKVxuICAgIH0pXG4gIDwvc2NyaXB0PlxuXG5cbiAgPHN0eWxlIHNjb3BlZD5cbiAgICBoZWFkZXIge1xuICAgICAgcGFkZGluZzogM3JlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgICBib3JkZXItYm90dG9tOiAuNXJlbSBzb2xpZDtcbiAgICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICB0byByaWdodCxcbiAgICAgICAgIzRmMjU1OSBjYWxjKDEwMCUvNiksXG4gICAgICAgICNlYTgzMjMgY2FsYygxMDAlLzYpLFxuICAgICAgICAjZWE4MzIzIGNhbGMoKDEwMCUvNikqMiksXG4gICAgICAgICM3ZDkzMmQgY2FsYygoMTAwJS82KSoyKSxcbiAgICAgICAgIzdkOTMyZCBjYWxjKCgxMDAlLzYpKjMpLFxuICAgICAgICAjMjA5ZmQ2IGNhbGMoKDEwMCUvNikqMyksXG4gICAgICAgICMyMDlmZDYgY2FsYygoMTAwJS82KSo0KSxcbiAgICAgICAgI2Y3ZGEzNCBjYWxjKCgxMDAlLzYpKjQpLFxuICAgICAgICAjZjdkYTM0IGNhbGMoKDEwMCUvNikqNSksXG4gICAgICAgICNkZDBlMjkgNzUlXG4gICAgICApIDU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICBoZWFkZXIgPiBhIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlOlxuICAgICAgICBcIi4gbG9nbyB0aXRsZSAuXCJcbiAgICAgICAgXCIuIGxvZ28gYmFzZWxpbmUgLlwiXG4gICAgICAgIC8gMWZyIDhyZW0gMzhyZW0gMWZyXG4gICAgICAgIDtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cbiAgICBoZWFkZXIgPiBhICNsb2dvIHtcbiAgICAgIGdyaWQtYXJlYTogbG9nbztcbiAgICB9XG4gICAgaGVhZGVyID4gYSBoMSB7XG4gICAgICBncmlkLWFyZWE6IHRpdGxlO1xuICAgICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICAgIG1hcmdpbjogLjRlbSAwIDAgMXJlbTtcbiAgICAgIGFsaWduLXNlbGY6IGVuZDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuICAgIGhlYWRlciA+IGEgaDIge1xuICAgICAgZ3JpZC1hcmVhOiBiYXNlbGluZTtcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgbWFyZ2luOiAwIDAgMXJlbSAxcmVtO1xuICAgIH1cbiAgICBoZWFkZXIgPiBwIHtcbiAgICAgIG1heC13aWR0aDogNTByZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICBtYXJnaW46IDJyZW0gYXV0byAwIGF1dG87XG4gICAgfVxuICA8L3N0eWxlPlxuPC9hcHA+XG4iXX0=
riot.tag2('page-actor-edit', '<section class="block"> <h2>{this.actor ? \'Modifier\' : \'Ajouter\'} un acteur culturel</h2> <form onsubmit="{this.submit}"> <fieldset> <label for="name">Nom</label> <input type="text" id="name" riot-value="{this.actor && this.actor.name}" required> <label for="description">Description</label> <textarea id="description" riot-value="{this.actor && this.actor.description}" required></textarea> <label for="address">Adresse</label> <input type="text" id="address" name="address" riot-value="{this.actor && this.address}" required> <label for="contactName">Nom du contact</label> <input type="text" id="contactName" name="contactName" riot-value="{this.actor && this.actor.contactName}" required> <label for="contactPhone">Téléphone du contact</label> <input type="tel" id="contactPhone" name="contactPhone" riot-value="{this.actor && this.actor.contactPhone}" required> <label for="contactEmail">Email du contact</label> <input id="contactEmail" name="contactEmail" riot-value="{this.actor && this.actor.contactEmail}" required type="{\'email\'}"> </fieldset> <fieldset> <h3>Domaines</h3> <label each="{domain in this.domains}"> <input type="checkbox" name="domains" riot-value="{domain}" checked="{this.actor && this.actor.domains.includes(domain)}"> {domain} </label> </fieldset> <fieldset> <h3>Actions proposées</h3> <section each="{action, index in this.actions}"> <h4>Action n°{index + 1}</h4> <button class="delete button-outline" type="button" onclick="{this.deleteAction}" data-id="{index}">Supprimer</button> <input type="text" name="action-name" placeholder="Titre" riot-value="{action.name}"> <textarea name="action-description" placeholder="Description">{action.description}</textarea> </section> <button onclick="{this.addAction}" class="button-outline" type="button">Ajouter une action</button> </fieldset> <button type="submit">Enregistrer</button> </form> </section>', 'page-actor-edit fieldset:nth-of-type(2)>label,[data-is="page-actor-edit"] fieldset:nth-of-type(2)>label{ display: inline-block; margin: 1rem; } page-actor-edit .delete,[data-is="page-actor-edit"] .delete{ float: right; } page-actor-edit h4,[data-is="page-actor-edit"] h4{ float: left; }', '', function(opts) {


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

    this.on('mount', async () => {
      this.actorId = this.opts.actorId
      if (this.actorId) {
        this.actor = await api(`/actors/${this.actorId}`)
        this.address = `${this.actor.address} ${this.actor.address2} ${this.actor.postalCode} ${this.actor.city}`
      }
      this.actions = this.actor ? this.actor.actions : [actionTemplate()]
      this.domains = await api('/domains')
      this.update()
    })

    this.submit = async (event) => {
      event.preventDefault()

      const form = event.target

      const apiAddress = 'https://api-adresse.data.gouv.fr/search/?q='
      const addresses = await request(`${apiAddress}${form.address.value}`)
      const address = addresses.features[0]

      const actions = Array.from(form['action-name']).length
        ? Array.from(form['action-name']).map((name, index) => {
          return {
            name: name.value,
            description: form['action-description'][index].value
          }
        })
        : [{
          name: form['action-name'].value,
          description: form['action-description'].value
        }]

      const domains = Array.from(form.domains).filter(d => d.checked).map(d => d.value)

      const loc = address.geometry
      loc.coordinates.reverse()

      const actor = await api(this.actorId ? `/actors/${this.actorId}` : '/actors', {
        method: this.actorId ? 'PUT' : 'POST',
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
      })

      page(`/actor/${actor._id}`)
    }
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXBoYWVsL3dlYi92YWxldHMvZWFjL3RhZ3MvcGFnZXMvYWN0b3ItZWRpdC50YWcuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0F3RE0sQUFDRixBQUlBLEFBSUEsQUFPRSxBQW9CSSxBQWtDTixBQU9BLEFBR0EsQUFDQSxBQUVBO0NBN0dJLEFBc0JKO0NBOUNFLEFBa0JBLEFBRUEsQUFLQSxBQUVBLEFBU0EsQUFXQSxBQW9DSTtDQW5DRjtDQUxOLEFBTU0sQUF3RU47OztDQXBFRTtDQUNFOztDQUdGLEFBdUVBO0NBakdNLEFBMkJKOztDQUdGO0NBM0RJLEFBNERGO0NBbEVGLEFBbUVFO0NBQ0U7Q0FDQTs7Q0FwQ0EsQUFNQSxBQWdDRjtDQTdDRSxBQThDRjtDQUNBO0NBQ0YsQUFpQkksQUE2QkEsQUFDRjtDQXZIRixBQXdDRSxBQWtDRjtDQUNFO0NBakNGLEFBbUNFLEFBMkRKO0NBekRJO0NBckVFLEFBc0VGO0NBdkVFLEFBd0VGO0NBRUE7Q0FDRTs7Q0FFSTtDQW5ERixBQW9ERTs7O0NBR0o7Q0F4REUsQUF5REE7Q0FDQTtDQUNGO0NBcEVFLEFBc0VKO0NBakRGLEFBbURFO0NBQ0EsQUE2QkE7Q0EzQkE7Q0FDRTtDQUNBO0NBQ0U7Q0FDQSxBQXNCTjtDQXJCSTtDQUNBO0NBQ0U7Q0FDQTtDQUNBLEFBZ0JSO0NBZlEsQUFxQkosQUFHQTtDQW5JRSxBQTRHRTtDQWhHRixBQUNBLEFBZ0dFO0NBcEdGLEFBQ0EsQUFvR0U7Q0EvRkYsQUFDQSxBQStGRTtDQTVHRixBQUNBLEFBNEdFO0NBNUZGLEFBNkZFLEFBWUo7Q0FuSUosQUFpQ00sQUFFRSxBQUlGLEFBT04sQUEwRVE7OztDQXpIVixBQTZITSxBQWlCTiIsImZpbGUiOiIvVXNlcnMvcmFwaGFlbC93ZWIvdmFsZXRzL2VhYy90YWdzL3BhZ2VzL2FjdG9yLWVkaXQudGFnLmh0bWwiLCJzb3VyY2VzQ29udGVudCI6WyI8cGFnZS1hY3Rvci1lZGl0PlxuICA8c2VjdGlvbiBjbGFzcz1ibG9jaz5cbiAgICA8aDI+eyB0aGlzLmFjdG9yID8gJ01vZGlmaWVyJyA6ICdBam91dGVyJyB9IHVuIGFjdGV1ciBjdWx0dXJlbDwvaDI+XG5cbiAgICA8Zm9ybSBvbnN1Ym1pdD17IHRoaXMuc3VibWl0IH0+XG5cbiAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgPGxhYmVsIGZvcj1uYW1lPk5vbTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPXRleHQgaWQ9bmFtZSB2YWx1ZT17IHRoaXMuYWN0b3IgJiYgdGhpcy5hY3Rvci5uYW1lIH0gcmVxdWlyZWQ+XG5cbiAgICAgICAgPGxhYmVsIGZvcj1kZXNjcmlwdGlvbj5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgIDx0ZXh0YXJlYSBpZD1kZXNjcmlwdGlvbiB2YWx1ZT17IHRoaXMuYWN0b3IgJiYgdGhpcy5hY3Rvci5kZXNjcmlwdGlvbiB9IHJlcXVpcmVkPjwvdGV4dGFyZWE+XG5cbiAgICAgICAgPGxhYmVsIGZvcj1hZGRyZXNzPkFkcmVzc2U8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT10ZXh0IGlkPWFkZHJlc3MgbmFtZT1hZGRyZXNzIHZhbHVlPXsgdGhpcy5hY3RvciAmJiB0aGlzLmFkZHJlc3MgfSByZXF1aXJlZD5cblxuICAgICAgICA8bGFiZWwgZm9yPWNvbnRhY3ROYW1lPk5vbSBkdSBjb250YWN0PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9dGV4dCBpZD1jb250YWN0TmFtZSBuYW1lPWNvbnRhY3ROYW1lIHZhbHVlPXsgdGhpcy5hY3RvciAmJiB0aGlzLmFjdG9yLmNvbnRhY3ROYW1lIH0gcmVxdWlyZWQ+XG5cbiAgICAgICAgPGxhYmVsIGZvcj1jb250YWN0UGhvbmU+VMOpbMOpcGhvbmUgZHUgY29udGFjdDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPXRlbCBpZD1jb250YWN0UGhvbmUgbmFtZT1jb250YWN0UGhvbmUgdmFsdWU9eyB0aGlzLmFjdG9yICYmIHRoaXMuYWN0b3IuY29udGFjdFBob25lIH0gcmVxdWlyZWQ+XG5cbiAgICAgICAgPGxhYmVsIGZvcj1jb250YWN0RW1haWw+RW1haWwgZHUgY29udGFjdDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPWVtYWlsIGlkPWNvbnRhY3RFbWFpbCBuYW1lPWNvbnRhY3RFbWFpbCB2YWx1ZT17IHRoaXMuYWN0b3IgJiYgdGhpcy5hY3Rvci5jb250YWN0RW1haWwgfSByZXF1aXJlZD5cbiAgICAgIDwvZmllbGRzZXQ+XG5cbiAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgPGgzPkRvbWFpbmVzPC9oMz5cbiAgICAgICAgPGxhYmVsIGVhY2g9eyBkb21haW4gaW4gdGhpcy5kb21haW5zIH0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9Y2hlY2tib3ggbmFtZT1kb21haW5zIHZhbHVlPXsgZG9tYWluIH0gY2hlY2tlZD17IHRoaXMuYWN0b3IgJiYgdGhpcy5hY3Rvci5kb21haW5zLmluY2x1ZGVzKGRvbWFpbikgfT4geyBkb21haW4gfVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9maWVsZHNldD5cblxuICAgICAgPGZpZWxkc2V0PlxuICAgICAgICA8aDM+QWN0aW9ucyBwcm9wb3PDqWVzPC9oMz5cbiAgICAgICAgPHNlY3Rpb24gZWFjaD17IGFjdGlvbiwgaW5kZXggaW4gdGhpcy5hY3Rpb25zIH0+XG4gICAgICAgICAgPGg0PkFjdGlvbiBuwrB7IGluZGV4ICsgMSB9PC9oND5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlIGJ1dHRvbi1vdXRsaW5lXCIgdHlwZT1idXR0b24gb25jbGljaz17IHRoaXMuZGVsZXRlQWN0aW9uIH0gZGF0YS1pZD17IGluZGV4IH0+U3VwcHJpbWVyPC9idXR0b24+XG4gICAgICAgICAgPGlucHV0IHR5cGU9dGV4dCBuYW1lPWFjdGlvbi1uYW1lIHBsYWNlaG9sZGVyPVRpdHJlIHZhbHVlPXsgYWN0aW9uLm5hbWUgfT5cbiAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1hY3Rpb24tZGVzY3JpcHRpb24gcGxhY2Vob2xkZXI9RGVzY3JpcHRpb24+eyBhY3Rpb24uZGVzY3JpcHRpb24gfTwvdGV4dGFyZWE+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPGJ1dHRvbiBvbmNsaWNrPXsgdGhpcy5hZGRBY3Rpb24gfSBjbGFzcz1cImJ1dHRvbi1vdXRsaW5lXCIgdHlwZT1idXR0b24+QWpvdXRlciB1bmUgYWN0aW9uPC9idXR0b24+XG4gICAgICA8L2ZpZWxkc2V0PlxuXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5FbnJlZ2lzdHJlcjwvYnV0dG9uPlxuXG4gICAgPC9mb3JtPlxuICA8L3NlY3Rpb24+XG5cbiAgPHNjcmlwdD5cbiAgICAvKiBnbG9iYWwgcmVxdWVzdCwgYXBpLCBwYWdlICovXG5cbiAgICBmdW5jdGlvbiBhY3Rpb25UZW1wbGF0ZSAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hZGRBY3Rpb24gPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuYWN0aW9ucy5wdXNoKGFjdGlvblRlbXBsYXRlKCkpXG4gICAgfVxuXG4gICAgdGhpcy5kZWxldGVBY3Rpb24gPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuYWN0aW9ucy5zcGxpY2UoZXZlbnQudGFyZ2V0LmRhdGFzZXQuaWQsIDEpXG4gICAgfVxuXG4gICAgdGhpcy5vbignbW91bnQnLCBhc3luYyAoKSA9PiB7XG4gICAgICB0aGlzLmFjdG9ySWQgPSB0aGlzLm9wdHMuYWN0b3JJZFxuICAgICAgaWYgKHRoaXMuYWN0b3JJZCkge1xuICAgICAgICB0aGlzLmFjdG9yID0gYXdhaXQgYXBpKGAvYWN0b3JzLyR7dGhpcy5hY3RvcklkfWApXG4gICAgICAgIHRoaXMuYWRkcmVzcyA9IGAke3RoaXMuYWN0b3IuYWRkcmVzc30gJHt0aGlzLmFjdG9yLmFkZHJlc3MyfSAke3RoaXMuYWN0b3IucG9zdGFsQ29kZX0gJHt0aGlzLmFjdG9yLmNpdHl9YFxuICAgICAgfVxuICAgICAgdGhpcy5hY3Rpb25zID0gdGhpcy5hY3RvciA/IHRoaXMuYWN0b3IuYWN0aW9ucyA6IFthY3Rpb25UZW1wbGF0ZSgpXVxuICAgICAgdGhpcy5kb21haW5zID0gYXdhaXQgYXBpKCcvZG9tYWlucycpXG4gICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgfSlcblxuICAgIHRoaXMuc3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgIGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXRcblxuICAgICAgY29uc3QgYXBpQWRkcmVzcyA9ICdodHRwczovL2FwaS1hZHJlc3NlLmRhdGEuZ291di5mci9zZWFyY2gvP3E9J1xuICAgICAgY29uc3QgYWRkcmVzc2VzID0gYXdhaXQgcmVxdWVzdChgJHthcGlBZGRyZXNzfSR7Zm9ybS5hZGRyZXNzLnZhbHVlfWApXG4gICAgICBjb25zdCBhZGRyZXNzID0gYWRkcmVzc2VzLmZlYXR1cmVzWzBdXG5cbiAgICAgIGNvbnN0IGFjdGlvbnMgPSBBcnJheS5mcm9tKGZvcm1bJ2FjdGlvbi1uYW1lJ10pLmxlbmd0aFxuICAgICAgICA/IEFycmF5LmZyb20oZm9ybVsnYWN0aW9uLW5hbWUnXSkubWFwKChuYW1lLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLnZhbHVlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGZvcm1bJ2FjdGlvbi1kZXNjcmlwdGlvbiddW2luZGV4XS52YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgOiBbe1xuICAgICAgICAgIG5hbWU6IGZvcm1bJ2FjdGlvbi1uYW1lJ10udmFsdWUsXG4gICAgICAgICAgZGVzY3JpcHRpb246IGZvcm1bJ2FjdGlvbi1kZXNjcmlwdGlvbiddLnZhbHVlXG4gICAgICAgIH1dXG5cbiAgICAgIGNvbnN0IGRvbWFpbnMgPSBBcnJheS5mcm9tKGZvcm0uZG9tYWlucykuZmlsdGVyKGQgPT4gZC5jaGVja2VkKS5tYXAoZCA9PiBkLnZhbHVlKVxuXG4gICAgICBjb25zdCBsb2MgPSBhZGRyZXNzLmdlb21ldHJ5XG4gICAgICBsb2MuY29vcmRpbmF0ZXMucmV2ZXJzZSgpXG5cbiAgICAgIGNvbnN0IGFjdG9yID0gYXdhaXQgYXBpKHRoaXMuYWN0b3JJZCA/IGAvYWN0b3JzLyR7dGhpcy5hY3RvcklkfWAgOiAnL2FjdG9ycycsIHtcbiAgICAgICAgbWV0aG9kOiB0aGlzLmFjdG9ySWQgPyAnUFVUJyA6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgYWRkcmVzczogYWRkcmVzcy5wcm9wZXJ0aWVzLm5hbWUsXG4gICAgICAgICAgY2l0eTogYWRkcmVzcy5wcm9wZXJ0aWVzLmNpdHksXG4gICAgICAgICAgcG9zdGFsQ29kZTogYWRkcmVzcy5wcm9wZXJ0aWVzLnBvc3Rjb2RlLFxuICAgICAgICAgIGxvYzogbG9jLFxuICAgICAgICAgIG5hbWU6IGZvcm0ubmFtZS52YWx1ZSxcbiAgICAgICAgICBjb250YWN0UGhvbmU6IGZvcm0uY29udGFjdFBob25lLnZhbHVlLFxuICAgICAgICAgIGNvbnRhY3ROYW1lOiBmb3JtLmNvbnRhY3ROYW1lLnZhbHVlLFxuICAgICAgICAgIGNvbnRhY3RFbWFpbDogZm9ybS5jb250YWN0RW1haWwudmFsdWUsXG4gICAgICAgICAgZGVzY3JpcHRpb246IGZvcm0uZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgICAgZG9tYWluczogZG9tYWlucyxcbiAgICAgICAgICBhY3Rpb25zOiBhY3Rpb25zXG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgICBwYWdlKGAvYWN0b3IvJHthY3Rvci5faWR9YClcbiAgICB9XG4gIDwvc2NyaXB0PlxuXG4gIDxzdHlsZSBzY29wZWQ+XG4gICAgZmllbGRzZXQ6bnRoLW9mLXR5cGUoMik+bGFiZWwge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luOiAxcmVtO1xuICAgIH1cbiAgICAuZGVsZXRlIHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG4gICAgaDQge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgfVxuICA8L3N0eWxlPlxuXG48L3BhZ2UtYWN0b3ItZWRpdD5cbiJdfQ==
riot.tag2('page-actor', '<article> <section class="block actor"> <h2>{this.actor.name}</h2> <nav class="tags"> <color-tag each="{tag in this.actor.domains}" label="{tag}"></color-tag> </nav> <p if="{this.actor.description}">{this.actor.description}</p> <p if="{!this.actor.description}"> Cet acteur culturel n\'a pas renseigné ses informations.<br> <a class="button" href="https://duckduckgo.com/?q={encodeURI(`${this.actor.name} ${this.actor.city}`)}" target="_blank">Faire une recherche</a> </p> </section> <section class="block actions"> <h2>Actions proposées</h2> <article each="{action in this.actor.actions}"> <h3>{action.name}</h3> <p>{action.description}</p> </article> <article if="{!this.actor.actions}">Les actions proposées par cet acteur sont sur demande.<br> Veillez à prendre contact avec cet Acteur Culturel.</article> </section> <aside> <section class="block" id="contact"> <h3>Contacter {this.contact}</h3> <ul> <li if="{this.phone}">Par téléphone : {this.phone}</li> <li if="{this.email}">Par email : {this.email}</li> </ul> <a if="{this.email}" class="button" target="_blank" href="mailto:{this.email}?subject=À propos de {this.actor.name}&cc=loup.wolff@beta.gouv.fr&body={encodeURIComponent(this.emailBody)}">Envoyer un email</a> <a if="{this.phone}" class="button" href="tel:{this.phone}">Appeler</a> <p if="{!this.phone && !this.email}"> Aucune information de contact n\'est disponible pour cet acteur culturel.<br> <a class="button" href="https://duckduckgo.com/?q={encodeURI(`${this.actor.name} ${this.actor.city}`)}" target="_blank">Faire une recherche</a> </p> </section> <section class="block"> <geo if="{this.actor.distance}">à {Math.ceil(this.actor.distance)}}&nbsp;km</geo> <address if="{this.latLng}"> <iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" riot-src="https://www.openstreetmap.org/export/embed.html?bbox={Number(this.latLng[1]) - 0.02}%2C{Number(this.latLng[0]) - 0.02}%2C{Number(this.latLng[1]) + 0.02}%2C{Number(this.latLng[0]) + 0.02}&amp;layer=hot&amp;marker={this.latLng[0]}%2C{this.latLng[1]}"></iframe><br> <small> <a href="https://www.openstreetmap.org/?mlat={this.latLng[0]}&mlon={this.latLng[1]}#map=15/{this.latLng[0]}/{this.latLng[1]}&layers=T" target="_blank"> {this.actor.address}<br> {this.actor.postalCode} {this.actor.city} </a> </small> </address> </section> </aside> </article>', 'page-actor,[data-is="page-actor"]{ display: grid; grid-template: \'actor aside\' \'actions aside\' / auto 51rem; } page-actor > article,[data-is="page-actor"] > article{ display: contents; } page-actor .actor,[data-is="page-actor"] .actor{ grid-area: actor; } page-actor .actions,[data-is="page-actor"] .actions{ grid-area: actions; } page-actor aside,[data-is="page-actor"] aside{ grid-area: aside; } page-actor .actions article:not(:last-of-type),[data-is="page-actor"] .actions article:not(:last-of-type){ padding-bottom: 1rem; margin-bottom: 1rem; border-bottom: 1px solid #ccc; } page-actor .actor > nav,[data-is="page-actor"] .actor > nav{ margin-bottom: 1rem; }', '', function(opts) {

    this.actor = {}

    this.on('mount', async () => {
      this.actor = await api(`/actors/${opts.actorId}`)
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXBoYWVsL3dlYi92YWxldHMvZWFjL3RhZ3MvcGFnZXMvYWN0b3IudGFnLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBV00sQUF5QkUsQUFNRSxBQXFDTixBQUdBLEFBR0EsQUFHQSxBQUdBLEFBTUEsQUFJQTtDQXJHSixBQUVJLEFBQ0UsQUFFRSxBQUdGLEFBUUEsQUE2QlEsQUFZVixBQW1CSSxBQU9KLEFBQ0UsQUFFRixBQVVFLEFBR0YsQUFJSjtDQS9FSSxBQW1DQSxBQXNCRSxBQVFGO0NBMUNRLEFBSVIsQUFJRixBQUtJLEFBVUosQUFJSTtDQW5FQSxBQW1CRSxBQUVFLEFBSUYsQUFjTSxBQWVSO0NBekNBLEFBU0ksQUFFRixBQVNBLEFBc0JGO0NBeERBLEFBc0NNLEFBbUJOLEFBK0JBO0NBMUZBLEFBTUUsQUF5QkUsQUE2Qko7Q0EvQkUsQUFnQ0YsQUFRRjtDQWhFSSxBQUtKLEFBR0ksQUFDQSxBQUdBLEFBSUYsQUFFRSxBQUdBLEFBSUUsQUFLSixBQWlCRixBQVVJLEFBV0EsQUFnQko7Q0E1RkYsQUFXRSxBQUdFLEFBSUEsQUFHRixBQWVFLEFBTUksQUFLQSxBQUNGLEFBQ0YsQUFHSixBQWNNLEFBS04sQUFNTSxBQUVKLEFBT0UsQUFHQSxBQUtBLEFBS0EsQUFFSjtDQTdETSxBQTJCRixBQU9BO0NBTkYiLCJmaWxlIjoiL1VzZXJzL3JhcGhhZWwvd2ViL3ZhbGV0cy9lYWMvdGFncy9wYWdlcy9hY3Rvci50YWcuaHRtbCIsInNvdXJjZXNDb250ZW50IjpbIjxwYWdlLWFjdG9yPlxuICA8YXJ0aWNsZT5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImJsb2NrIGFjdG9yXCI+XG4gICAgICA8aDI+eyB0aGlzLmFjdG9yLm5hbWUgfTwvaDI+XG4gICAgICA8bmF2IGNsYXNzPXRhZ3M+XG4gICAgICAgIDxjb2xvci10YWcgZWFjaD17IHRhZyBpbiB0aGlzLmFjdG9yLmRvbWFpbnMgfSBsYWJlbD17IHRhZyB9IC8+XG4gICAgICA8L25hdj5cbiAgICAgIDxwIGlmPXsgdGhpcy5hY3Rvci5kZXNjcmlwdGlvbiB9PnsgdGhpcy5hY3Rvci5kZXNjcmlwdGlvbiB9PC9wPlxuICAgICAgPHAgaWY9eyAhdGhpcy5hY3Rvci5kZXNjcmlwdGlvbiB9PlxuICAgICAgICBDZXQgYWN0ZXVyIGN1bHR1cmVsIG4nYSBwYXMgcmVuc2VpZ27DqSBzZXMgaW5mb3JtYXRpb25zLjxicj5cbiAgICAgICAgPGEgY2xhc3M9YnV0dG9uIGhyZWY9XCJodHRwczovL2R1Y2tkdWNrZ28uY29tLz9xPXsgZW5jb2RlVVJJKGAke3RoaXMuYWN0b3IubmFtZX0gJHt0aGlzLmFjdG9yLmNpdHl9YCkgfVwiIHRhcmdldD1fYmxhbms+RmFpcmUgdW5lIHJlY2hlcmNoZTwvYT5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImJsb2NrIGFjdGlvbnNcIj5cbiAgICAgIDxoMj5BY3Rpb25zIHByb3Bvc8OpZXM8L2gyPlxuICAgICAgPGFydGljbGUgZWFjaD17IGFjdGlvbiBpbiB0aGlzLmFjdG9yLmFjdGlvbnMgfT5cbiAgICAgICAgPGgzPnsgYWN0aW9uLm5hbWUgfTwvaDM+XG4gICAgICAgIDxwPnsgYWN0aW9uLmRlc2NyaXB0aW9uIH08L3A+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8YXJ0aWNsZSBpZj17ICF0aGlzLmFjdG9yLmFjdGlvbnMgfT5MZXMgYWN0aW9ucyBwcm9wb3PDqWVzIHBhciBjZXQgYWN0ZXVyIHNvbnQgc3VyIGRlbWFuZGUuPGJyPlxuICAgICAgICBWZWlsbGV6IMOgIHByZW5kcmUgY29udGFjdCBhdmVjIGNldCBBY3RldXIgQ3VsdHVyZWwuPC9hcnRpY2xlPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxhc2lkZT5cbiAgICAgIDxzZWN0aW9uIGNsYXNzPWJsb2NrIGlkPWNvbnRhY3Q+XG4gICAgICAgIDxoMz5Db250YWN0ZXIgeyB0aGlzLmNvbnRhY3QgfTwvaDM+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgaWY9eyB0aGlzLnBob25lIH0+UGFyIHTDqWzDqXBob25lIDogeyB0aGlzLnBob25lIH08L2xpPlxuICAgICAgICAgIDxsaSBpZj17IHRoaXMuZW1haWwgfT5QYXIgZW1haWwgOiB7IHRoaXMuZW1haWwgfTwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxhIGlmPXsgdGhpcy5lbWFpbCB9IGNsYXNzPWJ1dHRvbiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwibWFpbHRvOnsgdGhpcy5lbWFpbCB9P3N1YmplY3Q9w4AgcHJvcG9zIGRlIHsgdGhpcy5hY3Rvci5uYW1lIH0mY2M9bG91cC53b2xmZkBiZXRhLmdvdXYuZnImYm9keT17IGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmVtYWlsQm9keSkgfVwiPkVudm95ZXIgdW4gZW1haWw8L2E+XG4gICAgICAgIDxhIGlmPXsgdGhpcy5waG9uZSB9IGNsYXNzPWJ1dHRvbiBocmVmPVwidGVsOnsgdGhpcy5waG9uZSB9XCI+QXBwZWxlcjwvYT5cbiAgICAgICAgPHAgaWY9eyAhdGhpcy5waG9uZSAmJiAhdGhpcy5lbWFpbCB9PlxuICAgICAgICAgIEF1Y3VuZSBpbmZvcm1hdGlvbiBkZSBjb250YWN0IG4nZXN0IGRpc3BvbmlibGUgcG91ciBjZXQgYWN0ZXVyIGN1bHR1cmVsLjxicj5cbiAgICAgICAgICA8YSBjbGFzcz1idXR0b24gaHJlZj1cImh0dHBzOi8vZHVja2R1Y2tnby5jb20vP3E9eyBlbmNvZGVVUkkoYCR7dGhpcy5hY3Rvci5uYW1lfSAke3RoaXMuYWN0b3IuY2l0eX1gKSB9XCIgdGFyZ2V0PV9ibGFuaz5GYWlyZSB1bmUgcmVjaGVyY2hlPC9hPlxuICAgICAgICA8L3A+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzPWJsb2NrPlxuICAgICAgICA8Z2VvIGlmPXsgdGhpcy5hY3Rvci5kaXN0YW5jZSB9PsOgIHsgTWF0aC5jZWlsKHRoaXMuYWN0b3IuZGlzdGFuY2UpIH19Jm5ic3A7a208L2dlbz5cbiAgICAgICAgPGFkZHJlc3MgaWY9eyB0aGlzLmxhdExuZyB9PlxuICAgICAgICAgIDxpZnJhbWUgd2lkdGg9NDI1IGhlaWdodD0zNTAgZnJhbWVib3JkZXI9MCBzY3JvbGxpbmc9bm8gbWFyZ2luaGVpZ2h0PTAgbWFyZ2lud2lkdGg9MCBzcmM9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9leHBvcnQvZW1iZWQuaHRtbD9iYm94PXsgTnVtYmVyKHRoaXMubGF0TG5nWzFdKSAtIDAuMDIgfSUyQ3sgTnVtYmVyKHRoaXMubGF0TG5nWzBdKSAtIDAuMDIgfSUyQ3sgTnVtYmVyKHRoaXMubGF0TG5nWzFdKSArIDAuMDIgfSUyQ3sgTnVtYmVyKHRoaXMubGF0TG5nWzBdKSArIDAuMDIgfSZhbXA7bGF5ZXI9aG90JmFtcDttYXJrZXI9eyB0aGlzLmxhdExuZ1swXSB9JTJDeyB0aGlzLmxhdExuZ1sxXSB9XCI+PC9pZnJhbWU+PGJyLz5cbiAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvP21sYXQ9eyB0aGlzLmxhdExuZ1swXSB9Jm1sb249eyB0aGlzLmxhdExuZ1sxXSB9I21hcD0xNS97IHRoaXMubGF0TG5nWzBdIH0veyB0aGlzLmxhdExuZ1sxXSB9JmxheWVycz1UXCIgdGFyZ2V0PV9ibGFuaz5cbiAgICAgICAgICAgICAgeyB0aGlzLmFjdG9yLmFkZHJlc3MgfTxicj5cbiAgICAgICAgICAgICAgeyB0aGlzLmFjdG9yLnBvc3RhbENvZGUgfSB7IHRoaXMuYWN0b3IuY2l0eSB9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgPC9hZGRyZXNzPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvYXNpZGU+XG5cbiAgPC9hcnRpY2xlPlxuXG4gIDxzY3JpcHQ+XG4gICAgLyogZ2xvYmFsIGFwaSwgb3B0cywgbG9jYXRpb24gKi9cbiAgICB0aGlzLmFjdG9yID0ge31cblxuICAgIHRoaXMub24oJ21vdW50JywgYXN5bmMgKCkgPT4ge1xuICAgICAgdGhpcy5hY3RvciA9IGF3YWl0IGFwaShgL2FjdG9ycy8ke29wdHMuYWN0b3JJZH1gKVxuICAgICAgdGhpcy5waG9uZSA9IHRoaXMuYWN0b3IuY29udGFjdFBob25lIHx8IHRoaXMuYWN0b3Iub3duZXJQaG9uZVxuICAgICAgdGhpcy5lbWFpbCA9IHRoaXMuYWN0b3IuY29udGFjdEVtYWlsIHx8IHRoaXMuYWN0b3Iub3duZXJFbWFpbFxuICAgICAgdGhpcy5sYXRMbmcgPSB0aGlzLmFjdG9yLmxvYy5jb29yZGluYXRlc1swXSAmJiB0aGlzLmFjdG9yLmxvYy5jb29yZGluYXRlc1xuICAgICAgdGhpcy5jb250YWN0ID0gKHRoaXMuYWN0b3IuY29udGFjdE5hbWUgfHwgdGhpcy5hY3Rvci5vd25lck5hbWUgfHwgJycpLnJlcGxhY2UoJywnLCAnJylcbiAgICAgIHRoaXMuZW1haWxCb2R5ID0gYEJvbmpvdXIgJHt0aGlzLmNvbnRhY3R9LFxcblxcbmAgK1xuICAgICAgICBgSmUgdm91cyBjb250YWN0ZSBzdWl0ZSDDoCBtYSBjb25zdWx0YXRpb24gZGUgbGEgZmljaGUgJHtsb2NhdGlvbi5ocmVmfS5cXG5cXG5gICtcbiAgICAgICAgYFF1ZXN0aW9ucyBvdSByZW1hcnF1ZXMgOlxcblxcblxcblxcbmBcbiAgICAgIHRoaXMudXBkYXRlKClcbiAgICB9KVxuICA8L3NjcmlwdD5cblxuICA8c3R5bGUgc2NvcGVkPlxuICAgIDpzY29wZSB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZTpcbiAgICAgICAgJ2FjdG9yIGFzaWRlJ1xuICAgICAgICAnYWN0aW9ucyBhc2lkZSdcbiAgICAgICAgLyBhdXRvIDUxcmVtO1xuICAgIH1cbiAgICA6c2NvcGUgPiBhcnRpY2xlIHtcbiAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xuICAgIH1cbiAgICAuYWN0b3Ige1xuICAgICAgZ3JpZC1hcmVhOiBhY3RvcjtcbiAgICB9XG4gICAgLmFjdGlvbnMge1xuICAgICAgZ3JpZC1hcmVhOiBhY3Rpb25zO1xuICAgIH1cbiAgICBhc2lkZSB7XG4gICAgICBncmlkLWFyZWE6IGFzaWRlO1xuICAgIH1cblxuICAgIC5hY3Rpb25zIGFydGljbGU6bm90KDpsYXN0LW9mLXR5cGUpIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgIH1cblxuICAgIC5hY3RvciA+IG5hdiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cbiAgPC9zdHlsZT5cbjwvcGFnZS1hY3Rvcj5cbiJdfQ==
riot.tag2('page-search', '<virtual if="{this.q}"> <section class="block" id="filters"> <search-filters filters="{this.filters}" q="{this.q}" school-id="{this.schoolId}" actors="{this.actors}"></search-filters> </section> <section id="tags"> <color-tag each="{domain in this.domains}" label="{domain}"></color-tag> </section> <section if="{this.viewType == \'list\'}" id="results"> <button onclick="{this.setViewType}" value="map">Voir les résultats sur une carte</button> <h4>Résultats pour «&nbsp;{this.q}&nbsp;»</h4> <p if="{!this.actors.length}">Aucun résultat ne correspond à cette recherche à proximité de votre établissement.</p> <actor-card class="block" each="{actor in this.actors}" actor="{actor}" school-id="{this.schoolId}"></actor-card> </section> <section if="{this.viewType == \'map\'}" id="map"> <button onclick="{this.setViewType}" value="list">Voir la liste des résultats</button> <actors-map class="block" actors="{this.actors}" school-id="{this.schoolId}"></actors-map> </section> </virtual>', 'page-search,[data-is="page-search"]{ display: grid; grid-template: \'search search\' \'tags tags\' \'filters results\' / minmax(auto, 35%) 1fr; grid-gap: 2rem; } page-search #search,[data-is="page-search"] #search{ grid-area: search; } page-search #tags,[data-is="page-search"] #tags{ grid-area: tags; height: 4rem; } page-search #filters,[data-is="page-search"] #filters{ grid-area: filters; height: auto; } page-search #results,[data-is="page-search"] #results{ grid-area: results; } page-search #map,[data-is="page-search"] #map{ grid-area: results; } page-search h4,[data-is="page-search"] h4{ margin-top: 1rem; } page-search search-filters,[data-is="page-search"] search-filters{ position: sticky; top: 0; } page-search input[type=search],[data-is="page-search"] input[type=search]{ border-color: #999; box-shadow: 0 0 .1em #ccc; font-size: 1.2em; padding: 1em .7em; transition: box-shadow .3s; } page-search input[type=search]:focus,[data-is="page-search"] input[type=search]:focus{ box-shadow: .05em .05em .2em #bbb; } page-search input[type=submit],[data-is="page-search"] input[type=submit]{ display: block; margin: 0 auto; } page-search actor-card,[data-is="page-search"] actor-card{ padding-bottom: 1rem; margin-bottom: 1rem; border-bottom: 1px solid #eee; } page-search #tags .tag,[data-is="page-search"] #tags .tag{ background-color: #fff; box-shadow: .1rem .1rem .5rem #eee; border-radius: .8rem; border: 1px solid #e6e6e6; margin-right: 2rem; }', '', function(opts) {

    this.q = this.opts.q
    this.schoolId = this.opts.schoolId
    try {
      this.filters = JSON.parse(decodeURI(opts.filters))
    } catch (e) {
      this.filters = {}
    }
    this.actors = []
    this.viewType = 'list'
    this.domains = this.filters.domains || []

    ;(async () => {
      let params = this.filters.domains ? `?domains=${this.domains}` : ''
      if (this.schoolId) {
        const school = await api(`/schools/${this.schoolId}`)
        if (school.loc.coordinates) {
          params += (params ? '&' : '?')
          params += `from=${school.loc.coordinates[1]},${school.loc.coordinates[0]}`
        }
      }
      this.actors = await api(`/actors/search/${normalizeString(this.q)}${params}`)
      this.update()
    })()

    this.setViewType = (event) => {
      this.viewType = event.target.value
    }
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXBoYWVsL3dlYi92YWxldHMvZWFjL3RhZ3MvcGFnZXMvc2VhcmNoLnRhZy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQStCSSxBQVlJLEFBQ0YsQUFPRixBQVlBLEFBR0EsQUFHRSxBQUNGLEFBSUEsQUFHQSxBQUdBLEFBQ0EsQUFFQSxBQUtBLEFBUUEsQUFHQSxBQUtBLEFBTUEsQUFRQTtDQXJIRixBQVdJLEFBYUY7Q0F0QkUsQUFXQSxBQUtBLEFBSUosQUFHRSxBQTBCRjtDQXpCRTtDQXZCQSxBQUVBLEFBRUEsQUFPQSxBQUtBLEFBUUUsQUFnREEsQUFHQTtDQWxERixBQW1DQTtDQTlEQSxBQTRCRSxBQThCRSxBQVdKLEFBQ0UsQUFHRixBQVVBOztDQXJEQSxBQXlDRSxBQWNBLEFBbUJGO0NBaEdBLEFBT0EsQUFnQkEsQUFxQkYsQUErQ0UsQUFrQkY7Q0FyRkUsQUEyQkksQUFpQkosQUFjRSxBQU1BLEFBVUEsQUFNQTtDQTlFRjtDQTdCRSxBQThCQTtDQUNBLEFBa0JBLEFBTUEsQUErQ0EsQUFPQTtDQTdFRSxBQStDRixBQVNBO0NBdkRFLEFBZU4sQUFvQ0ksQUFHQSxBQVFBLEFBS0EsQUFNQSxBQUVBO0NBMUVJO0NBQ0E7OztDQTFDVixBQWFNLEFBV0YsQUFxQkUsQUFhRSxBQU9GLEFBaUJBLEFBbUNBLEFBR047Q0ExRU0sQUFXQTtDQVZGO0NBRUEsQUF5Q0EsQUFHRSxBQUlGO0NBdEZFLEFBT0EsQUFHSixBQTZCSSxBQVNFLEFBUUosQUFDRSxBQW1DQSxBQVNGIiwiZmlsZSI6Ii9Vc2Vycy9yYXBoYWVsL3dlYi92YWxldHMvZWFjL3RhZ3MvcGFnZXMvc2VhcmNoLnRhZy5odG1sIiwic291cmNlc0NvbnRlbnQiOlsiPHBhZ2Utc2VhcmNoPlxuICA8dmlydHVhbCBpZj17IHRoaXMucSB9PlxuICAgIDxzZWN0aW9uIGNsYXNzPWJsb2NrIGlkPWZpbHRlcnM+XG4gICAgICA8c2VhcmNoLWZpbHRlcnMgZmlsdGVycz17IHRoaXMuZmlsdGVycyB9IHE9eyB0aGlzLnEgfSBzY2hvb2wtaWQ9eyB0aGlzLnNjaG9vbElkIH0gYWN0b3JzPXsgdGhpcy5hY3RvcnMgfSAvPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGlkPXRhZ3M+XG4gICAgICA8Y29sb3ItdGFnIGVhY2g9eyBkb21haW4gaW4gdGhpcy5kb21haW5zIH0gbGFiZWw9eyBkb21haW4gfSAvPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGlmPXsgdGhpcy52aWV3VHlwZSA9PSAnbGlzdCcgfSBpZD1yZXN1bHRzPlxuICAgICAgPGJ1dHRvbiBvbmNsaWNrPXsgdGhpcy5zZXRWaWV3VHlwZSB9IHZhbHVlPW1hcD5Wb2lyIGxlcyByw6lzdWx0YXRzIHN1ciB1bmUgY2FydGU8L2J1dHRvbj5cbiAgICAgIDxoND5Sw6lzdWx0YXRzIHBvdXIgwqsmbmJzcDt7IHRoaXMucSB9Jm5ic3A7wrs8L2g0PlxuICAgICAgPHAgaWY9eyAhdGhpcy5hY3RvcnMubGVuZ3RoIH0+QXVjdW4gcsOpc3VsdGF0IG5lIGNvcnJlc3BvbmQgw6AgY2V0dGUgcmVjaGVyY2hlIMOgIHByb3hpbWl0w6kgZGUgdm90cmUgw6l0YWJsaXNzZW1lbnQuPC9wPlxuICAgICAgPGFjdG9yLWNhcmQgY2xhc3M9YmxvY2sgZWFjaD17IGFjdG9yIGluIHRoaXMuYWN0b3JzIH0gYWN0b3I9eyBhY3RvciB9IHNjaG9vbC1pZD17IHRoaXMuc2Nob29sSWQgfSAvPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGlmPXsgdGhpcy52aWV3VHlwZSA9PSAnbWFwJyB9IGlkPW1hcD5cbiAgICAgIDxidXR0b24gb25jbGljaz17IHRoaXMuc2V0Vmlld1R5cGUgfSB2YWx1ZT1saXN0PlZvaXIgbGEgbGlzdGUgZGVzIHLDqXN1bHRhdHM8L2J1dHRvbj5cbiAgICAgIDxhY3RvcnMtbWFwIGNsYXNzPWJsb2NrIGFjdG9ycz17IHRoaXMuYWN0b3JzIH0gc2Nob29sLWlkPXsgdGhpcy5zY2hvb2xJZCB9IC8+XG4gICAgPC9zZWN0aW9uPlxuICA8L3ZpcnR1YWw+XG5cbiAgPHNjcmlwdD5cbiAgICAvKiBnbG9iYWwgYXBpLCBlbmNvZGVVUkksIG9wdHMsIG5vcm1hbGl6ZVN0cmluZyAqL1xuICAgIHRoaXMucSA9IHRoaXMub3B0cy5xXG4gICAgdGhpcy5zY2hvb2xJZCA9IHRoaXMub3B0cy5zY2hvb2xJZFxuICAgIHRyeSB7XG4gICAgICB0aGlzLmZpbHRlcnMgPSBKU09OLnBhcnNlKGRlY29kZVVSSShvcHRzLmZpbHRlcnMpKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuZmlsdGVycyA9IHt9XG4gICAgfVxuICAgIHRoaXMuYWN0b3JzID0gW11cbiAgICB0aGlzLnZpZXdUeXBlID0gJ2xpc3QnXG4gICAgdGhpcy5kb21haW5zID0gdGhpcy5maWx0ZXJzLmRvbWFpbnMgfHwgW11cblxuICAgIDsoYXN5bmMgKCkgPT4ge1xuICAgICAgbGV0IHBhcmFtcyA9IHRoaXMuZmlsdGVycy5kb21haW5zID8gYD9kb21haW5zPSR7dGhpcy5kb21haW5zfWAgOiAnJ1xuICAgICAgaWYgKHRoaXMuc2Nob29sSWQpIHtcbiAgICAgICAgY29uc3Qgc2Nob29sID0gYXdhaXQgYXBpKGAvc2Nob29scy8ke3RoaXMuc2Nob29sSWR9YClcbiAgICAgICAgaWYgKHNjaG9vbC5sb2MuY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICBwYXJhbXMgKz0gKHBhcmFtcyA/ICcmJyA6ICc/JylcbiAgICAgICAgICBwYXJhbXMgKz0gYGZyb209JHtzY2hvb2wubG9jLmNvb3JkaW5hdGVzWzFdfSwke3NjaG9vbC5sb2MuY29vcmRpbmF0ZXNbMF19YFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmFjdG9ycyA9IGF3YWl0IGFwaShgL2FjdG9ycy9zZWFyY2gvJHtub3JtYWxpemVTdHJpbmcodGhpcy5xKX0ke3BhcmFtc31gKVxuICAgICAgdGhpcy51cGRhdGUoKVxuICAgIH0pKClcblxuICAgIHRoaXMuc2V0Vmlld1R5cGUgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMudmlld1R5cGUgPSBldmVudC50YXJnZXQudmFsdWVcbiAgICB9XG4gIDwvc2NyaXB0PlxuXG4gIDxzdHlsZSBzY29wZWQ+XG4gIDpzY29wZSB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZTpcbiAgICAgICAgJ3NlYXJjaCBzZWFyY2gnXG4gICAgICAgICd0YWdzIHRhZ3MnXG4gICAgICAgICdmaWx0ZXJzIHJlc3VsdHMnXG4gICAgICAgIC8gbWlubWF4KGF1dG8sIDM1JSkgMWZyO1xuICAgICAgZ3JpZC1nYXA6IDJyZW07XG4gICAgfVxuICAgICNzZWFyY2gge1xuICAgICAgZ3JpZC1hcmVhOiBzZWFyY2g7XG4gICAgfVxuICAgICN0YWdzIHtcbiAgICAgIGdyaWQtYXJlYTogdGFncztcbiAgICAgIGhlaWdodDogNHJlbTtcbiAgICB9XG4gICAgI2ZpbHRlcnMge1xuICAgICAgZ3JpZC1hcmVhOiBmaWx0ZXJzO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgICAjcmVzdWx0cyB7XG4gICAgICBncmlkLWFyZWE6IHJlc3VsdHM7XG4gICAgfVxuICAgICNtYXAge1xuICAgICAgZ3JpZC1hcmVhOiByZXN1bHRzO1xuICAgIH1cbiAgICBoNCB7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIH1cblxuICAgIHNlYXJjaC1maWx0ZXJzIHtcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICB0b3A6IDA7XG4gICAgfVxuXG4gICAgaW5wdXRbdHlwZT1zZWFyY2hdIHtcbiAgICAgIGJvcmRlci1jb2xvcjogIzk5OTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAuMWVtICNjY2M7XG4gICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgcGFkZGluZzogMWVtIC43ZW07XG4gICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4zcztcbiAgICB9XG4gICAgaW5wdXRbdHlwZT1zZWFyY2hdOmZvY3VzIHtcbiAgICAgIGJveC1zaGFkb3c6IC4wNWVtIC4wNWVtIC4yZW0gI2JiYjtcbiAgICB9XG5cbiAgICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG5cbiAgICBhY3Rvci1jYXJkIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgIH1cblxuICAgICN0YWdzIC50YWcge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGJveC1zaGFkb3c6IC4xcmVtIC4xcmVtIC41cmVtICNlZWU7XG4gICAgICBib3JkZXItcmFkaXVzOiAuOHJlbTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gICAgfVxuICA8L3N0eWxlPlxuPC9wYWdlLXNlYXJjaD5cbiJdfQ==
riot.tag2('actor-card', '<h3>{this.actor.name} <small>(dept {this.actor.department})</small></h3> <p>{this.actor.description.length < this.maxlength ? this.actor.description : this.actor.description.substr(0, this.maxlength) + \'…\'}</p> <footer> <geo if="{this.actor.distance}">{Math.ceil(this.actor.distance)}&nbsp;km</geo> <nav class="tags"> <color-tag class="tag" each="{domain in this.actor.domains}" label="{domain}"> <a>{domain}</a> </color-tag> </nav> </footer> <a href="/actor/{this.actor._id}?school={this.schoolId}"></a>', 'actor-card,[data-is="actor-card"]{ position: relative; display: block; } actor-card > a,[data-is="actor-card"] > a{ display: block; position: absolute; top: 0; left: 0; bottom: 0; right: 0; } actor-card:hover,[data-is="actor-card"]:hover{ color: #111; transition: color .3s; } actor-card h3,[data-is="actor-card"] h3{ font-size: 1.4em; margin: 1rem 0 .5rem 0; text-transform: capitalize; } actor-card h3 small,[data-is="actor-card"] h3 small{ text-transform: none; font-style: italic; font-size: .8em; } actor-card p,[data-is="actor-card"] p{ margin: 0; } actor-card footer,[data-is="actor-card"] footer{ display: grid; grid-template-columns: 1fr auto; padding-top: 1rem; margin-top: 1rem; border-top: 1px solid #ccc; align-items: center; } actor-card .tags,[data-is="actor-card"] .tags{ text-align: right; } actor-card geo,[data-is="actor-card"] geo{ font-size: 1.3rem; background: url(/images/gps.icon.png) no-repeat; background-size: 1.8rem; padding-left: 2rem; }', '', function(opts) {

    this.schoolId = opts.schoolId
    this.actor = opts.actor
    this.maxlength = this.opts.maxlength || 150
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXBoYWVsL3dlYi92YWxldHMvZWFjL3RhZ3MvcGFydGlhbHMvYWN0b3ItY2FyZC50YWcuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FNSSxBQUlBLEFBY0UsQUFFRixBQU9FLEFBQ0YsQUFJQSxBQUVBLEFBQ0UsQUFHRixBQUlFLEFBQ0YsQUFFQSxBQUVBLEFBU0EsQUFFQSxBQUVBLEFBRUEsQUFDRSxBQUlGO0NBckVGLEFBT0EsQUFFQSxBQUVBLEFBRUUsQUFHRixBQUVBLEFBQ0UsQUFJQSxBQUVFLEFBTUYsQUFZRSxBQVFGLEFBQ0UsQUFDQSxBQUdBLEFBQ0EsQUFJQTtDQWpFTixBQUNFLEFBSUUsQUFFRSxBQUVBLEFBT0YsQUFFQSxBQU9FLEFBR0EsQUFFQSxBQUVBLEFBSUEsQUFDQSxBQU1BLEFBR0EsQUFZQSxBQUNBLEFBWUEsQUFJTjtDQXpFRSxBQU1NLEFBV0osQUFZRSxBQVdBLEFBR0YsQUFPRSxBQWtCQSxBQUVBLEFBRUoiLCJmaWxlIjoiL1VzZXJzL3JhcGhhZWwvd2ViL3ZhbGV0cy9lYWMvdGFncy9wYXJ0aWFscy9hY3Rvci1jYXJkLnRhZy5odG1sIiwic291cmNlc0NvbnRlbnQiOlsiPGFjdG9yLWNhcmQ+XG4gIDxoMz57IHRoaXMuYWN0b3IubmFtZSB9IDxzbWFsbD4oZGVwdCB7IHRoaXMuYWN0b3IuZGVwYXJ0bWVudCB9KTwvc21hbGw+PC9oMz5cbiAgPHA+eyB0aGlzLmFjdG9yLmRlc2NyaXB0aW9uLmxlbmd0aCA8IHRoaXMubWF4bGVuZ3RoID8gdGhpcy5hY3Rvci5kZXNjcmlwdGlvbiA6IHRoaXMuYWN0b3IuZGVzY3JpcHRpb24uc3Vic3RyKDAsIHRoaXMubWF4bGVuZ3RoKSArICfigKYnIH08L3A+XG5cbiAgPGZvb3Rlcj5cbiAgICA8Z2VvIGlmPXsgdGhpcy5hY3Rvci5kaXN0YW5jZSB9PnsgTWF0aC5jZWlsKHRoaXMuYWN0b3IuZGlzdGFuY2UpIH0mbmJzcDtrbTwvZ2VvPlxuICAgIDxuYXYgY2xhc3M9dGFncz5cbiAgICAgIDxjb2xvci10YWcgY2xhc3M9dGFnIGVhY2g9eyBkb21haW4gaW4gdGhpcy5hY3Rvci5kb21haW5zIH0gbGFiZWw9XCJ7IGRvbWFpbiB9XCI+XG4gICAgICAgIDxhPnsgZG9tYWluIH08L2E+XG4gICAgICA8L2NvbG9yLXRhZz5cbiAgICA8L25hdj5cbiAgPC9mb290ZXI+XG5cbiAgPGEgaHJlZj0vYWN0b3IveyB0aGlzLmFjdG9yLl9pZCB9P3NjaG9vbD17IHRoaXMuc2Nob29sSWQgfT48L2E+XG5cbiAgPHNjcmlwdD5cbiAgICAvKiBnbG9iYWwgb3B0cyAqL1xuICAgIHRoaXMuc2Nob29sSWQgPSBvcHRzLnNjaG9vbElkXG4gICAgdGhpcy5hY3RvciA9IG9wdHMuYWN0b3JcbiAgICB0aGlzLm1heGxlbmd0aCA9IHRoaXMub3B0cy5tYXhsZW5ndGggfHwgMTUwXG4gIDwvc2NyaXB0PlxuXG4gIDxzdHlsZSBzY29wZWQ+XG4gICAgOnNjb3BlIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICA6c2NvcGUgPiBhIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgICA6c2NvcGU6aG92ZXIge1xuICAgICAgY29sb3I6ICMxMTE7XG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAuM3M7XG4gICAgfVxuXG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICAgIG1hcmdpbjogMXJlbSAwIC41cmVtIDA7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG4gICAgaDMgc21hbGwge1xuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICBmb250LXNpemU6IC44ZW07XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgZm9vdGVyIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xuICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC50YWdzIHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cblxuICAgIGdlbyB7XG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgIGJhY2tncm91bmQ6IHVybCgvaW1hZ2VzL2dwcy5pY29uLnBuZykgbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAxLjhyZW07XG4gICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gICAgfVxuICA8L3N0eWxlPlxuPC9hY3Rvci1jYXJkPlxuIl19
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXBoYWVsL3dlYi92YWxldHMvZWFjL3RhZ3MvcGFydGlhbHMvYWN0b3JzLW1hcC50YWcuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FnQk0sQUFrQ0EsQUFZRixBQUdFLEFBQ0YsQUFHQSxBQUdFLEFBT0Y7Q0E1RUYsQUFFRTtDQURBLEFBRUE7Q0FFQSxBQWtFRTtDQWpFQSxBQWdESjtDQS9DSTtDQUNBO0NBQ0EsQUFnQ0EsQUFnQkEsQUFrQkE7Q0FqRUU7Q0FDQSxBQTZDRixBQVNBLEFBS0E7Q0ExREU7O0NBR0Y7Q0FDQTtDQUVBO0NBQ0U7Q0FDQTtDQUNFO0NBdkJSLEFBd0JRO0NBQ0Y7Q0FDRjtDQUVBO0NBQ0UsQUE2Q0YsQUFDQTtDQTdDRSxBQWlDSjtDQWhDTTtDQWhDVixBQWlDVSxBQWdEVjtDQS9DVSxBQWlDTjtDQWhDUTtDQUNFO0NBQ0E7Q0FDQTtDQUNGLEFBZ0JWLEFBeUJBO0NBeENRO0NBQ0E7Q0FDRixBQUtBLEFBT0o7O0NBVEk7Q0FDRSxBQXdCTjs7Q0F0Qk0sQUFVTixBQW1CRTtDQTVCSSxBQUlGLEFBUUY7O0NBVEEsQUFtQkEiLCJmaWxlIjoiL1VzZXJzL3JhcGhhZWwvd2ViL3ZhbGV0cy9lYWMvdGFncy9wYXJ0aWFscy9hY3RvcnMtbWFwLnRhZy5odG1sIiwic291cmNlc0NvbnRlbnQiOlsiPGFjdG9ycy1tYXA+XG4gIDxkaXYgcmVmPW1hcD48L2Rpdj5cblxuICA8c2NyaXB0PlxuICAgIC8qIGdsb2JhbCBhcGksIG9wdHMsIEwgKi9cbiAgICB0aGlzLnNjaG9vbElkID0gb3B0cy5zY2hvb2xJZFxuICAgIHRoaXMuYWN0b3JzID0gb3B0cy5hY3RvcnNcblxuICAgIHRoaXMub24oJ21vdW50JywgYXN5bmMgKCkgPT4ge1xuICAgICAgbGV0IHNjaG9vbCA9IG51bGxcbiAgICAgIGxldCBsbmdMYXQgPSBbNDYuNDk1LCAyLjIwN10gLy8gY2VudGVyIG9mIEZyYW5jZVxuICAgICAgbGV0IHpvb20gPSA2IC8vIEZyYW5jZSBvdmVydmlld1xuICAgICAgaWYgKHRoaXMuc2Nob29sSWQpIHtcbiAgICAgICAgc2Nob29sID0gYXdhaXQgYXBpKGAvc2Nob29scy8ke3RoaXMuc2Nob29sSWR9YClcbiAgICAgICAgbG5nTGF0ID0gc2Nob29sLmxvYy5jb29yZGluYXRlcy5yZXZlcnNlKClcbiAgICAgICAgem9vbSA9IDlcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWFwID0gTC5tYXAodGhpcy5yZWZzLm1hcCkuc2V0VmlldyhsbmdMYXQsIHpvb20pXG4gICAgICBjb25zdCBhY3Rvck1hcmtlciA9IEwuaWNvbih7aWNvblVybDogYC9pbWFnZXMvbWFya2VyLnN2Z2AsIGljb25TaXplOiBbNDAsIDQ1XX0pXG5cbiAgICAgIEwudGlsZUxheWVyKCdodHRwczovL2FwaS50aWxlcy5tYXBib3guY29tL3Y0L3tpZH0ve3p9L3t4fS97eX0ucG5nP2FjY2Vzc190b2tlbj1way5leUoxSWpvaWJXRndZbTk0SWl3aVlTSTZJbU5wZWpZNE5YVnljVEEyZW1ZeWNYQm5kSFJxY21aM04zZ2lmUS5ySmNGSUcyMTRBcmlJU0xiQjZCNWF3Jywge1xuICAgICAgICBtYXhab29tOiAxOCxcbiAgICAgICAgYXR0cmlidXRpb246ICdNYXAgZGF0YSAmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL1wiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycywgJyArXG4gICAgICAgICAgJzxhIGhyZWY9XCJodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMi4wL1wiPkNDLUJZLVNBPC9hPiwgJyArXG4gICAgICAgICAgJ0ltYWdlcnkgwqkgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm1hcGJveC5jb20vXCI+TWFwYm94PC9hPicsXG4gICAgICAgIGlkOiAnbWFwYm94LnN0cmVldHMnXG4gICAgICB9KS5hZGRUbyhtYXApXG5cbiAgICAgIGNvbnN0IG1hcmtlcnMgPSB0aGlzLmFjdG9yc1xuICAgICAgICAuZmlsdGVyKGEgPT4gYS5sb2MgJiYgYS5sb2MuY29vcmRpbmF0ZXNbMF0pXG4gICAgICAgIC5tYXAoYSA9PiB7XG4gICAgICAgICAgY29uc3QgbWFya2VyID0gTC5tYXJrZXIoYS5sb2MuY29vcmRpbmF0ZXMsIHtpY29uOiBhY3Rvck1hcmtlcn0pXG4gICAgICAgICAgbWFya2VyLmFjdG9yID0gYVxuICAgICAgICAgIG1hcmtlci5iaW5kUG9wdXAoYFxuICAgICAgICAgICAgPGEgaHJlZj0vYWN0b3IvJHthLl9pZH0/c2Nob29sPSR7dGhpcy5zY2hvb2xJZH0gdGl0bGU9XCJWb2lyIGxlIGTDqXRhaWxcIj5cbiAgICAgICAgICAgICAgPGg0PiR7YS5uYW1lfTwvaDQ+XG4gICAgICAgICAgICAgIDxwPiR7YS5kZXNjcmlwdGlvbi5sZW5ndGggPiA4MCA/IChhLmRlc2NyaXB0aW9uLnN1YnN0cigwLCAzMDApICsgJ+KApicpIDogYS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDxwPlZvaXIgbGUgZMOpdGFpbDwvcD5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICBgKVxuICAgICAgICAgIHJldHVybiBtYXJrZXJcbiAgICAgICAgfSlcblxuICAgICAgaWYgKHRoaXMuc2Nob29sSWQpIHtcbiAgICAgICAgTC5tYXJrZXIobG5nTGF0LCB7XG4gICAgICAgICAgaWNvbjogTC5kaXZJY29uKHtjbGFzc05hbWU6ICdsZWFmbGV0LXVzZXInLCBpY29uU2l6ZTogWzI1LCAyNV19KVxuICAgICAgICB9KVxuICAgICAgICAgIC5iaW5kUG9wdXAoJ1ZvdHJlIMOpdGFibGlzc2VtZW50IHNjb2xhaXJlJylcbiAgICAgICAgICAuYWRkVG8obWFwKVxuICAgICAgfVxuXG4gICAgICBMLmZlYXR1cmVHcm91cChtYXJrZXJzKVxuICAgICAgICAuYWRkVG8obWFwKVxuICAgIH0pXG4gIDwvc2NyaXB0PlxuXG4gIDxzdHlsZSBzY29wZWQ+XG4gICAgOnNjb3BlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuXG4gICAgW3JlZj1tYXBdIHtcbiAgICAgIGhlaWdodDogNjAwcHg7XG4gICAgfVxuICAgIC5sZWFmbGV0LXBvcHVwIGEge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuICAgIC5sZWFmbGV0LXVzZXIge1xuICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgYm9yZGVyOiA1cHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xuICAgICAgY29sb3I6IGJsdWU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgfVxuICA8L3N0eWxlPlxuPC9hY3RvcnMtbWFwPlxuIl19
riot.tag2('color-tag', '<a class="tag"> <span riot-style="background-color: {this.color}"></span> {this.label} </a>', 'color-tag span,[data-is="color-tag"] span{ display: inline-block; width: 1.2rem; height: 1.2rem; margin-right: .5rem; border-radius: 100%; border-color: 1px solid #e6e6e6; }', '', function(opts) {
    this.label = this.opts.label || ''

    const r = this.label.charCodeAt(0) * 2
    const g = 255 - (this.label.length * 25) % 255
    const b = this.label.charCodeAt(this.label.length - 1) * 2
    this.color = `rgb(${r}, ${g}, ${b})`
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXBoYWVsL3dlYi92YWxldHMvZWFjL3RhZ3MvcGFydGlhbHMvY29sb3ItdGFnLnRhZy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUNFLEFBQ0UsQUFFRixBQVlFLEFBQ0UsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0Y7Q0FwQkEsQUFHRixBQUNFLEFBTUY7Q0FKRTtDQUNBLEFBS0YsQUFTQTtDQWJFO0NBWEosQUFZSSxBQWFKIiwiZmlsZSI6Ii9Vc2Vycy9yYXBoYWVsL3dlYi92YWxldHMvZWFjL3RhZ3MvcGFydGlhbHMvY29sb3ItdGFnLnRhZy5odG1sIiwic291cmNlc0NvbnRlbnQiOlsiPGNvbG9yLXRhZz5cbiAgPGEgY2xhc3M9dGFnPlxuICAgIDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogeyB0aGlzLmNvbG9yIH1cIj48L3NwYW4+XG4gICAgeyB0aGlzLmxhYmVsIH1cbiAgPC9hPlxuXG4gIDxzY3JpcHQ+XG4gICAgdGhpcy5sYWJlbCA9IHRoaXMub3B0cy5sYWJlbCB8fCAnJ1xuXG4gICAgY29uc3QgciA9IHRoaXMubGFiZWwuY2hhckNvZGVBdCgwKSAqIDJcbiAgICBjb25zdCBnID0gMjU1IC0gKHRoaXMubGFiZWwubGVuZ3RoICogMjUpICUgMjU1XG4gICAgY29uc3QgYiA9IHRoaXMubGFiZWwuY2hhckNvZGVBdCh0aGlzLmxhYmVsLmxlbmd0aCAtIDEpICogMlxuICAgIHRoaXMuY29sb3IgPSBgcmdiKCR7cn0sICR7Z30sICR7Yn0pYFxuICA8L3NjcmlwdD5cblxuICA8c3R5bGUgc2NvcGVkPlxuICAgIHNwYW4ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDEuMnJlbTtcbiAgICAgIGhlaWdodDogMS4ycmVtO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICBib3JkZXItY29sb3I6IDFweCBzb2xpZCAjZTZlNmU2O1xuICAgIH1cbiAgPC9zdHlsZT5cbjwvY29sb3ItdGFnPlxuIl19
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXBoYWVsL3dlYi92YWxldHMvZWFjL3RhZ3MvcGFydGlhbHMvc2VhcmNoLWZpbHRlcnMudGFnLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBNkNJLEFBUUEsQUFHQSxBQUlBO0NBN0NBO0NBQ0E7Q0FGQSxBQUdBO0NBSkYsQUFLRSxBQTRCRjtDQTFCRTtDQUNFO0NBcEJKLEFBQ0UsQUFDQSxBQUVTLEFBQ0EsQUFHUCxBQWFBLEFBOEJBLEFBR0EsQUFFRixBQUNFO0NBbERPLEFBZUw7Q0FDRixBQThCRjtDQTdCSTtDQUNBO0NBQ0E7Q0FDSjtDQXJCUyxBQXVCVDtDQUNFLEFBaUJKLEFBYUE7Q0E3Qkk7Q0FoQ04sQUFpQ00sQUFrQkEsQUFRQSxBQUdOO0NBNUJNO0NBdkJKLEFBd0JJLEFBZUE7Q0E5Q0EsQUFnQ0E7Q0FFQTtDQUNBO0NBQ0U7Q0FDRjtDQS9CRixBQWdDRSxBQU9GO0NBTEUiLCJmaWxlIjoiL1VzZXJzL3JhcGhhZWwvd2ViL3ZhbGV0cy9lYWMvdGFncy9wYXJ0aWFscy9zZWFyY2gtZmlsdGVycy50YWcuaHRtbCIsInNvdXJjZXNDb250ZW50IjpbIjxzZWFyY2gtZmlsdGVycz5cbiAgPGRldGFpbHMgdGl0bGU9RG9tYWluZSBvcGVuPlxuICAgIDxzdW1tYXJ5PkFmZmluZXIgcGFyIGRvbWFpbmVzPC9zdW1tYXJ5PlxuICAgIDxsYWJlbCBlYWNoPXsgZG9tYWluIGluIHRoaXMuZG9tYWlucyB9PlxuICAgICAgPGlucHV0IHR5cGU9Y2hlY2tib3hcbiAgICAgICAgICAgICBuYW1lPWRvbWFpbnNcbiAgICAgICAgICAgICB2YWx1ZT17IGRvbWFpbiB9XG4gICAgICAgICAgICAgb25jaGFuZ2U9eyB0aGlzLnN1Ym1pdCB9XG4gICAgICAgICAgICAgY2hlY2tlZD17IHRoaXMuZmlsdGVycy5kb21haW5zICYmIHRoaXMuZmlsdGVycy5kb21haW5zLmluY2x1ZGVzKGRvbWFpbikgfT5cbiAgICAgIHsgZG9tYWluIH1cbiAgICA8L2xhYmVsPlxuICA8L2RldGFpbHM+XG5cbiAgPHNjcmlwdD5cbiAgICAvKiBnbG9iYWwgb3B0cywgcGFnZSAqL1xuICAgIHRoaXMuZmlsdGVycyA9IG9wdHMuZmlsdGVycyB8fCB7fVxuICAgIHRoaXMuYWN0b3JzID0gb3B0cy5hY3RvcnMgfHwgW11cbiAgICB0aGlzLnEgPSBvcHRzLnFcbiAgICB0aGlzLnNjaG9vbElkID0gb3B0cy5zY2hvb2xJZFxuXG4gICAgdGhpcy5vbigndXBkYXRlJywgKCkgPT4ge1xuICAgICAgdGhpcy5hY3RvcnMgPSBvcHRzLmFjdG9yc1xuICAgICAgdGhpcy5kb21haW5zID0gQXJyYXkuZnJvbShuZXcgU2V0KFxuICAgICAgICBbXS5jb25jYXQoLi4udGhpcy5hY3RvcnMuZmlsdGVyKGEgPT4gYS5kb21haW5zKS5tYXAoYSA9PiBhLmRvbWFpbnMpKVxuICAgICAgKSkuZmlsdGVyKGQgPT4gU3RyaW5nKGQpID09PSBkKVxuICAgICAgICAubWFwKGQgPT4gZC50cmltKCkpXG4gICAgICAgIC5maWx0ZXIoZCA9PiBkLmxlbmd0aClcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKGIudG9Mb3dlckNhc2UoKSkpXG4gICAgfSlcblxuICAgIHRoaXMuc3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBxID0gdGhpcy5xXG4gICAgICBjb25zdCBzY2hvb2xJZCA9IHRoaXMuc2Nob29sSWRcbiAgICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmZpbHRlcnNcbiAgICAgIGNvbnN0IGNhdGVnb3J5ID0gZXZlbnQudGFyZ2V0Lm5hbWVcbiAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICBjb25zdCBhY3RpdmF0ZSA9IGV2ZW50LnRhcmdldC5jaGVja2VkXG5cbiAgICAgIGlmICghZmlsdGVyc1tjYXRlZ29yeV0pIGZpbHRlcnNbY2F0ZWdvcnldID0gW11cbiAgICAgIGlmIChhY3RpdmF0ZSkge1xuICAgICAgICBpZiAoZmlsdGVyc1tjYXRlZ29yeV0uaW5kZXhPZih2YWx1ZSkgPCAwKSBmaWx0ZXJzW2NhdGVnb3J5XS5wdXNoKHZhbHVlKVxuICAgICAgfSBlbHNlIGZpbHRlcnNbY2F0ZWdvcnldLnNwbGljZShmaWx0ZXJzW2NhdGVnb3J5XS5pbmRleE9mKHZhbHVlKSwgMSlcbiAgICAgIGlmICghZmlsdGVyc1tjYXRlZ29yeV0ubGVuZ3RoKSBkZWxldGUgZmlsdGVyc1tjYXRlZ29yeV1cblxuICAgICAgcGFnZShgL3NlYXJjaD9xPSR7cX0mc2Nob29sPSR7c2Nob29sSWR9JmZpbHRlcnM9JHtlbmNvZGVVUkkoSlNPTi5zdHJpbmdpZnkoZmlsdGVycykpfWApXG4gICAgfVxuICA8L3NjcmlwdD5cblxuICA8c3R5bGUgc2NvcGVkPlxuICAgIGxhYmVsIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xuICAgIH1cbiAgICBsYWJlbCA+IGlucHV0IHtcbiAgICAgIG1hcmdpbi1yaWdodDogMC43NXJlbTtcbiAgICB9XG4gICAgc3VtbWFyeSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgPC9zdHlsZT5cbjwvc2VhcmNoLWZpbHRlcnM+XG4iXX0=
riot.tag2('search-form', '<form onsubmit="{this.submit}"> <label for="q">Vous recherchez</label> <input type="search" name="q" id="q" riot-value="{this.opts.q}" placeholder="Ex : Visite artisan" required autofocus> <label for="search">À proximité de</label> <select-school ref="school" type="search" name="school" id="school" school-id="{this.opts.schoolId}"></select-school> <input class="button" type="submit" value="Rechercher"> </form>', 'search-form form,[data-is="search-form"] form{ display: grid; grid-template: \'label-q label-school .\' \'q school button\' / 2fr 1fr auto; grid-column-gap: 1rem; max-width: 120rem; margin: 2rem auto 0 auto; } search-form label,[data-is="search-form"] label{ margin-bottom: 0; } search-form [for=q],[data-is="search-form"] [for=q]{ grid-area: label-q; } search-form #q,[data-is="search-form"] #q{ grid-area: q; } search-form [for=school],[data-is="search-form"] [for=school]{ grid-area: label-school; } search-form #school,[data-is="search-form"] #school{ grid-area: school; } search-form [type=submit],[data-is="search-form"] [type=submit]{ grid-area: button; }', '', function(opts) {

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXBoYWVsL3dlYi92YWxldHMvZWFjL3RhZ3MvcGFydGlhbHMvc2VhcmNoLWZvcm0udGFnLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBT0UsQUFVSSxBQUVGLEFBSUEsQUFTQSxBQUNBLEFBRUEsQUFDQSxBQUVBLEFBQ0EsQUFFQSxBQUdBLEFBR0EsQUFHQTtDQWpERixBQUtFLEFBS0EsQUFxQ0E7Q0FwQ0UsQUFnQkUsQUFHRjtDQWxCQSxBQXFCQTtDQWhDRixBQUNBLEFBRUEsQUFTRSxBQVFKLEFBT0ksQUFDQSxBQW1CQTtDQXhDSixBQU1JLEFBS0osQUFJSSxBQUNBLEFBQ0UsQUFDQSxBQWVKLEFBQ0UsQUFFRixBQUNFO0NBOUJFOztDQWhCUixBQUlJLEFBTUEsQUFRRSxBQW1CQSxBQUdBLEFBV0osQUFDRiIsImZpbGUiOiIvVXNlcnMvcmFwaGFlbC93ZWIvdmFsZXRzL2VhYy90YWdzL3BhcnRpYWxzL3NlYXJjaC1mb3JtLnRhZy5odG1sIiwic291cmNlc0NvbnRlbnQiOlsiPHNlYXJjaC1mb3JtPlxuICA8Zm9ybSBvbnN1Ym1pdD17IHRoaXMuc3VibWl0IH0+XG4gICAgPGxhYmVsIGZvcj1xPlZvdXMgcmVjaGVyY2hlejwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9c2VhcmNoIG5hbWU9cSBpZD1xIHZhbHVlPXsgdGhpcy5vcHRzLnEgfSBwbGFjZWhvbGRlcj1cIkV4IDogVmlzaXRlIGFydGlzYW5cIiByZXF1aXJlZCBhdXRvZm9jdXM+XG4gICAgPGxhYmVsIGZvcj1zZWFyY2g+w4AgcHJveGltaXTDqSBkZTwvbGFiZWw+XG4gICAgPHNlbGVjdC1zY2hvb2wgcmVmPXNjaG9vbCB0eXBlPXNlYXJjaCBuYW1lPXNjaG9vbCBpZD1zY2hvb2wgc2Nob29sLWlkPXsgdGhpcy5vcHRzLnNjaG9vbElkIH0gLz5cbiAgICA8aW5wdXQgY2xhc3M9YnV0dG9uIHR5cGU9c3VibWl0IHZhbHVlPVJlY2hlcmNoZXI+XG4gIDwvZm9ybT5cblxuICA8c2NyaXB0PlxuICAgIC8qIGdsb2JhbCBwYWdlICovXG4gICAgdGhpcy5zdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGxldCBwYXJhbXMgPSBgP3E9JHtlbmNvZGVVUkkoZXZlbnQudGFyZ2V0LnEudmFsdWUpfWBcbiAgICAgIGNvbnN0IHNjaG9vbElkID0gdGhpcy5yZWZzLnNjaG9vbC5zY2hvb2xJZFxuICAgICAgaWYgKHNjaG9vbElkKSB7XG4gICAgICAgIHBhcmFtcyArPSBgJnNjaG9vbD0ke3NjaG9vbElkfWBcbiAgICAgIH1cbiAgICAgIHBhZ2UoYC9zZWFyY2gke3BhcmFtc31gKVxuICAgIH1cbiAgPC9zY3JpcHQ+XG5cbiAgPHN0eWxlIHNjb3BlZD5cbiAgICBmb3JtIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlOlxuICAgICAgICAnbGFiZWwtcSBsYWJlbC1zY2hvb2wgLidcbiAgICAgICAgJ3Egc2Nob29sIGJ1dHRvbidcbiAgICAgICAgLyAyZnIgMWZyIGF1dG87XG4gICAgICBncmlkLWNvbHVtbi1nYXA6IDFyZW07XG4gICAgICBtYXgtd2lkdGg6IDEyMHJlbTtcbiAgICAgIG1hcmdpbjogMnJlbSBhdXRvIDAgYXV0bztcbiAgICB9XG4gICAgbGFiZWwge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gICAgW2Zvcj1xXSB7XG4gICAgICBncmlkLWFyZWE6IGxhYmVsLXE7XG4gICAgfVxuICAgICNxIHtcbiAgICAgIGdyaWQtYXJlYTogcTtcbiAgICB9XG4gICAgW2Zvcj1zY2hvb2xdIHtcbiAgICAgIGdyaWQtYXJlYTogbGFiZWwtc2Nob29sO1xuICAgIH1cbiAgICAjc2Nob29sIHtcbiAgICAgIGdyaWQtYXJlYTogc2Nob29sO1xuICAgIH1cbiAgICBbdHlwZT1zdWJtaXRdIHtcbiAgICAgIGdyaWQtYXJlYTogYnV0dG9uO1xuICAgIH1cbiAgPC9zdHlsZT5cbjwvc2VhcmNoLWZvcm0+XG4iXX0=
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXBoYWVsL3dlYi92YWxldHMvZWFjL3RhZ3MvcGFydGlhbHMvc2VsZWN0LXNjaG9vbC50YWcuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FDRSxBQU9FLEFBUUUsQUFhRSxBQU9BLEFBR0EsQUFNRTtDQXZDTjtDQUNFOztDQUdGO0NBUEYsQUFRSSxBQTBDSjtDQXhDSTtDQUNFO0NBQ0E7O0NBR0Y7Q0FDRTtDQUNFO0NBQ0E7Q0FDRixBQUlBO0NBSEE7Q0FuQkosQUFvQk07Q0FDQTs7Q0FFRjtDQUNFOztDQUVKLEFBZ0JFLEFBQ0YsQUFJQSxBQUNGO0NBcEJFO0NBQ0U7Q0FDQTtDQWxDUixBQW1DVSxBQW1CVjs7Q0FqQlE7Q0FDRSxBQUlBOztDQUZGO0NBQ0E7O0NBRUk7Q0FDQTs7OztDQUtOO0NBQ0UiLCJmaWxlIjoiL1VzZXJzL3JhcGhhZWwvd2ViL3ZhbGV0cy9lYWMvdGFncy9wYXJ0aWFscy9zZWxlY3Qtc2Nob29sLnRhZy5odG1sIiwic291cmNlc0NvbnRlbnQiOlsiPHNlbGVjdC1zY2hvb2w+XG4gIDxpbnB1dCB0eXBlPXNlYXJjaCByZWY9aW5wdXQgcGxhY2Vob2xkZXI9XCJFeCA6IEx5Y8OpZSBKZWFuIE1vdWxpbiBQYXJpc1wiPlxuXG4gIDxzY3JpcHQ+XG4gICAgLyogZ2xvYmFsIGFwaSwgQXdlc29tcGxldGUsIG5vcm1hbGl6ZVN0cmluZyAqL1xuXG4gICAgdGhpcy5kaXNwbGF5U2Nob29sID0gKHNjaG9vbCkgPT4ge1xuICAgICAgcmV0dXJuIGAke3NjaG9vbC5uYW1lfSAoJHtzY2hvb2wucG9zdGFsQ29kZX0gJHtzY2hvb2wuY2l0eX0pYFxuICAgIH1cblxuICAgIHRoaXMub24oJ21vdW50JywgYXN5bmMgKCkgPT4ge1xuICAgICAgbGV0IGlkID0gdGhpcy5vcHRzLnNjaG9vbElkXG5cbiAgICAgIGlmIChpZCkge1xuICAgICAgICBjb25zdCBzY2hvb2wgPSBhd2FpdCBhcGkoYC9zY2hvb2xzLyR7aWR9YClcbiAgICAgICAgdGhpcy5yZWZzLmlucHV0LnZhbHVlID0gdGhpcy5kaXNwbGF5U2Nob29sKHNjaG9vbClcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29tcGxldGVyID0gbmV3IEF3ZXNvbXBsZXRlKHRoaXMucmVmcy5pbnB1dCwge1xuICAgICAgICByZXBsYWNlOiBmdW5jdGlvbiAoc3VnZ2VzdGlvbikge1xuICAgICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSBzdWdnZXN0aW9uLmxhYmVsXG4gICAgICAgICAgaWQgPSBzdWdnZXN0aW9uLnZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIGZpbHRlcjogZnVuY3Rpb24gKHRleHQsIGlucHV0KSB7XG4gICAgICAgICAgY29uc3Qgd29yZHMgPSBub3JtYWxpemVTdHJpbmcoaW5wdXQpLnNwbGl0KCcgJylcbiAgICAgICAgICByZXR1cm4gd29yZHMuZmlsdGVyKHdvcmQgPT4gbm9ybWFsaXplU3RyaW5nKHRleHQubGFiZWwpLmluY2x1ZGVzKHdvcmQpKS5sZW5ndGggPT09IHdvcmRzLmxlbmd0aFxuICAgICAgICB9LFxuICAgICAgICBpdGVtOiBmdW5jdGlvbiAodGV4dCwgaW5wdXQpIHtcbiAgICAgICAgICByZXR1cm4gQXdlc29tcGxldGUuSVRFTSh0ZXh0LmxhYmVsLCAnJylcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgdGhpcy5yZWZzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgYXN5bmMgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBxID0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIGlmIChxID09PSAnJykge1xuICAgICAgICAgIHRoaXMuc2Nob29sSWQgPSAnJ1xuICAgICAgICB9XG4gICAgICAgIGlmICghcSB8fCBxLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzY2hvb2xzID0gYXdhaXQgYXBpKGAvc2Nob29scy9zZWFyY2gvJHtxfWApXG4gICAgICAgIGNvbXBsZXRlci5saXN0ID0gc2Nob29scyAmJiBzY2hvb2xzLm1hcChzID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGFiZWw6IHRoaXMuZGlzcGxheVNjaG9vbChzKSxcbiAgICAgICAgICAgIHZhbHVlOiBzLl9pZFxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMucmVmcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdhd2Vzb21wbGV0ZS1zZWxlY3Rjb21wbGV0ZScsIGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5zY2hvb2xJZCA9IGlkXG4gICAgICB9KVxuICAgIH0pXG4gIDwvc2NyaXB0PlxuPC9zZWxlY3Qtc2Nob29sPlxuIl19