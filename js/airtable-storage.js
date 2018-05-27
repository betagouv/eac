class AirtableStorage {
  constructor(apiKey, apiDatabase) {
    this.apiKey = apiKey
    this.apiDatabase = apiDatabase
    this.loaded = false
    this.data = {}
  }

  async load() {
    if(this.loaded) return this.data
    try {
      this.data = {
        schools: await this.callAPI('Etablissements'),
        pois: await this.callAPI('Acteurs Culturels')
      }
      this.loaded = true
    }
    catch (e) { console.error(e) }
    return this.data
  }

  async callAPI(table) {
    return fetch(`https://api.airtable.com/v0/${this.apiDatabase}/${table}/?view=Grid%20view`, {
      method: 'GET',
      headers: {Authorization: `Bearer ${atob(this.apiKey)}`},
    })
    .then(r => r.json())
    .then(collection => collection.records.map(row => Object.assign({id: row.id, createdTime: row.createdTime}, row.fields)))
    .catch(console.error.bind(console))
  }
}
