const axios =require('axios');
const concessionariaDataMock = require('./providers/concessionariaDataMock.js')
const concessionariaModel = require('./model/concessionariaModel.js')
//const geoCoderProvider = require('./provider/geocoder.js')

const fakeGeoCoderMock = require('./providers/fakeGeoCoderMock.js')
//console.log("FAKE:"+JSON.stringify(fakeGeoCoderMock))
function tratarConcessionaria(){
    
    var concessionaria = concessionariaDataMock

    var {streetName, streetNumber, city, country, countryCode} = concessionaria

    const enderecoParaGeoCoder=`${streetName} ${streetNumber} ${city} ${country} ${countryCode}`

    //geoCoderProvider.pegarEnderecoPeloGeoCoder(enderecoParaGeoCoder)
    //fakeGeoCoderMock.pegarEnderecoPeloGeoCoder(enderecoParaGeoCoder) 
    async function fakeTratarGeocoder (objeto)  {
      return await objeto
    }

    fakeTratarGeocoder(fakeGeoCoderMock).then((enderecoGeoCodeRecebido)=>{
      console.log("RECEBIDO:"+enderecoGeoCodeRecebido)
        let {
            latitude,
            longitude, 
            country, 
            countryCode,
            city,
            zipcode,
            streetName,
            streetNumber,
            } = enderecoGeoCodeRecebido

        concessionaria.latitude = latitude
        console.log("RECEBIDO 2:"+ typeof(enderecoGeoCodeRecebido))
        console.log("LATITUDE: "+concessionaria.latitude + ' ' + latitude);
        concessionaria.longitude = longitude
        concessionaria.zipcode = zipcode

        let novaConcessionaria = concessionariaModel.criarConcessionaria(
          concessionaria.name,
          concessionaria.phoneNumber,
          concessionaria.email,
          concessionaria.latitude,
          concessionaria.longitude, 
          concessionaria.country, 
          concessionaria.countryCode,
          concessionaria.city,
          concessionaria.zipcode,
          concessionaria.streetName,
          concessionaria.streetNumber,
          concessionaria.latitude,
          concessionaria.longitude
        )
        return novaConcessionaria;
      
    }).then((novaConcessionaria)=>{
        // ENVIAR PRO AXIOS 
        inserirConcessionariaNoWordPress(novaConcessionaria)
    })
  
}

async function inserirConcessionariaNoWordPress(nova){

  var {concessionariaCriada}=nova

  //var concessionariaParaEnviar =JSON.stringify(concessionariaCriada,null,2)

  console.log(concessionariaCriada)

 /* const teste = await axios({
    method: 'POST',
    url: 'url aqui',
    headers:{
        Authorization:"Basic xxxxxxxxxxxxxxxxxxxx"
    },
    data:concessionariaCriada
  }).catch(error=>{
    console.log(error)
  });*/

  //console.log(teste);
  
  return concessionariaCriada;
}

tratarConcessionaria();

