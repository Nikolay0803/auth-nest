import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class LoginDto {
  @ApiProperty({
    example: "user@example.com",
    description: "The email address of the user",
  })
  @IsString()
  @IsEmail()
  username: string;

  @ApiProperty({
    example: "strongPassword123",
    description: "The password of the user",
  })
  @IsString()
  password: string;
}
