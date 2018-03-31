import { courseData } from '../../schemas/course';

const getCourseById = ({ id }) => {
  return courseData.find((course) => course.id === id);
};

const getCourses = ({ title }) => {
  return courseData.filter((course) => {
    if (!title) return course;
    if (course.title === title) {
      return course;
    }
  });
};

export {
  getCourseById,
  getCourses
};