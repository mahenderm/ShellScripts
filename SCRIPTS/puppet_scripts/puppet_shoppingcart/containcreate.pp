docker::run { 'shoppingcartweb':
  image           => 'shoppingcart',
  ports           => ['8766:8766']
}

