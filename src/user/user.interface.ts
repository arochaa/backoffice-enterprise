export interface Iuser {
  ID: number
  NAME: string
  password: string
  email: string
  mobile_phone: number
  ip: string
  port: string
  id_profile: number
  attempts_errors: number
  last_login: Date
  status_lock: number
}
