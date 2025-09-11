import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { StudentService } from '../students/student.service';

@Module({
  controllers: [CourseController],
  providers: [CourseService, StudentService]
})
export class CourseModule {}