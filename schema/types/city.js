const { GraphQLString, GraphQLID, GraphQLObjectType } = require('graphql');
const country = require('./country');

const cities = [
  { id: 1, name: 'Abuja', population: 3095000, countryId: 1 },
  { id: 2, name: 'Vancouver', population: 675218, countryId: 2 },
  { id: 3, name: 'Bern', population: 133115, countryId: 3 }
];

const CityType = new GraphQLObjectType({
  name: 'City',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    population: { type: GraphQLString },
    country: {
      type: require('./country').CountryType,
      resolve(parent, args) {
        const countries = require('./country').countries;
        return countries.find(
          country => `${country.id}` === `${parent.countryId}`
        );
      }
    }
  })
});

module.exports = { CityType, cities };
