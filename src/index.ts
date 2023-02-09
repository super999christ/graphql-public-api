import express from 'express';
import { graphqlHTTP } from 'express-graphql';

// Creates an express server
const app = express();

// Setup middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.port || 8080;

app.listen(port, () => {
  console.log(`Express GraphQL Server is running on localhost:${port}/graphql`);
});