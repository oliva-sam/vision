import React from "react";
import { Jumbotron } from "../components/Jumbotron";
import { Container, Row, Col} from "../components/Grid";
import { NewGoal } from "../components/NewGoal";
import { Wrapper } from "../components/Wrapper";
import { GoalCard } from "../components/GoalCard";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
// import { List, Item } from "../components/List";


import API from "../utils/API";

export function UserBoard () {
    const [goals, setGoals] = useState([]);
    const { username } = useParams();
    // console.log(username);

    useEffect(() => {
        loadGoals()
    }, [goals.length]); // this is where I left off

    function loadGoals() {
        API.getGoals(username)
            .then(res => 
                setGoals(res.data)
            )
            .catch(err => console.log(err));
    };

    console.log(goals);
        
    return (
        <>
        <Jumbotron></Jumbotron>
        < Container className="fluid" >
            <Row>
                <Col size="md-12">
                {goals.length ? (

                <Wrapper>
                    {goals.map(goal => (
                        <GoalCard key={goal._id}
                            name={goal.category}
                            url={goal.url}
                        >
                        </GoalCard>
                    ))}
                    
                </Wrapper>
                )  : (
                    <h3>No Results to Display</h3>
                )}

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