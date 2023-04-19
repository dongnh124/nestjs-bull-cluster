## Description

Nestjs bull queue connect to redis cluster

## Installation

```bash
yarn install
```

### Local redis running on Docker
The file `docker-compose.local.yml` contains the configuration of a local DB that run under docker.
```shell
yarn docker:start

yarn docker:stop
```

## Running the app

```bash
# before start
yarn build

# development
yarn start

# watch mode
yarn start:dev

# production mode
yarn start:prod
```
