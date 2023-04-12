import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experiencia() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">

      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - Cursando"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Carreira Full-Stack Web.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Alura.
          </h4>
          <p>Orgulhosamente matriculado em uma das melhores escolas de programação online do Brasil, na qual estudo todos os dias com muita disciplina e aproveito sua extensa biblioteca para tirar dúvidas sobre projetos nos quais eventualmente me envolvo.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - Completo"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full-Stack Web.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Imã Learning Place, turma GODEV 2022, Goiânia-GO.
          </h4>
          <p>Curso ministrado ao vivo com professores, projetos e exercícios.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - Cursando"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Técnico em Implantação de Sistemas.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Integra Engenharia de Sistemas, Goiânia-GO
          </h4>
          <p>
            Implanto sistemas ERP, desenvolvidos na empresa Integra Engenharia, em parceiros clientes, os treino nas ferramentas mais adequadas e ajudo a aprimorar seus processos internos.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - Cursando"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            DevMedia.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Carreira Full-Stack web.
          </h4>

          <p>Estudando desenvolvimento web com as tecnologias mais requisitadas pelo mercado.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - Cursando"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Análise e Desenvolvimento de Sistemas.
          </h3>
          <h4>
            Tecnólogo, Universidade Paulista, Goiás.
          </h4>
          <p> Cursando último período em Análise e Desenvolvimento de Sistemas.</p>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
    </div>
  );
}

export default Experiencia;