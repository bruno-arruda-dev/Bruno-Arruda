import React from 'react'
import LinkedInIcon     from "@material-ui/icons/LinkedIn";
import GithubIcon       from "@material-ui/icons/GitHub";
import EmailIcon        from "@material-ui/icons/Email";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
          <a href="https://www.linkedin.com/in/bruno-arruda-977637210/" target={"_blank"}>
            <LinkedInIcon />
          </a>
          <a href="https://github.com/BrunoArrm" target="_blank">
              <GithubIcon />
          </a>
          <EmailIcon />
        </div>
        <div className='agradecimentos'>
          <p>&copy; 2022 Portfólio de Bruno Arruda</p>
          <p>
            Inspirado no Youtube: Canal 
            <a
              href='https://www.youtube.com/c/PedroTechnologies'
              className='agradecimentos--Youtube'
              target='_blank'>
                PedroTech
            </a> - Vídeo:
            <a 
              href="https://www.youtube.com/watch?v=x7mwVn2z3Sk&list=PLGo0z7iP9Ngciu3__BjPmbDbXtL-YTKxF&index=7&t=1445s"
              className="agradecimentos--Youtube"
              target='_blank'>
                 Code and Deploy A React Portfolio
            </a>
          </p>
        </div>
    </div>
  )
}

export default Footer