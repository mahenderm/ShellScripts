docker::run { 'productserviceweb':
  image   => 'productservice',
  remove_container_on_start => true,
  remove_container_on_stop  => true,
}
