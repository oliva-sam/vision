import React from "react";
import { Col, Row, Container } from "../components/Grid";

export function NotFound() {
    return (
        <>
        <Container className="fluid">
            <Row>
                <Col size="md-12">
                    <h2>Where are you going? 🙃</h2>
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    <h4>404 Page Not Found </h4>
                </Col>
            </Row>
        </Container>
        </>
    );
}