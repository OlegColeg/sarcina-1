import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    {
      id: 1,
      nume: 'Oala Oleg',
      email: 'ooale47@gmail.com',
      varsta: 22,
      grupa: 'IS31Z'
    }
  ];
  private nextId = 2;

  // CREATE - creare student nou
  create(studentData: any) {
    const newStudent = {
      id: this.nextId++,
      ...studentData
    };
    this.students.push(newStudent);
    return newStudent;
  }

  // READ - toți studenții
  findAll() {
    return this.students;
  }

  // READ - student după ID
  findOne(id: number) {
    const student = this.students.find(s => s.id === id);
    if (!student) {
      throw new Error(`Studentul cu ID ${id} nu există`);
    }
    return student;
  }

  // UPDATE - actualizare student
  update(id: number, updateData: any) {
    const index = this.students.findIndex(s => s.id === id);
    if (index === -1) {
      throw new Error(`Studentul cu ID ${id} nu există`);
    }
    this.students[index] = { ...this.students[index], ...updateData };
    return this.students[index];
  }

  // DELETE - ștergere student
  remove(id: number) {
    const index = this.students.findIndex(s => s.id === id);
    if (index === -1) {
      throw new Error(`Studentul cu ID ${id} nu există`);
    }
    this.students.splice(index, 1);
    return { message: `Studentul cu ID ${id} a fost șters` };
  }
}
