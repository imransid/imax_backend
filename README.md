# Initial monorepo setup

npx prisma init

change ang table
npx prisma db push

docker-compose build



docker ps  

 -> to find running container

docker exec f144d7f232b3 npx prisma generate  

-> init time


docker exec f144d7f232b3 npx prisma migrate deploy

migrate


docker exec f144d7f232b3 npx prisma db push --force-reset

docker-compose up --build 


kill local port
 sudo lsof -i :5432 
 to check
 sudo kill -9 34391  
 to kill


 OPen ssl issue solution


 Install OpenSSL using apk: Run the following command to install OpenSSL in the container:

bash
Copy code
sudo docker exec -it e81d17b4fe9f sh -c "apk update && apk add openssl"
Verify Installation: After installing OpenSSL, you can verify it's installed by running:

bash
Copy code
sudo docker exec -it e81d17b4fe9f sh -c "openssl version"