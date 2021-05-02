# Backend-Docker

### Node, MongoDB and Redis best practises with Docker

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

Note: Under Progress
