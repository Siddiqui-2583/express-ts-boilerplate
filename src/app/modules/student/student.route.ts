import express from 'express';
import { createStudent, getStudents } from './student.controller';


const router = express.Router();

router.post('/create', createStudent);
router.get('/', getStudents);

export default router