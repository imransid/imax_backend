import { Controller, Get } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Get()
  // getUsers(): any {
  //   return this.usersService.getUsers();
  // }
}
