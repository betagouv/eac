<poi-card>
  <h3>{ opts.data.Nom }</h3>
  <p>{ opts.data.Description.length < this.maxlength ? opts.data.Description : opts.data.Description.substr(0, this.maxlength) + '…' }</p>
  <nav class=tags>
    <a class=tag each={ tag in opts.data.Type }>{ tag }</a>
  </nav>

  <address if={ 'address' in opts }>
    <a href="https://www.openstreetmap.org/?mlat={ opts.data.latitude }&mlon={ opts.data.longitude }#map=15/{ opts.data.latitude }/{ opts.data.longitude }&layers=T" target=_blank>
      { address[0] }<br>{ address[1] }
    </a>
  </address>

  <geo if={ opts.data.distance && !opts['hidedistance'] }>{ opts.data.distance }km</geo>

  <script>
    this.address = this.opts.data['Adresse Postale'] && this.opts.data['Adresse Postal'].split(',')
    this.maxlength = this.opts.maxlength || 80
  </script>

  <style scoped>
    :scope {
      display: grid;
      grid-template:
        "title        tags"
        "description  geo"
        / 1fr auto;
    }

    h3 {
      grid-area: title;
      font-size: 1.2em;
      margin-bottom: 1rem;
    }

    p {
      grid-area: description;
      margin: 0;
    }

    .tags {
      grid-area: tags;
      text-align: right;
    }

    geo {
      grid-area: geo;
      align-self: end;
      font-size: 1rem;
      text-align: right;
    }
    address {
      text-align: right;
    }
  </style>
</poi-card>
