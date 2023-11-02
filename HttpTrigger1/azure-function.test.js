// azure-function.test.js
const { createTestClient } = require('apollo-server-testing');
const { ApolloServer } = require('apollo-server-lambda');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const server = new ApolloServer({ typeDefs, resolvers });
const { query } = createTestClient(server);

test('hello resolver returns the correct greeting', async () => {
  const response = await query({ query: '{ hello }' });
  expect(response.data.hello).toBe('Hello, World!');
});
