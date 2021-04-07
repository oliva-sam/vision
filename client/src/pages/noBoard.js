import React from "react";
import { Container, Row, Col } from "../components/Grid";

export function NoBoard () {
    return (
        <>
        <Container className="fluid">
            <br/>
            <Row>
                <Col size="md-4"></Col>
                <Col size="md-4">
                    <button
                    type="button"
                    className="btn btn-info"
                    >logout</button>
                </Col>
                <Col size="md-4"></Col>
            </Row>
            <br/>
            <Row>
                <Col size="md-4"></Col>
                <Col size="md-4">
                    <button 
                    type="button" 
                    className="btn btn-warning"
                    >report bug</button>
                </Col>
                <Col size="md-4"></Col>
            </Row>
        </Container>
        </>
    )
}