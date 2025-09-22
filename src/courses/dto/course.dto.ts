import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MinLength, MaxLength, IsNumber, Min, Max, IsArray, IsOptional, Matches } from 'class-validator';

export class CreateCourseDto {
  @ApiProperty({ example: 'Programare Web', description: 'Denumirea cursului' })
  @IsString({ message: 'Denumirea cursului trebuie să fie text' })
  @IsNotEmpty({ message: 'Denumirea cursului nu poate fi goală' })
  @MinLength(3, { message: 'Denumirea cursului trebuie să aibă cel puțin 3 caractere' })
  @MaxLength(100, { message: 'Denumirea cursului nu poate depăși 100 de caractere' })
  @Matches(/^[a-zA-ZăîșțâĂÎȘȚÂ0-9\s-]+$/, { message: 'Denumirea poate conține doar litere, cifre, spații și cratime' })
  denumire: string;

  @ApiProperty({ example: 'Ion Popescu', description: 'Numele profesorului' })
  @IsString({ message: 'Numele profesorului trebuie să fie text' })
  @IsNotEmpty({ message: 'Numele profesorului nu poate fi gol' })
  @MinLength(3, { message: 'Numele profesorului trebuie să aibă cel puțin 3 caractere' })
  @MaxLength(50, { message: 'Numele profesorului nu poate depăși 50 de caractere' })
  @Matches(/^[a-zA-ZăîșțâĂÎȘȚÂ\s-]+$/, { message: 'Numele profesorului poate conține doar litere, spații și cratime' })
  profesor: string;

  @ApiProperty({ example: 5, description: 'Numărul de credite' })
  @IsNumber({}, { message: 'Numărul de credite trebuie să fie un număr' })
  @Min(1, { message: 'Numărul minim de credite este 1' })
  @Max(30, { message: 'Numărul maxim de credite este 30' })
  @IsNotEmpty({ message: 'Numărul de credite nu poate fi gol' })
  credite: number;

  @ApiProperty({ example: [1, 2], description: 'ID-urile studenților înscriși la curs' })
  @IsArray({ message: 'Lista de studenți trebuie să fie un array' })
  @IsNumber({}, { each: true, message: 'ID-urile studenților trebuie să fie numere' })
  @IsOptional()
  studentIds: number[];
}

export class UpdateCourseDto extends CreateCourseDto {}
