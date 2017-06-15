docker::run { 'productserviceweb':
  image           => 'productservice',
  ports           => ['8765:8765']
}

