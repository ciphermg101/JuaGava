# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command

## TypeORM Migrations

- To generate a new migration:
  ```sh
  pnpm migration:generate
  ```
- To run migrations:
  ```sh
  pnpm migration:run
  ```

## Project Structure

- All entities are in `src/entity/`
- All migrations are in `src/migration/`
