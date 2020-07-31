const connection = require('../src/database/connection')
const crypto=require('crypto');

module.exports={
    async index(request, response){
        const {page=1} = request.query
        
        const [count] = await connection('dealerships').count()
        console.log(count)

        const dealerships= await connection('dealerships')
        .join('users','users.id','=','dealerships.user_id')
        .limit(5)
        .offset((page-1)*5)
        .select([
            'dealerships.*',
            'users.name',
            'users.email',
            'users.whatsapp',
            'users.city',
            'users.uf'
        ]);

        response.header('X-Total-Count',count['count(*)'])
        return response.json(dealerships);
    }
    ,
    async create(request, response){
        const {name,
            phoneNumber,
            email,
            latitude,
            longitude, 
            country, 
            countryCode,
            city,
            zipcode,
            streetName,
            streetNumber,
            }=request.body

        const user_id=request.headers.authorization

        // o [id] é uma desestrutura do resultado ques está no await
        // este id esta implicito pois na migration foi declarado como increments
            const [id] = await connection('dealerships').insert({
                name,
                phoneNumber,
                email,
                latitude,
                longitude, 
                country, 
                countryCode,
                city,
                zipcode,
                streetName,
                streetNumber,
                user_id
        })

        return response.json({id})
    },

    async delete(request,response){
        const {id} = request.params
        const user_id = request.headers.authorization

        const dealership = await connection('dealerships')
        .where('id',id)
        .select('user_id')
        .first();

        if(dealership.user_id!==user_id){
           return response.status(401).json({error:"Operação não autorizada"})
        }
        await connection('dealerships').where('id',id).delete();
        return response.status(204).send()
    }
}

