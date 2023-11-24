import { z } from 'zod';

// Define a schema for UserName
const UserNameValidationSchema = z.object({
  firstName: z.string().min(1),
  middleName: z.string().min(1),
  lastName: z.string().min(1),
});

// Define a schema for Guardian
const GuardianValidationSchema = z.object({
  fatherName: z.string().min(1),
  fatherOccupation: z.string().min(1),
  fatherContactNo: z.string().min(1),
  motherName: z.string().min(1),
  motherOccupation: z.string().min(1),
  motherContactNo: z.string().min(1),
});

// Define a schema for LocalGuardian
const LocalGuardianValidationSchema = z.object({
  name: z.string().min(1),
  occupation: z.string().min(1),
  contactNo: z.string().min(1),
  address: z.string().min(1),
});

// Define the main schema for IStudent
export const StudentValidationSchema = z.object({
  id: z.string(),
  password: z.string().max(20),
  name: UserNameValidationSchema,
  gender: z.enum(['male', 'female']),
  dateOfBirth: z.string(),
  email: z.string().email(),
  contactNo: z.string(),
  emergencyContactNo: z.string(),
  bloogGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  presentAddress: z.string(),
  permanentAddres: z.string(),
  guardian: GuardianValidationSchema,
  localGuardian: LocalGuardianValidationSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']),
  isDeleted:z.boolean().default(false)
});

export default StudentValidationSchema
// Validate function to use the schema
// export function validateStudent(student: unknown) {
//   try {
//     return StudentSchema.parse(student);
//   } catch (error) {
//     if (error instanceof ZodError) {
//       console.error(error.errors);
//     }
//     throw error;
//   }
// }
