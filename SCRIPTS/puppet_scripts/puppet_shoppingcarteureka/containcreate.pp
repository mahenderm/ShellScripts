docker::run { 'shoppingeurekaweb':
  image           => 'shoppingeureka',
  ports           => ['8762:8762']
}

