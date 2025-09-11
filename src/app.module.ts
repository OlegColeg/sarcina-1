import { Module } from '@nestjs/common';
import { CourseModule } from './courses/course.module';

@Module({
  imports: [CourseModule],
})
export class AppModule {}