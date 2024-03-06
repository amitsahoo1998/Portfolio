import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Notes App"
              description="Compose Movies App is a App which Provide latest Movie details quick overview ,Imdb Rating , Movie Poster & language details . This app is built using Jetpack Compose , Ktor client Clean + MVVM architecture(Data ,Domain, Presentation layer) "
              ghLink="https://github.com/amitsahoo1998/Notes-Apps"
              demoLink="https://play.google.com/store/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="News App"
              description="NewsApp is a tiny little app which brings the latest news from Google news. Internally app uses News API to fetch the details. This app is built using Clean + MVVM architecture(Data ,Domain, Presentation layer), uses Retrofit2 for making API calls and uses Room database to cache the data. "
              ghLink="https://github.com/amitsahoo1998/NewsApps"
              demoLink="https://play.google.com/store/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/amitsahoo1998/Editor.io"
              demoLink="https://play.google.com/store/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
