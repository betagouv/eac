<poi-cards>
  <poi-card each={ opts.data } data={ this }></poi-card>

  <style>
    poi-card:not(:last-of-type) {
      border-bottom: 1px solid #ddd;
      padding-bottom: 1.5rem;
      margin-bottom: 1.5rem;
    }
  </style>
</poi-cards>
