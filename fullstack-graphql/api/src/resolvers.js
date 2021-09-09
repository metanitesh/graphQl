/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
      pets (_, {input}, {models}){
        throw new Error("personal error")
        return models.Pet.findMany().filter( pet => pet.name === input.name)
      },
      pet (_, {input}, {models}){

      }
    
  }
  
}
