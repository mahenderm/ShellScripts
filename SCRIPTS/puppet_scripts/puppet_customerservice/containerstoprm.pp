docker::run { 'customerserviceweb':
  image   => 'customerservice',
  remove_container_on_start => true,
  remove_container_on_stop  => true,
}
