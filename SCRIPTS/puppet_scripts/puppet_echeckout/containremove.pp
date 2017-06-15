docker::run { 'echeckoutweb':
  image   => 'echeckout',
  ensure => 'absent'
}

