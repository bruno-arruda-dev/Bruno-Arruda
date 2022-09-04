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
                {/* O array "ListaProjetos" é chamado com a função "map", que percorrerá cada item do array e irá retornar as propriedades "nome" e "imagem". */}
                {ListaProjetos.map((project, idx) => {
                    return <ItemProjeto id={idx} nome={project.nome} imagem={project.imagem} />
                })}
            </div>
        </div>
    )
}