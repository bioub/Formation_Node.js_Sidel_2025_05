const config = {
  env: process.env.NODE_ENV ?? 'development',
  port: process.env.PORT ?? 4000,
  databaseUrl: process.env.DATABASE_URL ?? 'postgres://postgres:postgres@localhost:5432/postgres',
};

export default config;
