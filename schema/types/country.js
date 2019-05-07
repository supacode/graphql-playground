const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

const countries = [
  { id: 1, name: 'Nigeria', code: 'NG', continent: 'Africa' },
  { id: 2, name: 'Canada', code: 'CA', continent: 'North America' },
  { id: 3, name: 'Switzerland', code: 'CH', continent: 'Europe' }
];

const CountryType = new GraphQLObjectType({
  name: 'Country',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    code: { type: GraphQLString },
    continent: { type: GraphQLString },
    cities: {
      type: new GraphQLList(require('./city').CityType),
      resolve(parent, args) {
        const cities = require('./city').cities;
        return cities.filter(city => `${city.countryId}` === `${parent.id}`);
      }
    }
  })
});

module.exports = { CountryType, countries };
