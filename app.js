const express = require('express');
const graphqlHTTP = require('express-graphql');
const graphql = require('graphql');

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: ''
  })
);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
