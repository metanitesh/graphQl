const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type Pet {
    id: String!
    createdAt: Int
    name: String
    type: String
  }


  input PetInput{
    name: String
  }

  input addPetInput{
    name: String!
    type: String!
  }
  
  type Query {
    pets(input: PetInput): [Pet]
    pet(input: PetInput): Pet
  }

  type Mutation {
    addPet(input: addPetInput) : Pet
  }
`;

module.exports = typeDefs
