sudo puppet apply /home/ubuntu/puppet_shoppingcart/containerstoprm.pp
sleep 10
sudo puppet apply /home/ubuntu/puppet_shoppingcart/containremove.pp
sleep 10
sudo puppet apply /home/ubuntu/puppet_shoppingcart/imageremove.pp
sleep 10
sudo puppet apply /home/ubuntu/puppet_shoppingcart/imagecreate.pp
sleep 10
sudo puppet apply /home/ubuntu/puppet_shoppingcart/containcreate.pp

