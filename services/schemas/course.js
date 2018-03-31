import { buildSchema } from 'graphql';

const Schema = buildSchema(`
    type Query {
        course(id: Int!): Course
        courses(title: String): [Course]
    }
    
    type Course {
        id: Int
        title: String
        description: String
    }
`);

const courseData = [
  {
    id: 1,
    title: 'node',
    description: " Node js"
  },
  {
    id: 2,
    title: 'php',
    description: " PHP"

  },
  {
    id: 3,
    title: 'graphql',
    description: " GraphQL"
  },
  {
    id: 4,
    title: 'python',
    description: " Python"
  },
  {
    id: 5,
    title: 'vue',
    description: "Vue.js"

  }
];

export { courseData, Schema };