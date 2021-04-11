import React from "react";
import { Jumbotron } from "../components/Jumbotron";
import { Container, Row, Col} from "../components/Grid";
import { NewGoal } from "../components/NewGoal";
import { NewTask } from "../components/NewTask";
import { Wrapper } from "../components/Wrapper";
import { GoalCard } from "../components/GoalCard";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// import { List, Item } from "../components/List";

import API from "../utils/API";

export function UserBoard () {
    const [goals, setGoals] = useState([]);
    const { username } = useParams();
    // console.log(username);

    useEffect(() => {
        loadGoals()
    },[]); 

    function loadGoals() {
        API.getGoals(username)
            .then(res => 
                setGoals(res.data)
            )
            .catch(err => console.log(err));
    };

    function deleteGoal(id) {
        console.log("goal deleted")
        console.log(id);
    };

    // console.log(goals);
        
    return (
        <>
        <Jumbotron></Jumbotron>
        < Container className="fluid" >
             <Row>
                <Col size="md-12">
                < NewGoal></NewGoal>
                </Col>
            </Row>

            <Row>
                <Col size="md-12">
                {goals.length ? (

                <Wrapper>
                    {goals.map(goal => (
                        <GoalCard key={goal._id}
                            name={goal.category}
                            url={goal.url} 
                        >
                            <button                                 
                            onClick={() => deleteGoal(goal._id)}>
                            <DeleteForeverIcon />
                            </button>

                            <NewTask
                            id={goal._id}
                            category={goal.category}
                            ></NewTask>

                        </GoalCard>
                    ))}
                    
                </Wrapper>
                )  : (
                    <p>  </p>
                )}

                </Col>
            </Row>

        </Container>        
        </>
    );
}