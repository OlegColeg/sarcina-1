import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Student } from '../../students/entities/student.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  denumire: string;

  @Column()
  profesor: string;

  @Column()
  credite: number;

  @ManyToMany(() => Student, student => student.courses)
  @JoinTable({
    name: 'course_students', // numele tabelului de legătură
    joinColumn: {
      name: 'course_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'student_id',
      referencedColumnName: 'id',
    },
  })
  students: Student[];
}