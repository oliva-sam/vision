import React from "react";
import { Container, Row, Col } from "../components/Grid";
import Modal from "@material-ui/core/Modal";
import { FormBtn, Input } from "../components/Form";


export function NoBoard () {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleBugSubmit = event => {
        event.preventDefault();
        console.log("form submitted");
    }

    const bugBody= (
        <>
         <h3 id="simple-modal-title">Thank you for your feedback!</h3>
        < form onSubmit={handleBugSubmit}> 
        <Input 
            type="text"
            name="Location"
            placeholder="Location of Bug"
        />

        <Input 
            type="text"
            name="Description"
            placeholder="Description of Bug"
        />

        <FormBtn>
            <p>send</p>
        </FormBtn>

        </form>
        </>
    );

    return (
        <>
        <Container className="fluid">
            <br/>
            <Row>
                <Col size="md-4"></Col>
                <Col size="md-4">
                    <button
                    type="button"
                    className="btn btn-info"
                    >logout</button>
                </Col>
                <Col size="md-4"></Col>
            </Row>
            <br/>
            <Row>
                <Col size="md-4"></Col>
                <Col size="md-4">
                    <button 
                    type="button" 
                    className="btn btn-warning"
                    onClick={handleOpen}
                    >report bug</button>

                    <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    >
                        {bugBody}
                    </Modal>
                </Col>
                <Col size="md-4"></Col>
            </Row>
        </Container>
        </>
    )
}