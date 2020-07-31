const concessionaria = {
    criarConcessionaria(    
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
        streetNumber)
        {
        return {
            concessionariaCriada:{
                name,
                name,
                phoneNumber,
                email,
                address:{
                    latitude,
                    longitude, 
                    country, 
                    countryCode,
                    city,
                    zipcode,
                    streetName,
                    streetNumber,
                }    
            }        
        }
    }
}
module.exports = concessionaria;

