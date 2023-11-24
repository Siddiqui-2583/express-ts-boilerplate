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
  const result = await Student.find().select('-password');
  return result;
};
const getSingleStudentFromDb = async (id:string) => {
  const result = await Student.find({id});
  return result;
};
const deleteStudentFromDb = async (id:string) => {
  const result = await Student.updateOne({id},{isDeleted:true});
  return result;
};

export { createStudentIntoDb, getStudentsFromDb,getSingleStudentFromDb,deleteStudentFromDb };
