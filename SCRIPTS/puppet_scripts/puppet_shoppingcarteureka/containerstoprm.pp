docker::run { 'shoppingeurekaweb':
  image   => 'shoppingeureka',
  remove_container_on_start => true,
  remove_container_on_stop  => true,
}
