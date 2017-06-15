docker::run { 'shoppingcartweb':
  image   => 'shoppingcart',
  remove_container_on_start => true,
  remove_container_on_stop  => true,
}
