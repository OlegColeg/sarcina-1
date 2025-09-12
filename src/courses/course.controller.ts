import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CourseService } from './course.service';
import { CreateCourseDto, UpdateCourseDto } from './dto/course.dto';

@ApiTags('courses')
@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  @ApiOperation({ summary: 'Creare curs nou' })
  @ApiResponse({ status: 201, description: 'Cursul a fost creat cu succes.' })
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.courseService.create(createCourseDto);
  }

  @Get()
  @ApiOperation({ summary: 'Găsește toate cursurile' })
  @ApiResponse({ status: 200, description: 'Lista cu toate cursurile.' })
  findAll() {
    return this.courseService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Găsește un curs după ID' })
  @ApiResponse({ status: 200, description: 'Cursul a fost găsit.' })
  @ApiResponse({ status: 404, description: 'Cursul nu a fost găsit.' })
  findOne(@Param('id') id: string) {
    return this.courseService.findOne(Number(id));
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizează un curs' })
  @ApiResponse({ status: 200, description: 'Cursul a fost actualizat.' })
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.courseService.update(Number(id), updateCourseDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Șterge un curs' })
  @ApiResponse({ status: 200, description: 'Cursul a fost șters.' })
  remove(@Param('id') id: string) {
    return this.courseService.remove(Number(id));
  }

  @Post(':courseId/enroll/:studentId')
  @ApiOperation({ summary: 'Înscrie un student la curs' })
  @ApiResponse({ status: 200, description: 'Studentul a fost înscris la curs.' })
  enrollStudent(
    @Param('courseId') courseId: string,
    @Param('studentId') studentId: string,
  ) {
    return this.courseService.enrollStudent(Number(courseId), Number(studentId));
  }

  @Delete(':courseId/unenroll/:studentId')
  @ApiOperation({ summary: 'Dezînscrie un student de la curs' })
  @ApiResponse({ status: 200, description: 'Studentul a fost dezînscris de la curs.' })
  unenrollStudent(
    @Param('courseId') courseId: string,
    @Param('studentId') studentId: string,
  ) {
    return this.courseService.unenrollStudent(Number(courseId), Number(studentId));
  }
}