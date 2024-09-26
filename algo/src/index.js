import { getStudents, getStudentById } from "./functions/niv1/getStudents";
import {
  getCoursesNamesWithNumberOfEnrollments,
  getCoursesCount,
} from "./functions/niv1/getCourses";
import {
  getEnrollmentsPerStudent,
  getEnrollmentsPerStudentReduce,
} from "./functions/niv1/getEnrollments";
import { getAverageGradePerCourse } from "./functions/niv1/getGrade";

const logNested = (name, data) => {
  console.log(name, JSON.stringify(data, null, 2));
};

// 1 - get all students
const students = getStudents();
//console.log("🚀 ~ students : ", students);

// 2 - get student by id
const studentById = getStudentById(3);
//console.log("🚀 ~ studentById :", studentById);

// 3 - get all courses names with the number of students enrolled in each course
const coursesNamesWithNumberOfEnrollments =
  getCoursesNamesWithNumberOfEnrollments();
// console.log(   "🚀 ~ coursesNamesWithNumberOfEnrollments :",   coursesNamesWithNumberOfEnrollments );

// 4 - get the count of courses
const coursesCount = getCoursesCount();
// console.log("🚀 ~ coursesCount :", coursesCount);

// 5 - get the number of enrollments per student name
const enrollmentsPerStudent = getEnrollmentsPerStudent();
// console.log("🚀 ~ enrollmentsPerStudent :", enrollmentsPerStudent);

// 5.bis - get the number of enrollments per student name (with reduce)
const enrollmentsPerStudentReduce = getEnrollmentsPerStudentReduce();
// console.log("🚀 ~ enrollmentsPerStudentReduce :", enrollmentsPerStudentReduce);

// 6 - get the average grade for each course
const averageGradePerCourse = getAverageGradePerCourse();
console.log("🚀 ~ averageGradePerCourse :", averageGradePerCourse);
