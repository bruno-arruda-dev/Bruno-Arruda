import React from 'react'
import { useNavigate } from "react-router-dom";

function ItemProjeto({ imagem, nome, id }) {

        const navigate = useNavigate();

  return (
    <div className='projectItem' onClick={() => {navigate("/projetos/" + id)}}>
        <div style={{ backgroundImage: `url(${imagem})`}} className="bgImage" />
        <h1> {nome} </h1>
    </div>
  )
}

export default ItemProjeto