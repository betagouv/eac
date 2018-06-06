class AirtableStorage {
  constructor(apiKey, apiDatabase) {
    this.apiKey = apiKey
    this.apiDatabase = apiDatabase
    this.loaded = false
    this.data = {}
    this.schemas = {
      schools: ['id', 'appellation_officielle', 'latitude', 'longitude'],
      actors: ['id', 'createdTime', 'latitude', 'longitude', 'Nom', 'Activite', 'Description', 'Code Postal', 'Adresse Postal', 'Actions'],
      actions: ['id', 'createdTime', 'Nom', 'Domaine', 'Nb Eleves', 'Type', 'Nom Etablissement'],
      levels: ['id', 'Name'],
    }
  }

  async load() {
    if(this.loaded) return this.data
    try {
      this.data = {
        schools: await this.callAPI('Etablissements'),
        actors: await this.callAPI('Acteurs Culturels'),
        actions: await this.callAPI('Actions'),
        levels: await this.callAPI('Niveaux'),
      }
    }
    catch (e) { console.error(e) }
    this.validateSchemas()
    this.loaded = true
    return this.data
  }

  /**
  * Check that the API received expected columns.
  */
  validateSchemas() {
    Object.keys(this.schemas).forEach(table => {
      const dataKeys = Object.keys(this.data[table][0])
      if(!this.schemas[table].every(key => dataKeys.includes(key))) {
        throw new Error(`The API table "${table}" may have changed.
        This application could therefore not function as expected.`)
      }
    })
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
