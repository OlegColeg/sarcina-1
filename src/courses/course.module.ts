import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { StudentsModule } from '../students/students.module';
import { Course } from './entities/course.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Course]),
    StudentsModule
  ],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}