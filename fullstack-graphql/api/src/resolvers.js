/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
      pets (_, {input}, {models}){
        // throw new Error("personal error")
        return models.Pet.findMany()
      },
      pet (_, {input}, {models}){

      }
    
  },

  Mutation : {
    addPet(_, {input}, {models}){
      return models.Pet.create(input)
      
    }
  }
  
}
