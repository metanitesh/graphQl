const gql = require('graphql-tag');
const {ApolloServer} = require('apollo-server')

const typeDefs = gql`
  type User {
    name: String!
    phone: String
  }

  type Query {
    me: User!
  }
`

const resolvers = {
  Query: {
    me (){
      return {
        name: "Nitesh",
        phone: "8744041044"
      }
    }
  }
}

const server = new ApolloServer({
  typeDefs, 
  resolvers
})

server.listen(4000)
.then(() => console.log('listen on 4000'))
