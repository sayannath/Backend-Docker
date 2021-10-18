# Backend-Docker

### Node, MongoDB and Nginx with Docker

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

## Pull Request

Pull Requests are welcome. Please follow these rules for the ease of understanding:
* Make sure to check for available issues before raising one
* Give me a maximum of 24-48 hours to respond
* Have proper documentation on the parts you are changing/adding

## Developed & Maintained by

[👨Sayan Nath](https://sayannath.biz/)

[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://github.com/sayannath)
<a href="https://www.buymeacoffee.com/sayannath235" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

<div align="center">
  
#### Show some ❤️ by starring the repository!
</div>
