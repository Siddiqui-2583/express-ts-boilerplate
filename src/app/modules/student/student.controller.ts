/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { createStudentIntoDb, getStudentsFromDb } from './student.service';
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
      data: error,
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
  } catch (error) {
    console.log(error);
  }
};

export { createStudent, getStudents}
