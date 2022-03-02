import { Body, Controller, Get, Param, Query } from '@nestjs/common'
import User from './user.entity'
import { UserService } from './user.service'
import { userDtoPayload } from './user.dto'

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('/:id')
  async getAll(
    @Param('id') id: string,
    @Query('name') query: string
  ): Promise<User[]> {
    return this.userService.getUser(id, query)
  }
}
