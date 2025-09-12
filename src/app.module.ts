import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { CourseModule } from './courses/course.module';

@Module({
  imports: [StudentsModule, CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}