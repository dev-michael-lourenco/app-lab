
exports.up = function(knex) {
    return knex.schema.createTable('dealerships',function(table){
        table.increments()
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('phoneNumber').notNullable()
        table.string('latitude').notNullable()
        table.string('longitude').notNullable()
        table.string('country').notNullable()
        table.string('countryCode').notNullable()
        table.string('city').notNullable()
        table.string('zipcode')
        table.string('streetName').notNullable()
        table.string('streetNumber').notNullable()   

        table.string('ong_id').notNullable()
      
        table.foreign('ong_id').references('id').inTable('ongs')

        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('dealerships')
};
