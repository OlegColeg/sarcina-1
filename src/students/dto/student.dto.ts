import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MinLength, MaxLength, IsEmail, IsNumber, Min, Max, Matches } from 'class-validator';

export class CreateStudentDto {
  @ApiProperty({ example: 'Oala Oleg', description: 'Numele studentului' })
  @IsString({ message: 'Numele trebuie să fie text, nu se permit cifre sau caractere speciale' })
  @IsNotEmpty({ message: 'Numele nu poate fi gol' })
  @MinLength(3, { message: 'Numele trebuie să aibă cel puțin 3 caractere' })
  @MaxLength(50, { message: 'Numele nu poate depăși 50 de caractere' })
  @Matches(/^[a-zA-ZăîșțâĂÎȘȚÂ\s-]+$/, { message: 'Numele poate conține doar litere, spații și cratime' })
  nume: string;

  @ApiProperty({ example: 'ooale47@gmail.com', description: 'Email-ul studentului' })
  @IsEmail({}, { message: 'Adresa de email nu este validă' })
  @IsNotEmpty({ message: 'Email-ul nu poate fi gol' })
  email: string;

  @ApiProperty({ example: 22, description: 'Vârsta studentului' })
  @IsNumber({}, { message: 'Vârsta trebuie să fie un număr' })
  @Min(16, { message: 'Vârsta minimă este de 16 ani' })
  @Max(100, { message: 'Vârsta maximă este de 100 ani' })
  @IsNotEmpty({ message: 'Vârsta nu poate fi goală' })
  varsta: number;

  @ApiProperty({ example: 'IS31Z', description: 'Grupa studentului' })
  @IsString({ message: 'Grupa trebuie să fie text' })
  @IsNotEmpty({ message: 'Grupa nu poate fi goală' })
  @MinLength(2, { message: 'Grupa trebuie să aibă cel puțin 2 caractere' })
  @MaxLength(10, { message: 'Grupa nu poate depăși 10 caractere' })
  @Matches(/^[A-Z0-9]+$/, { message: 'Grupa poate conține doar litere mari și cifre' })
  grupa: string;
}

export class UpdateStudentDto extends CreateStudentDto {}
