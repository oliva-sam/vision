//import { use } from "passport";
import React, { useState } from "react";
import {Jumbotron} from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import { FormBtn, Input } from "../components/Form";

export function Login () {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    return (
        <>
        <Jumbotron></Jumbotron>
        <Container className="fluid">
            <Row>
                <Col size="md-12">
                <h1>Vision</h1>
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                <h4>login / signup</h4>
                </Col>
            </Row>

            <Row>
                <Col size="md-6">
                <form>
                    <Input 
                    type="text"
                    name="username"
                    placeholder="Username"
                    />

                    <Input 
                    type="text"
                    name="password"
                    placeholder="password"
                    />

                    <FormBtn>
                        <p>Sign-Up / Log-In</p>
                    </FormBtn>
                </form>
                </Col>
            </Row>
        </Container>
        </>
    )
}