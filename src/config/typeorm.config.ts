import { TypeOrmModuleOptions } from '@nestjs/typeorm'

const configurationDefault: {} = {
  entities: ['dist/**/*.entity{.ts,.js}'],
  type: process.env.DATABASE_DEFAULT_CLIENT,
  port: process.env.DATABASE_DEFAULT_PORT,
  username: process.env.DABATASE_DEFAULT_USERNAME,
  logger: process.env.DATABASE_DEFAULT_LOGGER,
  logging: process.env.DATABASE_DEFAULT_LOGGING,
  maxQueryExecutionTime: process.env.DATABASE_DEFAULT_MAX_QUERY_EXECUTION_TIME,
  cache: process.env.DATABASE_DEFAULT_CACHE,
  retryAttempts: process.env.DATABASE_DEFAULT_RETRY_ATTEMPTS,
  retryDelay: process.env.DATABASE_DEFAULT_RETRY_DALAY,
  connectTimeoutMS: 10000,
  requestTimeout: 1000
}

export const typeOrmConfig: TypeOrmModuleOptions[] = [
  {
    name: process.env.DATABASEA_NAME,
    host: process.env.DATABASEA_HOST,
    password: process.env.DATABASEA_PASSWORD,
    serviceName: process.env.DATABASEA_SERVICE_NAME,
    ...configurationDefault
  },
  {
    name: process.env.DATABASEB_NAME,
    host: process.env.DATABASEB_HOST,
    password: process.env.DATABASEB_PASSWORD,
    serviceName: process.env.DATABASEB_SERVICE_NAME,
    ...configurationDefault
  }
]
