db = {
  loaded: false,
  data: {},

  async load() {
    if(this.loaded) return this.data
    try {
      this.data = {
        schools: await this.callAirtable('Etablissements'),
        pois: await this.callAirtable('Acteurs Culturels'),
      }
      this.loaded = true
    }
    catch (e) {console.error(e)}
    return this.data
  },

  callAirtable(table, options) {
    return fetch(`https://api.airtable.com/v0/${databaseId}/${table}/?view=Grid%20view`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${atob(apiKey)}`,
      },
    })
    .then(r => r.json())
    .then(collection => collection.records.map(row => Object.assign({id: row.id, createdTime: row.createdTime}, row.fields)))
    .catch(console.error.bind(console))
  }
}
