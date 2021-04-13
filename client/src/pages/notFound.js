import React from "react";
import { Col, Row, Container } from "../components/Grid";
import {Jumbotron} from "../components/Jumbotron"

export function NotFound() {
    return (
        <>
        <Container className="fluid">
            <Jumbotron></Jumbotron>
            <Row>
                <Col size="md-4">
                </Col>
                <Col size="md-4">
                    <h2>Where are you going?🙃</h2>
                </Col>
                <Col size="md-4">
                </Col>
            </Row>
            <Row>
                 <Col size="md-4">
                </Col>
                <Col size="md-4">
                    <h4>404 Page Not Found </h4>
                </Col>
                <Col size="md-4">
                </Col>
            </Row>
        </Container>
        </>
    );
}