<poi-card>
  <h3>{ opts.data.Nom }</h3>
  <p>{ opts.data.Description.substr(0, 80) }…</p>
  <!--<address>{ opts.data['Adresse  Postal']} { opts.data['Code  Postal']}</address>-->
  <nav class=tags>
    <a each={ tag in opts.data.Type }>{ tag }</a>
  </nav>

  <style scoped>
    :root {
      position: relative;
      border: 1px solid #ddd;
      padding: 1rem;
      width: 30%;
      margin-right: 3%;
      margin-bottom: 1rem;
    }

    h3 {
      font-size: 1.2em;
      margin-bottom: 1rem;
    }

    .tags {
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
  </style>
</poi-card>
