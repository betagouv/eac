<page-search>
  <section class=block>
    <poi-cards data={ results }></poi-cards>
    <virtual if={ !result || !results.length }>
      <p>Aucun résultat ne correcpond à votre recherche.</p>
    </virtual>
    <a class=button href=#>Retour à la recherche</a>
  </section>

  <script>
    let results = searchablePois.search(opts.q)
    const types = opts.filters.type
    if(types.length) {
      results = results.filter(result => result.Type.some(type => types.includes(type)))
    }
    this.results = results
  </script>
</page-search>
