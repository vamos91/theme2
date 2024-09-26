// import data
import { enrollments } from "../../data/enrollments";
import { students } from "../../data/students";

// get the number of enrollments per student name
export const getEnrollmentsPerStudent = () => {
  return students.map((student) => {
    return {
      name: student.first_name + " " + student.last_name,
      numberOfEnrollments: enrollments.filter((enrollment) => {
        return enrollment.student_id === student.id;
      }).length,
    };
  });
};
//
// get the number of enrollments per student name (with reduce)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
export const getEnrollmentsPerStudentReduce = () => {
  // map over the students array
  return students.map((student) => {
    return {
      // create a new object with the student's full name
      name: student.first_name + " " + student.last_name,
      // acc is the accumulator
      numberOfEnrollments: enrollments.reduce((acc, enrollment) => {
        // if the student_id in the enrollment object is equal to the student id
        if (enrollment.student_id === student.id) {
          // increment the accumulator
          return acc + 1;
        } else {
          // return the accumulator
          return acc;
        }
        // set the initial value of the accumulator to 0
      }, 0),
    };
  });
};
