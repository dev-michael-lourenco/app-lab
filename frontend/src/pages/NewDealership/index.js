import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'


import api from '../../services/api'

import logoImg from '../../assets/logo.svg'
import './styles.css'

export default function NewDealership(){
    
    const [name,setName] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [email,setEmail] = useState('');
    const [latitude,setLatitude] = useState('');
    const [longitude,setLongitude] = useState(''); 
    const [country,setCountry] = useState(''); 
    const [countryCode,setCountyCode] = useState('');
    const [city,setCity] = useState('');
    const [zipcode,setZipCode] = useState('');
    const [streetName,setStreetName] = useState('');
    const [streetNumber,setStreetNumber] = useState('');

    const ongId = localStorage.getItem('ongId')

    const history = useHistory();

    async function handleNewdealership(event){
        event.preventDefault();

        const data={
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
            streetNumber
            
        }

        try{
            await api.post('dealerships',data,{
                headers:{
                    Authorization:ongId,
                }
            })
            history.push('/profile')
        }catch{
            alert('Erro ao cadastrar caso. Tente novamente')
        }

    }

    return(
        <div className="new-dealership-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastrar nova concessionária</h1>
                    <p>Insira os dados nos campos.</p>
                    <Link className="back-link" to="/profile">
                       <FiArrowLeft size={16} color="#e02041" />
                       Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleNewdealership}>
                    <input 
                        placeholder="Nome da Concessionária"
                        value={name}
                        onChange={event=>setName(event.target.value)}
                    />

                    <textarea 
                        placeholder="Telefone"
                        value={phoneNumber}
                        onChange={event=>setPhoneNumber(event.target.value)}
                    />
                  <input 
                        placeholder="Rua"
                        value={streetName}
                        onChange={event=>setStreetName(event.target.value)}
                    />
                
                    <Link className="button" to="/profile">Cancelar</Link>
                    <button className="button" type="submit">Cadastrar</button>
                
                </form>
            </div>
        </div>
    )
    
}