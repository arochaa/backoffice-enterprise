import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from './user/user.module'
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig[0]),
    TypeOrmModule.forRoot(typeOrmConfig[1]),
    UserModule
  ],
  controllers: [],
  providers: []
})
export class AppModule { }
