import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDto {
  @ApiProperty({ example: 'Programare Web', description: 'Denumirea cursului' })
  denumire: string;

  @ApiProperty({ example: 'Ion Popescu', description: 'Numele profesorului' })
  profesor: string;

  @ApiProperty({ example: 5, description: 'Numărul de credite' })
  credite: number;

  @ApiProperty({ example: [1, 2], description: 'ID-urile studenților înscriși la curs' })
  studentIds: number[];
}

export class UpdateCourseDto extends CreateCourseDto {}
