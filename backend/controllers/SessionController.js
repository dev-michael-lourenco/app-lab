const connection = require('../src/database/connection')

 module.exports={
     async create(request,response){
         const {id} = request.body

         const user=await connection('users')
         .where('id',id)
         .select('name')
         .first()

         if(!user){
            return response.status(400).json({error:"Nenhuma USER encontrada com este id"})
         }
            return response.json({user})
     }
 }