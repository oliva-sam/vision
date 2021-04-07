import React from "react";
import Modal from "@material-ui/core/Modal";
import { FormBtn, Input, Select } from "../Form";

export function NewGoal () {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleNewGoalSubmit = event => {
        event.preventDefault();
        console.log("new goal added");
        handleClose();
    }

    const body = (
        <>
        <h3>Select a category and add a picture</h3>
        <form onSubmit={handleNewGoalSubmit}>
            <Select>
                <option>Education</option>
                <option>Financial</option>
                <option>Wellness</option>
            </Select>

            <Input
                type="text"
                name="picture"
                placeholder="text placeholder for picture upload"
            ></Input>

            <FormBtn>
                <p>save</p>
            </FormBtn>
        </form>
        </>
    );


    return (
        <div>
            <button type="button" onClick={handleOpen}>
                Add Goal
            </button>

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
