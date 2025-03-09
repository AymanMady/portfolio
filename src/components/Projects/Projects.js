import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Volta from "../../Assets/Projects/volta.svg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Volta}
              isBlog={false}
              title="Volta"
              description="Volta is an AI-powered platform designed to modernize B2B commerce by automating orders, boosting sales, optimizing costs, and enhancing collaboration. Built to help brands, wholesalers, and distributors streamline operations and drive growth, Volta empowers businesses with digital-first solutions that adapt to the evolving market demands."
              demoLink="https://voltasoftware.com/en"
            />
          </Col>
        </Row>
        {/* <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Volta}
              isBlog={false}
              title="Volta"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://voltasoftware.com/en"
            />
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Projects;
