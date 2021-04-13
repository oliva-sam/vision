import React, { useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import ListIcon from '@material-ui/icons/List';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { green } from '@material-ui/core/colors';
import { FormBtn, Input, Select } from "../Form";
import {useState} from "react";
import { useParams } from "react-router-dom";
import API from "../../utils/API";

export function NewTask(props) {
    const { username } = useParams();
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState();

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const useStyles = makeStyles((theme) => ({
        root: {
          width: "100%",
          maxWidth: 360,
          backgroundColor: theme.palette.background.paper
        }
    }));
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    const handleToggle = () => {
        if(!checked) {
            setChecked(true)
        } else {
            setChecked(false)
        }
    };

    const loadtasks = (id) => {
        API.getTasks(id)
            .then(res=>setTasks(res.data))
            .catch(err=>console.log(err))
    };

    const handleNewTaskSubmit = async () => {
        if(newTask) {
            const newTaskInfo = {
                title: newTask
            }
            const goalId = props.id
            API.saveTask(goalId, newTaskInfo)
             .then(res => console.log(res))
             .catch(err => console.log(err))
             window.location.reload("/user/" + username)
        } else {
            alert("please fill in a new step")
        }
    };


    const body = (
        <>
            <List className={classes.root}>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem button>
                    <ListItemText> {props.category} </ListItemText>
                    </ListItem>
                </List>
                <Divider />
                {tasks.map(task => {
                    return (
                    <ListItem
                        key={task._id}
                        dense
                        button
                    >
                        <Checkbox
                        edge="start"
                        onChange={handleToggle}
                        inputProps={{ "aria-labelledby": "primary checkbox" }}
                        />
                        <ListItemText id={task._id} primary={task.title} />
                    </ListItem>
                    );
                })}

                    <Input
                        type="text"
                        name="task-placeholder"
                        placeholder="new step"
                        onChange={event=>setNewTask(event.target.value)}
                        style={{width:"70%"}}
                    >
                    </Input>
                    <Fab color="secondary" aria-label="Add">
                        <AddIcon onClick={handleNewTaskSubmit}/>
                    </Fab>



            </List>
        </>
    );
    

    return (
        <>
        <button                                
        onClick={() => {
            handleOpen();
            loadtasks(props.id)
            }}>
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