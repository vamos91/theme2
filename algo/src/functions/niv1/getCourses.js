// import data
import { courses } from "../../data/courses";
import { enrollments } from "../../data/enrollments";

// get all courses names with the number of students enrolled in each course
export const getCoursesNamesWithNumberOfEnrollments = () => {
  return courses.map((course) => {
    return {
      name: course.course_name,
      numberOfStudents: enrollments.filter((enrollment) => {
        return enrollment.course_id === course.id;
      }).length,
    };
  });
};

// get the count of courses
export const getCoursesCount = () => {
  return courses.length;
};

