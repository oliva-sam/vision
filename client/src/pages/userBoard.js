import React from "react";
import { Jumbotron } from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import { NewGoal } from "../components/NewGoal";
import { NewTask } from "../components/NewTask";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import API from "../utils/API";

export function UserBoard() {
    const [goals, setGoals] = useState([]);
    const { username } = useParams();

    useEffect(() => {
        function loadGoals() {
            API.getGoals(username)
                .then(res =>
                    setGoals(res.data)
                )
                .catch(err => console.log(err));
        };
        loadGoals()
    }, []);

    function deleteGoal(id) {
        API.deleteGoal(id)
            .then(res => {
                API.getGoals(username)
                    .then(res =>
                        setGoals(res.data)
                    )
                    .catch(err => console.log(err));
                window.location.reload("/user/" + username)
            })
            .catch(err => console.log(err));
    };

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: "none",
        },
        gridList: {
            width: 3000,
            height: 1000,
        },
        titleBar: {
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
              'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
          },
        icon:{
            color:"gray",
        }
    }));

    const classes = useStyles();

    return (
        <>

            < Container className="fluid">
                <Row>
                    <Col size="md-12">
                     <Jumbotron></Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        < NewGoal></NewGoal>
                    </Col>
                </Row>

                <Row>
                    <Col size="md-12">
                        {goals.length ? (
                            <div className={classes.root}>
                                <GridList cellheight={1000} className={classes.gridList} cols={3}>
                                    {goals.map(goal => (
                                        <GridListTile key={goal._id} cols={1}>
                                            <img src={goal.url} alt={goal.category} />
                                            <GridListTileBar
                                                title={goal.category}
                                                titlePosition="top"
                                                style={{background: "none"}}
                                                actionIcon={
                                                    <IconButton className={classes.icon} onClick={() => deleteGoal(goal._id)}>
                                                        <DeleteForeverIcon/>
                                                    </IconButton>
                                                }
                                                />
                                            <GridListTileBar
                                                titlePosition="bottom"
                                                style={{background: "none"}}
                                                actionIcon={
                                                    <IconButton className={classes.icon} >
                                                         <NewTask
                                                            id={goal._id}
                                                            category={goal.category}
                                                         />
                                                    </IconButton>
                                                }
                                                />

                                            </GridListTile>
                                    ))}
                                </GridList>
                            </div>

                        ) : (
                            <p>  </p>
                        )}

                    </Col>
                </Row>

            </Container>
        </>
    );
}