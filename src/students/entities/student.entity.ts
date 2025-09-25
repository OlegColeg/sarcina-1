import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Course } from '../../courses/entities/course.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nume: string;

  @Column({ unique: true })
  email: string;

  @Column()
  varsta: number;

  @Column()
  grupa: string;

  @ManyToMany(() => Course, course => course.students)
  courses: Course[];
}