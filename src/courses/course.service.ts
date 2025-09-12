import { Injectable } from '@nestjs/common';
import { StudentService } from '../students/student.service';
import { Course } from './course.interface';


@Injectable()
export class CourseService {
  constructor(private studentService: StudentService) {}

  private courses: Course[] = [
    {
      id: 1,
      denumire: 'Programare Web',
      profesor: 'Ion Popescu',
      credite: 5,
      studentIds: [1]
    }
  ];
  private nextId = 2;

  create(courseData: Omit<Course, 'id'>) {
    const newCourse = {
      id: this.nextId++,
      ...courseData
    };
    this.courses.push(newCourse);
    return newCourse;
  }

  findAll() {
    return this.courses;
  }

  findOne(id: number) {
    const course = this.courses.find(c => c.id === id);
    if (!course) {
      throw new Error(`Cursul cu ID ${id} nu există`);
    }
    return course;
  }

  update(id: number, updateData: Partial<Course>) {
    const index = this.courses.findIndex(c => c.id === id);
    if (index === -1) {
      throw new Error(`Cursul cu ID ${id} nu există`);
    }
    this.courses[index] = { ...this.courses[index], ...updateData };
    return this.courses[index];
  }

  remove(id: number) {
    const index = this.courses.findIndex(c => c.id === id);
    if (index === -1) {
      throw new Error(`Cursul cu ID ${id} nu există`);
    }
    this.courses.splice(index, 1);
    return { message: `Cursul cu ID ${id} a fost șters` };
  }

  enrollStudent(courseId: number, studentId: number) {
    const course = this.findOne(courseId);
    this.studentService.findOne(studentId); // verifică dacă studentul există
    
    if (!course.studentIds.includes(studentId)) {
      course.studentIds.push(studentId);
    }
    return course;
  }

  unenrollStudent(courseId: number, studentId: number) {
    const course = this.findOne(courseId);
    course.studentIds = course.studentIds.filter(id => id !== studentId);
    return course;
  }
}