import express from 'express';
import express_graphql from 'express-graphql';
import { getCourseById, getCourses } from './services/controllers/course/index';
import { Schema } from './services/schemas/course';

const app = express();

const root = {
  course: getCourseById,
  courses: getCourses
};

app.use('/course', express_graphql({
  schema: Schema,
  rootValue: root,
  graphiql: true
}));

app.listen(3000, () => {
  console.log(3000);
})
;
