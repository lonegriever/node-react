# Node React

React front-end served from a nodejs server-side application.

## Sequelize

Intalling Sequelize

- If you don't have sequelize installed globally, execute this command:
`npm install -g sequelize-cli`

- If one doesn't exists, create a `.sequelizerc` file in the root of your project. This is for specifying the paths to files required by Sequelize.

an example would be:

```javascript
    const path = require('path');
    module.exports = {
        "config": path.resolve('./server/config', 'config.json'),
        "models-path": path.resolve('./server/models'),
        "seeders-path": path.resolve('./server/seeders'),
        "migrations-path": path.resolve('./server/migrations')
    };
```

- Next is to run `sequelize init` for the Sequelize boiler plate files
below is an example config.json file for postgres

```json
{
  "development": {
    "username": "postgres",
    "password": null,
    "database": "node_react_development",
    "host": "127.0.0.1",
    "port": "5432",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": null,
    "database": "node_react_test",
    "host": "127.0.0.1",
    "port": 5432,
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": null,
    "database": "node_react_test",
    "host": "127.0.0.1",
    "port": 5432,
    "dialect": "postgres"
  }
}
```

To create a model and its migration, run this command: `model:generate --name User --attributes firstName:string,lastName:string,email:string`

For more information on models and migrations, check this link: [https://sequelize.org/master/manual/migrations.html]

Database

creating the database: `sequelize db:create`
migrating the database: `sequelize db:migrate`

## Development

to run the development server: `npx nodemon run:dev`

## Heroku

migrating the database: `node_modules/.bin/sequelize db:migrate`