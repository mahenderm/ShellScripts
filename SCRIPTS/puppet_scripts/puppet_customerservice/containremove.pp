docker::run { 'customerserviceweb':
  image   => 'customerservice',
  ensure => 'absent'
}

