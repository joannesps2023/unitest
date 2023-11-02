    // azure-function.js
    const { ApolloServer } = require('@apollo/server');
    const { startServerAndCreateHandler } = require('@as-integrations/azure-functions');

    const typeDefs = require('./schema');
    const resolvers = require('./resolvers');
    
    const server = new ApolloServer({ typeDefs, resolvers });
    
    exports.graphqlHandler = startServerAndCreateHandler(server);