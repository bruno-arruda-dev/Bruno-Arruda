import React from 'react'

function ItemProjeto({imagem, nome}) {
  return (
    <div className='projectItem'>
        <div style={{ backgroundImage: `url(${imagem})`}} className="bgImage" />
        <h1> {nome} </h1>
    </div>
  )
}

export default ItemProjeto