import { IsEmail, MinLength, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  name?: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @MinLength(6)
  password?: string;

  @IsOptional()
  googleId?: string;
}
