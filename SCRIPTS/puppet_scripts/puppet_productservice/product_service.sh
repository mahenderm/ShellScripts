sudo puppet apply /home/ubuntu/puppet_productservice/containerstoprm.pp
sleep 10
sudo puppet apply /home/ubuntu/puppet_productservice/containremove.pp
sleep 10
sudo puppet apply /home/ubuntu/puppet_productservice/imageremove.pp
sleep 10
sudo puppet apply /home/ubuntu/puppet_productservice/imagecreate.pp
sleep 10
sudo puppet apply /home/ubuntu/puppet_productservice/containcreate.pp

