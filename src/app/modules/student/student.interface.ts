/* eslint-disable no-unused-vars */
import { Model } from "mongoose";


export type UserName = {
    firstName: string;
    middleName: string;
    lastName: string;
  };

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type LocalGuardian = {
    name: string;
    occupation: string;
    contactNo: string;
    address: string;
};

export interface IStudent {
  id: string;
  password: string;
  name: UserName;
  gender: "male" | "female";
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloogGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  permanentAddres: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};

// Static methods

export interface StudentModel extends Model<IStudent>{
  isUserExists(id:string):Promise<IStudent | null>;
}

// custom instance method
// export interface StudentMethods{
//   isUserExists(id:string):Promise<IStudent | null>;
// }

// export type StudentModel = Model<IStudent, Record<string, never>,StudentMethods>
