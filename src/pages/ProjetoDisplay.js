import React from 'react'
import { useParams } from "react-router-dom";
import { ListaProjetos } from '../components/helpers/ListaProjetos';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../styles/ProjectDisplay.css';

function ProjetoDisplay() {

    const { id } = useParams();
    const project = ListaProjetos [id];

  return (
    <div className='project'>
        <h1>{project.nome}</h1>
        <img src={project.imagem} />
        <div className='descricao'>
          <p><b>Skills:</b> {project.skills}</p>
          <p><b>Descrição:</b> {project.descricao1}</p>
          <p className='resumo'>{project.descricao2}</p>
        </div>
        <a href={project.link} target="_blank">
          <GitHubIcon />
        </a>
    </div>
  )
}

export default ProjetoDisplay