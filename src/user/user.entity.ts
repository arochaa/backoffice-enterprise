import { BaseEntity, Entity, Column, PrimaryColumn } from 'typeorm'

@Entity('PIS_BO_USER')
export default class User extends BaseEntity {
  @PrimaryColumn()
  ID: number

  @Column({ nullable: false, type: 'varchar2', length: 120 })
  NAME: string

  @Column({ nullable: false, type: 'varchar2', length: 150 })
  PASSWORD: string

  @Column({ nullable: false, type: 'varchar2', length: 100 })
  EMAIL: string

  @Column({ nullable: true, type: 'number' })
  MOBILE_PHONE: number

  @Column({ nullable: true, type: 'varchar2', length: 50 })
  IP: string

  @Column({ nullable: true, type: 'number' })
  PORT: number

  @Column({ nullable: true, type: 'number' })
  ID_PROFILE: number

  @Column({ nullable: true, type: 'number' })
  ATTEMPTS_ERRORS: number

  @Column({ nullable: true, type: 'timestamp with time zone' })
  LAST_LOGIN: Date

  @Column({ nullable: true, type: 'char' })
  STATUS_LOCK: string

  @Column({ nullable: true, type: 'timestamp with time zone' })
  DATE_INSERT: Date

  @Column({ nullable: true, type: 'timestamp with time zone' })
  DATE_UPDATE: Date

  @Column({ nullable: true, type: 'number' })
  ID_USER: number

  @Column({ nullable: true, type: 'char' })
  ATIVE: string
}
