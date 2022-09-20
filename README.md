
Create database compose based
```
  docker-compose up -d
```

Or Create database Hub based
```
  docker run --name postgres_container -e POSTGRES_DB=presentation -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -p 5432:5432 -d postgres
```

Running
```
  docker-compose up
```

Stopping 
```
  docker-compose down
```
