docker::run { 'shoppingeurekaweb':
  image   => 'shoppingeureka',
  ensure => 'absent'
}

