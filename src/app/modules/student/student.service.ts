import { Student } from '../student.model';
import { IStudent } from './student.interface';

const createStudentIntoDb = async (student: IStudent) => {
  const result = await Student.create(student);
  return result;
};

const getStudentsFromDb = async () => {
  const result = await Student.find();
  return result;
};

export { createStudentIntoDb, getStudentsFromDb };
