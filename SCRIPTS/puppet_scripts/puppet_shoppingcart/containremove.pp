docker::run { 'shoppingcartweb':
  image   => 'shoppingcart',
  ensure => 'absent'
}

