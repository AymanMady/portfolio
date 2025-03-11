import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Volta from "../../Assets/Projects/volta.svg";
import SalleMarche from "../../Assets/Projects/salle_marche.png";
import InventoryManagement from "../../Assets/Projects/InventoryManagement.png";


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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SalleMarche}
              isBlog={false}
              title="Salle de marche"
              description="SalleDeMarche is a web application developed with Django to streamline and optimize the management of the market room within El Amana Bank. This project focuses on monitoring financial market operations, tracking forex activities, managing transactions, and generating insightful reports."
              ghLink="https://github.com/AymanMady/salle_de_marche"
              // demoLink="https://voltasoftware.com/en"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={InventoryManagement}
              isBlog={false}
              title="InventoryManagement"
              description="InventoryManagement is a web application developed with Django to simplify and optimize inventory management within the Ministry of Higher Education. This project centralizes the tracking of material resources, manages stock, generates reports, and improves the traceability of equipment."
              ghLink="https://github.com/AymanMady/salle_de_marche"
              // demoLink="https://voltasoftware.com/en"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
