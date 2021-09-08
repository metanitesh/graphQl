/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
      pets (_, __, {models}){
        return models.Pet.findMany()
      }
    
  }
  
}
