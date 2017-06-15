scp -i "C:/Users/venkatk/Documents/myVM" "E:/DevOpsInABox/Workspace/ECommerce_main_FS/target/ECommerce.war"  kiran@192.168.2.91:/home/kiran/
ssh -i "C:/Users/venkatk/Documents/myVM" kiran@192.168.2.91 "sh /home/kiran/deployEcommerce.sh"
echo "Copied ECommerce war to DevOps VM"