import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CourseService } from './course.service';
import { Course } from './course.interface';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  create(@Body() courseData: Omit<Course, 'id'>) {
    return this.courseService.create(courseData);
  }

  @Get()
  findAll() {
    return this.courseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: Partial<Course>) {
    return this.courseService.update(Number(id), updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseService.remove(Number(id));
  }

  @Post(':courseId/enroll/:studentId')
  enrollStudent(
    @Param('courseId') courseId: string,
    @Param('studentId') studentId: string,
  ) {
    return this.courseService.enrollStudent(Number(courseId), Number(studentId));
  }

  @Delete(':courseId/unenroll/:studentId')
  unenrollStudent(
    @Param('courseId') courseId: string,
    @Param('studentId') studentId: string,
  ) {
    return this.courseService.unenrollStudent(Number(courseId), Number(studentId));
  }
}