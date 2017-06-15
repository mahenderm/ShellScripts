sudo puppet apply /home/ubuntu/puppet_shoppingcarteureka/containerstoprm.pp
sleep 10
sudo puppet apply /home/ubuntu/puppet_shoppingcarteureka/containremove.pp
sleep 10
sudo puppet apply /home/ubuntu/puppet_shoppingcarteureka/imageremove.pp
sleep 10
sudo puppet apply /home/ubuntu/puppet_shoppingcarteureka/imagecreate.pp
sleep 10
sudo puppet apply /home/ubuntu/puppet_shoppingcarteureka/containcreate.pp

