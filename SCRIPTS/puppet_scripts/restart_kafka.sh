sudo fuser -k 9092/tcp &

nohup ~/kafka/bin/kafka-server-start.sh  ~/kafka/config/server.properties  > ~/kafka/kafka.log 2>&1 &
