const nodeGeocoder = require("node-geocoder");

const optionsGeoCoder = {
    provider: "google",
    apiKey: "xxxxx", // for Mapquest, OpenCage, Google Premier
    formatter: null // 'gpx', 'string', ...
}

const geocoder=nodeGeocoder(optionsGeoCoder)

const apiGeoCoder={
    pegarEnderecoPeloGeoCoder:(enderecoPassado)=>{
        return enderecoGeoCoderRemoto = geocoder.geocode(enderecoPassado)
    }
}
 
module.exports = apiGeoCoder;

