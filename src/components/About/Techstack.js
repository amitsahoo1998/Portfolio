import React from "react";
import {Col, Row} from "react-bootstrap";
import {
    DiAndroid,
    DiAws,
    DiGit,
    DiJava,
    DiJavascript1,
    DiLinux,
    DiMongodb,
    DiNodejs,
} from "react-icons/di";
import {SiFirebase, SiKotlin} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
          <DiAndroid/>
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiKotlin/>
        </Col>
      <Col xs={4} md={2} className="tech-icons">
          <DiJava/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
