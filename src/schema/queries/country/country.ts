import { GraphQLString, GraphQLNonNull, GraphQLError } from 'graphql';
import { getCountry } from '../../../apis';
import { validateISO } from '../../../validations';
import { default as countryType } from './country.type';

const country = {
  type: countryType,
  args: {
    code: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (_: any, { code }: { code: string }): Promise<Country> => {
    // Validation of query parameters
    if (!validateISO(code)) {
      throw new GraphQLError("Code should be ISO2 or ISO3");
    }
    
    return getCountry(code);
  }
};

export default country;