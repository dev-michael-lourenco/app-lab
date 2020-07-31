const connection = require('../src/database/connection')

module.exports={
    async index(request,response){
        const user_id = request.headers.authorization
        
        const dealerships = await connection('dealerships')
        .where('user_id',user_id)
        .select('*')

        return response.json(dealerships)

    },
    async user_dealerships(request,response){
        const user_id = request.headers.authorization

        const dealerships = await connection('dealerships')
        .where('user_id',user_id)
        .select('*')

        return response.json(dealerships)
    }
}