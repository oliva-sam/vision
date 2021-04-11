import React from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import ListIcon from '@material-ui/icons/List';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { green } from '@material-ui/core/colors';
import { FormBtn, Input, Select } from "../Form";
import {useState} from "react";
import API from "../../utils/API";

export function NewTask(props) {
    const [tasks, setTasks] = useState();

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    function handleSomething(id) {
        console.log("new task")
        console.log("this is the id of the goal" + id)
        handleClose();
    };

    function addTask() {
        console.log("add task");
    }

    const useStyles = makeStyles((theme) => ({
        root: {
          width: "100%",
          maxWidth: 360,
          backgroundColor: theme.palette.background.paper
        }
    }));
    const classes = useStyles();
    const [checked, setChecked] = React.useState([0]);
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
        newChecked.push(value);
        } else {
        newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };


    const body = (
        <>
            <h3>hi</h3>
            <button onClick={() => handleSomething(props.id)}>Done with tasks</button>
            <List className={classes.root}>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem button>
                    <ListItemText> {props.category} </ListItemText>
                    </ListItem>
                </List>
                <Divider />
                {[0, 1, 2, 3].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                    <ListItem
                        key={value}
                        role={undefined}
                        dense
                        button
                        onClick={handleToggle(value)}
                    >
                        <Checkbox
                        edge="start"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        inputProps={{ "aria-labelledby": labelId }}
                        />
                        <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                        {/* <DeleteForeverIcon /> */}
                    </ListItem>
                    );
                })}
                <Fab color="secondary" aria-label="Add">
                 <AddIcon onClick={addTask}/>
                </Fab>

            </List>
        </>
    );
    

    return (
        <>
        <button                                 
        onClick={handleOpen}>
        <ListIcon/>
        </button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
        >
            {body}
         </Modal>
        </>
    );
}