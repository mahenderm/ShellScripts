docker::run { 'customerserviceweb':
  image           => 'customerservice',
  ports           => ['8767:8767']
}

