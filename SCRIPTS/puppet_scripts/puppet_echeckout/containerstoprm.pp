docker::run { 'echeckoutweb':
  image   => 'echeckout',
  remove_container_on_start => true,
  remove_container_on_stop  => true,
}
