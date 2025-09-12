import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { StudentService } from './student.service';
import { CreateStudentDto, UpdateStudentDto } from './dto/student.dto';

@ApiTags('students')
@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  @ApiOperation({ summary: 'Creare student nou' })
  @ApiResponse({ status: 201, description: 'Studentul a fost creat cu succes.' })
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Găsește toți studenții' })
  @ApiResponse({ status: 200, description: 'Lista cu toți studenții.' })
  findAll() {
    return this.studentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Găsește un student după ID' })
  @ApiResponse({ status: 200, description: 'Studentul a fost găsit.' })
  @ApiResponse({ status: 404, description: 'Studentul nu a fost găsit.' })
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizează un student' })
  @ApiResponse({ status: 200, description: 'Studentul a fost actualizat.' })
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Șterge un student' })
  @ApiResponse({ status: 200, description: 'Studentul a fost șters.' })
  remove(@Param('id') id: string) {
    return this.studentService.remove(+id);
  }
}
