const connection = require('../src/database/connection')

module.exports={
    async index(request,response){
        const ong_id = request.headers.authorization
        
        const dealerships = await connection('dealerships')
        .where('ong_id',ong_id)
        .select('*')

        return response.json(dealerships)

    },
    async ong_incidents(request,response){
        const ong_id = request.headers.authorization

        const incidents = await connection('incidents')
        .where('ong_id',ong_id)
        .select('*')

        return response.json(incidents)
    }
}