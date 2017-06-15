sudo puppet apply /home/ubuntu/puppet_customerservice/containerstoprm.pp
sleep 10
sudo puppet apply /home/ubuntu/puppet_customerservice/containremove.pp
sleep 10
sudo puppet apply /home/ubuntu/puppet_customerservice/imageremove.pp
sleep 10
sudo puppet apply /home/ubuntu/puppet_customerservice/imagecreate.pp
sleep 10
sudo puppet apply /home/ubuntu/puppet_customerservice/containcreate.pp

