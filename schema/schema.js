const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require('graphql');

const cities = [
  { name: 'Abuja', id: '1' },
  { name: 'Vancouver', id: '2' },
  { name: 'Bern', id: '3' }
];

const CityType = new GraphQLObjectType({
  name: 'City',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    city: {
      type: CityType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        console.log(args);

        return cities.find(city => city.id === args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({ query: RootQuery });
