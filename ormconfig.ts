export = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'affluent',
  database: 'affluent',
  synchronize: false,
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/migration/*.ts'],
  seeds: ['src/seeds/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
};
