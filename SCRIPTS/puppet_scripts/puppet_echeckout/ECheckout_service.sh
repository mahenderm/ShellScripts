sudo puppet apply /home/ubuntu/puppet_echeckout/containerstoprm.pp
sleep 10
sudo puppet apply /home/ubuntu/puppet_echeckout/containremove.pp
sleep 10
sudo puppet apply /home/ubuntu/puppet_echeckout/imageremove.pp
sleep 10
sudo puppet apply /home/ubuntu/puppet_echeckout/imagecreate.pp
sleep 10
sudo puppet apply /home/ubuntu/puppet_echeckout/containcreate.pp

