import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "Nik", description: "The name of the account" })
  @IsString()
  name: string;

  @ApiProperty({
    example: "nik@example.com",
    description: "The email of the user",
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: "strongPassword123",
    description: "The password for the user account",
  })
  @IsString()
  password: string;
}
