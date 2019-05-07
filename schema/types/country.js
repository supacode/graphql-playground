const { GraphQLObjectType, GraphQLString } = require('graphql');

const countries = [
  { id: 1, name: 'Nigeria', code: 'NG', continent: 'Africa' },
  { id: 2, name: 'Canada', code: 'CA', continent: 'North America' },
  { id: 3, name: 'Switzerland', code: 'CH', continent: 'Europe' }
];

const CountryType = new GraphQLObjectType({
  name: 'country',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    code: { type: GraphQLString },
    continent: { type: GraphQLString }
  })
});

module.exports = { CountryType, countries };
