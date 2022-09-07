import React from "react";
import { Link, useLocation }    from 'react-router-dom';
import LinkedInIcon             from "@material-ui/icons/LinkedIn";
import GithubIcon               from "@material-ui/icons/GitHub";
import EmailIcon                from "@material-ui/icons/Email";
import avatarPortfolio          from "../components/assets/avatarPortfolio.png";
import "../styles/Home.css";
import "../styles/Global.css";

export default function Home() {
    return (
        <div className="home">
            <div className="about">
                <div className="avatarConteiner">
                    <img id="avatar" src={avatarPortfolio}></img>
                </div>
                <h1>Olá, meu nome é Bruno Arruda</h1>
                <div className="prompt">
                    <p>Estudar desenvolvimento nos ajuda a criar coisas que podem impactar pessoas.</p>
                </div>
                <div className="icones">
                    <a href="https://www.linkedin.com/in/bruno-arruda-dev/" target={"_blank"}>
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