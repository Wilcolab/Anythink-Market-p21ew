# Welcome to the Anythink Market repo

To start the app use `docker-compose up` at the project root directory. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

1. Clone the repo
2. Install [Docker](https://docs.docker.com/get-docker/)
3. Navigate to the root folder of the project
4. Run `docker-compose up`
   > This will spin up the containers for the front and back end of the app including the db
5. Test if the backend is running by pointing your browser at http://localhost:3000/api/ping
6. Test the frontend by registering a new user account at http://localhost:3001/register
   > This will also test if your local db setup is correct
