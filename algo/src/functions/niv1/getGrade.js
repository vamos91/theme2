// import data
import { enrollments } from "../../data/enrollments";
import { results } from "../../data/results";
import { courses } from "../../data/courses";

// get the average grade for each course
export const getAverageGradePerCourse = () => {
  // map over the courses array
  return courses.map((course) => {
    // find all the enrollments for the course
    const courseEnrollments = enrollments.filter((enrollment) => {
      return enrollment.course_id === course.id;
    });
    // find all the results for the course
    const courseResults = results.filter((result) => {
      return courseEnrollments.find((enrollment) => {
        return enrollment.id === result.enrollment_id;
      });
    });

    // create a new object with the course name and the average grade
    return {
      name: course.course_name,
      // calculate the average grade for the course
      // ternary operator : condition ? valueIfTrue : valueIfFalse (to prevent division by 0)
      averageGrade: courseResults.length
        ? courseResults.reduce((acc, result) => {
            return acc + result.grade;
          }, 0) / courseResults.length
        : "no results",
    };
  });
};
