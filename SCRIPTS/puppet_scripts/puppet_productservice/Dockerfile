FROM java:8
#VOLUME /tmp
ADD Products-0.0.1-SNAPSHOT.jar /home/ubuntu/puppet_productservice/
CMD ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/home/ubuntu/puppet_productservice/Products-0.0.1-SNAPSHOT.jar"]

