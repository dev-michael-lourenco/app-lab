import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'
import logoImg from '../../assets/logo.svg'

export default function Profile(){
    const[dealerships,setDealerships] = useState([]);

    const ongId = localStorage.getItem('ongId')
    const ongName = localStorage.getItem('ongName')

    const history = useHistory()

    useEffect(()=>{
        api.get('profile',{
            headers:{
                Authorization:ongId,
            }
        }).then(response=>{
            setDealerships(response.data)
            console.log("RESULTADO:",response.data)
        })
    },[ongId])

    async function handleDeleteDealership(id){
        try{
            await api.delete(`dealerships/${id}`,{
                headers:{
                    Authorization:ongId,
                }
            })
            // filrando registros para exibir apenas os diferentes do deletado 
            setDealerships(dealerships.filter(dealership=>dealership.id!==id))
        }catch (err){
            alert('Erro ao deletar caso, tente novamente.')
        }
    }
    
    function handleLogout(){
        localStorage.clear()

        history.push('/');
    }
    return(
        <div className="profile-container">
            <header>

                <img src={logoImg} alt="Be The Hero" />
                <span> Bem Vinda,{ongName}</span>

                <Link className="button" to="/dealerships/new">Cadastrar nova concessionaria</Link>
                
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                {dealerships.map(dealership=>(
                    <li key={dealership.id}>
                        <strong>UNIDADE:</strong>
                        <p>{dealership.name}</p>

                        <strong>TELEFONE:</strong>
                        <p>{dealership.phoneNumber}</p>

                        <strong>Rua:</strong>
                        <p>{dealership.streetName}</p>
                        <button onClick={()=>handleDeleteDealership(dealership.id)} type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

