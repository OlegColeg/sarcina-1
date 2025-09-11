export interface Course {
  id: number;
  denumire: string;
  profesor: string;
  credite: number;
  studentIds: number[];
}