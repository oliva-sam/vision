//import { use } from "passport";
import React, { useState } from "react";
import {Jumbotron} from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import { FormBtn, Input } from "../components/Form";
import API from "../utils/API";
import {useHistory} from "react-router-dom";


export function Login () {
    const history = useHistory();

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleUserSubmit = event => {
        event.preventDefault();
        const userInfo = { username, password };
        if (username && password) {
            API.loginUser(userInfo)
                .then(res => {
                    console.log(res)
                    window.$name = res.data.success
                    history.push("/user/" + res.data.success)
                })
                .catch(err=> {
                    console.log(err);
                    console.log(err.response);
                })
        } else {
            alert(`please enter a username & password`);
        }
    };

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
                <Col size="md-6">
                    <h3> log in / Sign Up</h3>
                    <form onSubmit={handleUserSubmit}>
                        <Input 
                        type="text"
                        name="username"
                        placeholder="username"
                        onChange={event =>setUsername(event.target.value)}
                        />

                        <Input 
                        type="text"
                        name="password"
                        placeholder="password"
                        onChange={event => setPassword(event.target.value)}
                        />

                        <FormBtn>
                            <p>Log-In / Sign-Up</p>
                        </FormBtn>
                    </form>
                </Col>
            </Row>
        </Container>
        </>
    )
}