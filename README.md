# Initial monorepo setup

npx prisma init

change ang table
npx prisma db push

docker-compose build



docker ps  

 -> to find running container

docker exec 9888dd23a73b npx prisma generate  

-> init time


docker exec 9ec74e2ea767 npx prisma migrate deploydocker 

migrate


docker exec e09da54d99a4 npx prisma db push --force-reset




kill local port
 sudo lsof -i :5432 
 to check
 sudo kill -9 34391  
 to kill