import { Schema, model } from 'mongoose';
import {
  Guardian,
  IStudent,
  LocalGuardian,
  UserName,
} from './student/student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: [true, 'First name is required'] },
  middleName: { type: String, required: [true, 'Middle name is required'] },
  lastName: { type: String, required: [true, 'Last name is required'] },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: [true, 'Father name is required'] },
  fatherOccupation: { type: String, required: [true, 'Father occupation is required'] },
  fatherContactNo: { type: String, required: [true, 'Father contact number is required'] },
  motherName: { type: String, required: [true, 'Mother name is required'] },
  motherOccupation: { type: String, required: [true, 'Mother occupation is required'] },
  motherContactNo: { type: String, required: [true, 'Mother contact number is required'] },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: [true, 'Local guardian name is required'] },
  occupation: { type: String, required: [true, 'Local guardian occupation is required'] },
  contactNo: { type: String, required: [true, 'Local guardian contact number is required'] },
  address: { type: String, required: [true, 'Local guardian address is required'] },
});

const studentSchema = new Schema<IStudent>({
  id: { type: String },
  name: { type: userNameSchema, required: [true, 'Name is required'] },
  gender: {
    type: String,
    enum: { values: ['male', 'female'], message: '{VALUE} is not valid' },
    required: [true, 'Gender is required'],
  },
  dateOfBirth: { type: String, required: [true, 'Date of birth is required'] },
  email: { type: String, required: [true, 'Email is required'] },
  contactNo: { type: String, required: [true, 'Contact number is required'] },
  emergencyContactNo: { type: String, required: [true, 'Emergency contact number is required'] },
  bloogGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    message: 'Invalid blood group',
  },
  presentAddress: { type: String, required: [true, 'Present address is required'] },
  permanentAddres: { type: String, required: [true, 'Permanent address is required'] },
  guardian: { type: guardianSchema, required: [true, 'Guardian information is required'] },
  localGuardian: { type: localGuardianSchema, required: [true, 'Local guardian information is required'] },
  profileImg: { type: String },
  isActive: { type: String, enum: ['active', 'blocked'], required: [true, 'isActive is required'] },


  
});

export const Student = model<IStudent>('Student', studentSchema);
