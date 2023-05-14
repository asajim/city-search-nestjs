# city-search-nestjs

Nest project where user can search a city based on its name using binary-search algorithm.
Cities are loaded from a static [JSON file](./data/cities.json).

Swagger can be access at "/api".

There's also a FE project that can be accessed [here](https://github.com/asajim/city-search-nextjs).

## Getting Started

1. Install Node.js and NPM.
2. Use Node 18 (if you have nvm installed, you can do it by typing `nvm use 18`)
3. Install the dependencies:
   ```bash
   $ npm install
   ```
4. Start the development server:
   ```bash
   $ npm run start:dev
   ```
5. Open your browser and navigate to `http://localhost:8080`.


## Techstack

* [NestJS](https://nestjs.com/)<br/>
  NestJS is selected because it offers several advantages compared to ExpressJS, such as
    * Modular architecture
    * Dependency injection
    * Built-in testing
    * TypeScript support
    * Supports for various tools, such as Swagger, GraphQL, TypeORM, etc.
* [TypeScript](https://www.typescriptlang.org/)

## Further Improvement

* No setup for production. Everything are still based on development setup.
* Add more feature
* Add more documentation
