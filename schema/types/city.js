const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID
} = require('graphql');

const cities = [
  { id: 1, name: 'Abuja', population: 3095000 },
  { id: 2, name: 'Vancouver', population: 675218 },
  { id: 3, name: 'Bern', population: 133115 }
];

const CityType = new GraphQLObjectType({
  name: 'City',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    population: { type: GraphQLString }
  })
});

module.exports = { CityType, cities };
