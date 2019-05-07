const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require('graphql');

const CityType = new GraphQLObjectType({
  name: 'City',
  fields: () => ({
    id: { type: GraphQLString },
    city: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    city: {
      type: CityType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        console.log(parent, args);
      }
    }
  }
});

module.exports = new GraphQLSchema({ query: RootQuery });
