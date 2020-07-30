//RETIRADOS DA LIVE https://www.youtube.com/watch?v=BBFvqb6Y43s (CANAL PROGRAMADOR A BORDO)

// base de dados aleatoria criada por mim
const concessionarias =[
    {
      "id": 4,
      "name": "APAE ITAPE",
      "email": "miriam@gmail.com",
      "phoneNumber": "2555557777",
      "latitude": "25.330",
      "longitude": "46.4458",
      "country": "Brasil",
      "countryCode": "055",
      "city": "Belford Roxo",
      "zipcode": "18200250",
      "streetName": "Rua Olimpio da Silva",
      "streetNumber": "28",
      "ong_id": "4c75e193",
      "whatsapp": "1234567",
      "uf": "RJ"
    },
    {
      "id": 5,
      "name": "APAE ITAPE",
      "email": "miriam@gmail.com",
      "phoneNumber": "2555557777",
      "latitude": "25.330",
      "longitude": "46.4458",
      "country": "Brasil",
      "countryCode": "055",
      "city": "Belford Roxo",
      "zipcode": "18200250",
      "streetName": "Rua Olimpio da Silva",
      "streetNumber": "28",
      "ong_id": "4c75e193",
      "whatsapp": "1234567",
      "uf": "SP"
    },
    {
      "id": 6,
      "name": "APAE ITAPE",
      "email": "miriam@gmail.com",
      "phoneNumber": "2555557777",
      "latitude": "25.330",
      "longitude": "46.4458",
      "country": "Brasil",
      "countryCode": "055",
      "city": "Belford Roxo",
      "zipcode": "18200250",
      "streetName": "Rua Olimpio da Silva",
      "streetNumber": "28",
      "ong_id": "4c75e193",
      "whatsapp": "1234567",
      "uf": "RJ"
    }
  ]

 
 
 // base numeros

 const numeros=[5,20,51,83,2,4,230]
  /*
  CALCULAR MÉDIA

  */

 const valorMedia = numeros.reduce(function(acumulador,valorAtual, index, arr){
    acumulador = acumulador + valorAtual

    if(index===arr,length-1){
        return acumulador/arr.length
    }
    return acumulador
 },0)

  /*
NORMALIZAR DADOS
*/
const concessionariasNormalizadas =concessionarias.reduce(function(acumulador, concessionaria){
    acumulador[concessionaria.id]=concessionaria;
    return acumulador;
},{})

// GENERALIZANDO ESTA FUNCAO
function normalizar(arr,chave){
    return arr.reduce(function(acumulador, item){
        acumulador[item[chave]]=item;
        return acumulador;
    },{})
}

/*
AGRUPAMENTOS
*/

// AGRUPA ARRAY POR DETERMINADA CHAVE


// GENERALIZANDO ESTA FUNÇÃO
function agrupaPor(arr, chave){
    return arr.reduce(function(acumulador, item){
        if(!acumulador[item[chave]]){
            acumulador[item[chave]]=[]
        }
        acumulador[item[chave]].push(item)
        return acumulador
    },{})
}
//EXEMPLO


  //const agrupadosPorUf = agrupaPor(concessionarias,"uf")
 // console.log('agrupadosPorUf',agrupadosPorUf)

// const concessionariasNormalizadasPadrao = normalizar(concessionarias,"id")
// console.log('concessionariasNormalizadasPadrao',concessionariasNormalizadasPadrao)
