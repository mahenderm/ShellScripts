FROM java:8
#VOLUME /tmp
ADD CheckoutService-0.0.1-SNAPSHOT.jar  /home/ubuntu/puppet_echeckout/
CMD ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/home/ubuntu/puppet_echeckout/CheckoutService-0.0.1-SNAPSHOT.jar"]

