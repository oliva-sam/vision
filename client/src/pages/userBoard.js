import React from "react";
import { Jumbotron } from "../components/Jumbotron";
import { Container, Row, Col} from "../components/Grid";
import { NewGoal } from "../components/NewGoal";
import { Wrapper } from "../components/Wrapper";
import { GoalCard } from "../components/GoalCard";
import {useState, useEffect} from "react";

export function UserBoard () {

    // I need a get request upon loading
    
    return (
        <>
        <Jumbotron></Jumbotron>
        < Container className="fluid" >
            <Row>
                <Col size="md-12">
                <Wrapper>
                    {/* This is where I'll map through the request and add the goals as cards */}
                    <GoalCard
                        name="placeholder name"
                        category="example"
                    />
                </Wrapper>
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                < NewGoal></NewGoal>
                </Col>
            </Row>
        </Container>


        
        </>
    );
}