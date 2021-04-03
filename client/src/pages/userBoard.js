import React from "react";
import {Jumbotron} from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";

export function UserBoard () {
    return (
        <>
        <Jumbotron></Jumbotron>
        < Container className="fluid" >
            <Row>
                <Col size="md-12">
                <h1>Hello</h1>
                </Col>
            </Row>
        </Container>
        
        </>
    );
}