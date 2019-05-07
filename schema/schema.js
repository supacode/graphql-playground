const { GraphQLObjectType, GraphQLSchema, GraphQLID } = require('graphql');

const { CityType, cities } = require('./types/city');
const { CountryType, countries } = require('./types/country');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    city: {
      type: CityType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        return cities.find(city => `${city.id}` === args.id);
      }
    },
    country: {
      type: CountryType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return countries.find(country => `${country.id}` === args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({ query: RootQuery });
