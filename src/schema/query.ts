import { GraphQLObjectType } from 'graphql';
import country from './queries/country';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    country
  }),
});

export default query;