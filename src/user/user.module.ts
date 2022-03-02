import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import User from './user.entity'
import { UserService } from './user.service'
import { UserController } from './user.controller'

@Module({
  imports: [
    TypeOrmModule.forFeature([User], 'HOSPITAL A'),
    TypeOrmModule.forFeature([User], 'HOSPITAL B')
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule { }
