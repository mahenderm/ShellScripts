docker::run { 'productserviceweb':
  image   => 'productservice',
  ensure => 'absent'
}

