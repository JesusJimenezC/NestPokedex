<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Stack

- Docker
- Nest
- MongoDB
- Express

## 1. Installation

```bash
$ pnpm install
```

## 2. Build Database
```bash
$ docker-compose up -d
```

### 2.5 Fill Database
```bash
$ http://localhost:3000/api/seed
```

## 3. Environment Variables

> [!IMPORTANT]
> Clone file __.env.template__ to __.env__ and fill the variables

## 4. Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```
