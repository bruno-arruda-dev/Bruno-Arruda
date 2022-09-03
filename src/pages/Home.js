import React from "react";
import LinkedInIcon     from "@material-ui/icons/LinkedIn";
import EmailIcon        from "@material-ui/icons/Email";
import GithubIcon       from "@material-ui/icons/GitHub";
import "../styles/Home.css";

export default function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2>Olá, Meu Nome é Bruno</h2>
                <div className="prompt">
                    <p>Um estudante de desenvolvimento apaixonado por aprender e criar.</p>
                    <LinkedInIcon />
                    <EmailIcon />
                    <GithubIcon />
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2>Front-End</h2>
                        <span>
                            Minhas skills de Front-End aqui
                        </span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>
                            Minhas Skills de Back-End aqui
                        </span>
                    </li>
                    <li className="item">
                        <h2>Linguagens</h2>
                        <span>
                            As linguagens de programação que conheço aqui
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    )
}