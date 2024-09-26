import { students } from "../../data/students";
import { courses } from "../../data/courses";
import { enrollments } from "../../data/enrollments";

// Function to get all students
export const getStudents = () => {
  return students;
};

// Function to get student by id
export const getStudentById = (id) => {
  return students.find((student) => student.id === id);
};
