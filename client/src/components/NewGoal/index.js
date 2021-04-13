import React from "react";
import Modal from "@material-ui/core/Modal";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { FormBtn, Input, Select } from "../Form";
import {useState} from "react";
import API from "../../utils/API";


export function NewGoal () {

    const [category, setCategory] = useState();
    const [url, setUrl] = useState();

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleNewGoalSubmit = event => {
        event.preventDefault();
        console.log(category, url);
        const newGoal = { category: category, url: url };
        const user = window.$name;
        console.log(user);
        if (category && url) {
            API.saveGoal( user, newGoal)
            .then(res => {
                window.location.reload("/user/" + user)
                console.log(res)
            })
            .catch(err=>console.log(err))
        } else {
            alert(`please fill everything out`)
        }
        handleClose();
    }

    const body = (
        <>
        <h3>Select a category and add a picture</h3>
        <form onSubmit={handleNewGoalSubmit}>
            <Select 
            onChange={event=>setCategory(event.target.value)}>
                <option value="career">Career</option>
                <option value="education">Education</option>
                <option value="family">Family</option>
                <option value="financial">Financial</option>
                <option value="personal">Personal</option>
                <option value="wellness">Wellness</option>
            </Select>

            <Input
                type="text"
                name="picture"
                placeholder="enter url of image"
                onChange={event=>setUrl(event.target.value)}
            />

            <FormBtn>
                <p>save</p>
            </FormBtn>
        </form>
        </>
    );


    return (
        <div>
            <Fab color="primary" aria-label="Add">
                <AddIcon onClick={handleOpen}/>
            </Fab>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
            >
                {body}
            </Modal>
        </div>
    )
}
