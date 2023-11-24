import { IStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntoDb = async (studentData: IStudent) => {
//   const student = new Student(studentData);
  if (await Student.isUserExists(studentData.id)) {
    throw new Error('User already exists!');
  } else {
    const result = await Student.create(studentData);
    return result;
  }
};

const getStudentsFromDb = async () => {
  const result = await Student.find();
  return result;
};

export { createStudentIntoDb, getStudentsFromDb };
