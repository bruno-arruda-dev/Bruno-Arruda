import React from "react";
import { Link, useLocation }    from 'react-router-dom';
import LinkedInIcon             from "@material-ui/icons/LinkedIn";
import GithubIcon               from "@material-ui/icons/GitHub";
import EmailIcon                from "@material-ui/icons/Email";
import avatarPortfolio          from "../components/assets/avatarPortfolio.png";
import {    Group, 
            Hearing, 
            QuestionAnswer, 
            SentimentVerySatisfied, 
            ThumbUpAlt }        from "@material-ui/icons";
import html from '../components/assets/tecnologias/html.png';
import css from '../components/assets/tecnologias/css.png';
import react from '../components/assets/tecnologias/react.png';
import node from '../components/assets/tecnologias/node.png';
import javascript from '../components/assets/tecnologias/javascript.png';

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
                    <p>Acredito que estudar desenvolvimento de sistemas concede, à quem estuda, o privilégio de ajudar as pessoas através de idéias inovadoras.</p>
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
                <div className="dualSkills" id="soft">
                    <h1>Soft Skills</h1>
                    <ol className="list" id='soft'>
                        <li className="item">
                            <span>
                                Trabalho em equipe.
                            </span>
                            <Group />
                        </li>
                        <li className="item">
                            <span>
                                Comunicativo.
                            </span>
                            <QuestionAnswer />
                        </li>
                        <li className="item">
                            <span>
                                Flexível e de fácil adaptação.
                            </span>
                            <SentimentVerySatisfied />
                        </li>
                        <li className="item">
                            <span>
                                Resiliente e positivo.
                            </span>
                            <ThumbUpAlt />
                        </li>
                        <li className="item">
                            <span>
                                Aceito críticas.
                            </span>
                            <Hearing />
                        </li>
                    </ol>
                </div>
                <div className="dualSkills" id="hard">
                    <h1>Hard Skills</h1>
                    <ol className="list" id='hard'>
                        <li className="item">
                            <h3>Front-End</h3>
                            <img src={html} alt='html'></img>
                            <img src={css} alt='css'></img>
                            <img src={react} alt='react'></img>
                        </li>
                        <li className="item">
                            <h3>Back-End</h3>
                            <img src={node} alt='node'></img>
                        </li>
                        <li className="item">
                            <h3>Linguagens</h3>
                            <img src={javascript} alt='javascript'></img>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}