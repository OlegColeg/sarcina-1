import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
  @ApiProperty({ example: 'Oala Oleg', description: 'Numele studentului' })
  nume: string;

  @ApiProperty({ example: 'ooale47@gmail.com', description: 'Email-ul studentului' })
  email: string;

  @ApiProperty({ example: 22, description: 'Vârsta studentului' })
  varsta: number;

  @ApiProperty({ example: 'IS31Z', description: 'Grupa studentului' })
  grupa: string;
}

export class UpdateStudentDto extends CreateStudentDto {}
