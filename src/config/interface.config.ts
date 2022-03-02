export interface Iconfig {
  client: string
  host: string
  port: number
  username: string
  logger: boolean
  logging: boolean
  maxQueryExecutionTime: number
  cache: boolean
  retryAttempts: number
  retryDelay: number
  name: string
  password: string
  serviceName: string
}
