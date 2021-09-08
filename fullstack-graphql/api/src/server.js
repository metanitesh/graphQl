const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const {models, db} = require('./db')

const server = new ApolloServer({
  typeDefs, 
  resolvers, 
  context() {
    return {
      models
    }
  }})

server.listen(5000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
})
