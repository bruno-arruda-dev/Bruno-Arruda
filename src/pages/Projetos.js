import React from "react";
import ItemProjeto from "../components/ItemProjeto";
// importar imagens dos projetos
import "../styles/Projects.css";
import { ListaProjetos } from '../components/helpers/ListaProjetos';


export default function Projetos() {
    return (
        <div className="projects">
            <h1>Meus Projetos</h1>
            <div className="projectList">
                {ListaProjetos.map((project) => {
                    return <ItemProjeto nome={project.nome} imagem={project.imagem} />
                })}
            </div>
        </div>
    )
}