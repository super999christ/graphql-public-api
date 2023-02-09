import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';

// Creates an express server
const app = express();

// Setup middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema,
}));

const port = process.env.port || 8080;

app.listen(port, () => {
  console.log(`Express GraphQL Server is running on localhost:${port}/graphql`);
});