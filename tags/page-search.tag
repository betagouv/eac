<page-search>
  <section class=block>
    <poi-cards data={ results }></poi-cards>
    <virtual if={ !result || !results.length }>
      <p>Aucun résultat ne correcpond à votre recherche.</p>
    </virtual>
    <a class=button href=#>Retour à la recherche</a>
  </section>

  <script>
    const types = opts.filters.type
    this.results = searchablePois.search(opts.q).filter(result => result.Type.some(type => types.includes(type)))
  </script>
</page-search>
