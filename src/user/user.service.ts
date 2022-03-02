import {
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Like, Repository } from 'typeorm'
import User from './user.entity'

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name)

  constructor(
    @InjectRepository(User, 'HOSPITAL A') private a: Repository<User>,
    @InjectRepository(User, 'HOSPITAL B') private b: Repository<User>
  ) { }

  async getUser(id: string, NAME: string): Promise<User[]> {

    if (!this[id]) throw new NotFoundException(
      {
        message: `A unidade '${id}' não cadastrada. Favor entrar em contato com administrador do sistema`,
        statusCode: 404,
        info: null,
        stackError: null
      }
    )

    if (NAME) {
      return this[id].find({ NAME: Like(`%${NAME.toUpperCase()}%`) })
    }

    return this[id].find()
  }
}
