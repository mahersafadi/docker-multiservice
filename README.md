# docker-multiservice
Udemy course by Stephen Grider
https://www.udemy.com/course/docker-and-kubernetes-the-complete-guid

in server:

Instead of this:

npm install -g create-react-app

create-react-app client

We need to run this command:

npx create-react-app client

Inside the newly created client directory, run rm -r .git


#tobe deleted
client a217426fe673
serrver:
FROM node:alpine

to this:

FROM node:14.14.0-alpine

adding postgress as a service is done using docker-compose

client:
    stdin_open: true
    build:
      dockerfile: Dockerfile.dev
      context: ./client
    volumes:
      - /app/node_modules
      - ./client:/app

 worker:
    build:
      dockerfile: Dockerfile.dev
      context: ./worker
    volumes:
      - /app/node_modules
      - ./worker:/app
    environment:
      - REDIS_HOST=redis
      - REDIS_PORT=6379
            
