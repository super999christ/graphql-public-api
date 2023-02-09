import { GraphQLObjectType, GraphQLString } from 'graphql';

const region = new GraphQLObjectType({
  name: 'Region',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'Region\'s id',
      resolve: (obj: ISOStandard): string => {
        return obj.id;
      }
    },
    iso2code: {
      type: GraphQLString,
      description: 'Region\'s ISO2 code',
      resolve: (obj: ISOStandard): string => {
        return obj.iso2code;
      }
    },
    value: {
      type: GraphQLString,
      description: 'Region\'s name',
      resolve: (obj: ISOStandard): string => {
        return obj.value;
      }
    },
  })
});

const country = new GraphQLObjectType({
  name: 'Country',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'Country\'s id',
      resolve: (obj: Country): string => {
        return obj.id;
      }
    },
    name: {
      type: GraphQLString,
      description: 'Country\'s name',
      resolve: (obj: Country): string => {
        return obj.name;
      }
    },
    iso2Code: {
      type: GraphQLString,
      description: 'Country\'s ISO2 Code',
      resolve: (obj: Country): string => {
        return obj.iso2Code;
      },
    },
    region: {
      type: region,
      resolve: (obj: Country): ISOStandard => {
        return obj.region;
      },
    }
  })
});

export default country;