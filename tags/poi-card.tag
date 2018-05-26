<poi-card>
  <h3>{ opts.data.Nom }</h3>
  <p>{ opts.data.Description.length < 80 ? opts.data.Description : opts.data.Description.substr(0, 80) + '…' }</p>
  <!--<address>{ opts.data['Adresse  Postal']} { opts.data['Code  Postal']}</address>-->
  <nav class=tags>
    <a each={ tag in opts.data.Type }>{ tag }</a>
  </nav>

  <geo if={ opts.data.distance && !opts['hidedistance'] }>{ opts.data.distance }km</geo>

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
    .tags a {
      display: inline-block;
      padding: .3rem 1rem;
      border-radius: .3rem;
      font-size: 1.1rem;
      font-style: italic;
      background: #eee;
      color: inherit;
      cursor: default;
    }
    .tags a:not(:last-of-type) {
      margin-right: 1rem;
    }
    geo {
      grid-area: geo;
      align-self: end;
      font-size: 1rem;
      text-align: right;
    }
  </style>
</poi-card>
