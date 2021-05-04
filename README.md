# Backend-Docker

### Node, MongoDB and Nginx best practises with Docker

## Commands

* Start
```
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build [For Development]
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build [For Production]
```
* Stop
```
docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v [For Development]
docker-compose -f docker-compose.yml -f docker-compose.prod.yml down -v [For Production]
```
* Scale Up
```
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --scale node-app=2 [For 2 node instance]
```

Note: Under Progress
