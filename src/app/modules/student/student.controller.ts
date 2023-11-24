/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { createStudentIntoDb, deleteStudentFromDb, getSingleStudentFromDb, getStudentsFromDb } from './student.service';
import StudentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body;
    // console.log({student})
    const zodParsedData = StudentValidationSchema.parse(student);
    // console.log('zodParsedData',zodParsedData)
    const result = await createStudentIntoDb(zodParsedData);

    res.status(201).json({
      success: true,
      message: 'Student created successfully!',
      data: result,
    });
  } catch (error:any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong!',
      error: error,
    });
  }
};

const getStudents = async (req: Request, res: Response) => {
  try {
    const result = await getStudentsFromDb();
    res.status(200).json({
      success: true,
      message: 'Student retrieved successfully!',
      data: result,
    });
  } catch (error:any ) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong!',
      error: error,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await getSingleStudentFromDb(studentId);
    res.status(200).json({
      success: true,
      message: 'Student retrieved successfully!',
      data: result,
    });
  } catch (error:any ) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong!',
      error: error,
    });
  }
};
const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await deleteStudentFromDb(studentId);
    res.status(200).json({
      success: true,
      message: 'Student deleted successfully!',
      data: result,
    });
  } catch (error:any ) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong!',
      error: error,
    });
  }
};

export { createStudent, getStudents,getSingleStudent,deleteStudent}
