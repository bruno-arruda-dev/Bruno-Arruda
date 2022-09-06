import React from "react";
import { Link, useLocation }    from 'react-router-dom';
import LinkedInIcon             from "@material-ui/icons/LinkedIn";
import GithubIcon               from "@material-ui/icons/GitHub";
import EmailIcon                from "@material-ui/icons/Email";
import "../styles/Home.css";
import avatarPortfolio from "../components/assets/avatarPortfolio.png";

export default function Home() {
    return (
        <div className="home">
            <div className="about">
                <div className="avatarConteiner">
                    <img id="avatar" src={avatarPortfolio}></img>
                </div>
                <h2>Olá, meu nome é Bruno Arruda</h2>
                <div className="prompt">
                    <p>Estudar desenvolvimento nos ajuda a criar coisas que podem impactar pessoas.</p>
                    <a href="https://www.linkedin.com/in/bruno-arruda-977637210/" target={"_blank"}>
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/BrunoArrm" target="_blank">
                        <GithubIcon />
                    </a>
                    <Link to="/contato">
                        <EmailIcon />
                    </Link>
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2>Front-End</h2>
                        <span>
                            HTML, CSS e REACT.
                        </span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>
                            Node.js, Firebird.
                        </span>
                    </li>
                    <li className="item">
                        <h2>Linguagens</h2>
                        <span>
                            JavaScript.
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    )
}