import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { JwtGuard } from "src/auth/guards/jwt.guard";
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("user")
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtGuard)
  @Get(":id")
  @ApiOperation({ summary: "Get user profile by ID" })
  @ApiResponse({
    status: 200,
    description: "User profile returned successfully.",
  })
  @ApiResponse({ status: 404, description: "User not found." })
  @ApiParam({ name: "id", required: true, description: "ID of the user" })
  async getUserProfile(@Param("id") id: number) {
    return await this.userService.findById(id);
  }
}
