import express from 'express';
import {
  createStudent,
  deleteStudent,
  getSingleStudent,
  getStudents,
} from './student.controller';

const router = express.Router();

router.post('/create', createStudent);

router.get('/', getStudents);

router.get('/:studentId', getSingleStudent);

router.delete('/:studentId', deleteStudent);

export default router;
