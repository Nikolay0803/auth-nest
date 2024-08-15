import { CreateUserDto } from "./../user/dto/user.dto";
import { Body, Controller, Post, UseGuards, Request } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { LoginDto } from "./dto/auth.dto";
import { AuthService } from "./auth.service";
import { RefreshJwtGuard } from "./guards/refresh.guard";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  @Post("register")
  @ApiOperation({ summary: "Register a new user" })
  @ApiResponse({
    status: 201,
    description: "The user has been successfully registered.",
  })
  @ApiResponse({ status: 400, description: "Invalid input data." })
  async registerUser(@Body() dto: CreateUserDto) {
    return await this.userService.create(dto);
  }

  @Post("login")
  @ApiOperation({ summary: "User login" })
  @ApiResponse({
    status: 200,
    description: "Login successful, returns a JWT token.",
  })
  @ApiResponse({ status: 401, description: "Invalid credentials." })
  @ApiBody({ type: LoginDto })
  async login(@Body() dto: LoginDto) {
    return await this.authService.login(dto);
  }

  @UseGuards(RefreshJwtGuard)
  @Post("refresh")
  @ApiOperation({ summary: "Refresh JWT token" })
  @ApiResponse({
    status: 200,
    description: "JWT token refreshed successfully.",
  })
  @ApiResponse({
    status: 401,
    description: "Invalid or expired refresh token.",
  })
  async refreshToken(@Request() req) {
    return await this.authService.refreshToken(req.user);
  }
}
