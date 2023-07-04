# Tuttecose

Tuttecose is an attempt to create an example of full stack, containerized web application. Its main purpose is to get trained in developing features in their entirety and not just be confined to frontend development. Getting out of our comfort zone is fun!

## Technologies

- [**Docker**](https://www.docker.com/)
- [**AdonisJS**](https://adonisjs.com/)
- [**Typescript**](https://www.typescriptlang.org/)
- [**React**](https://react.dev/)

## Requirements

[Docker](https://www.docker.com/) is required to make Tuttecose work.

## Getting started

```bash
#clone the project
git clone git@github.com:bitfella/tuttecose.git

#spin up Docker containers
docker compose up -d --build

#access backend container via shell
docker compose exec backend sh

#run db migrations
node ace migration:run

#seed db
node ace db:seed
```

If everything went as expected you should see a json list of posts heading over to http://127.0.0.1:3333/posts or http://localhost:3333/posts
