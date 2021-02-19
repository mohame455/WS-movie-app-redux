import React from "react";
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addMovie } from "../js/action";

const AddMovie = ({ handleClose, show }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");

  const handleCloseModal=(e)=>{
    e.preventDefault();
    dispatch(addMovie({title,posterUrl,description,rate,id:Math.random()}));
    handleClose()
  }
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <Form.Control
            type="text"
            placeholder="posterUrl"
            onChange={(e) => setPosterUrl(e.target.value)}
          />
          <br />
          <Form.Control
            type="text"
            placeholder="description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <Form.Control
            type="number"
            placeholder="rate"
            onChange={(e) => setRate(e.target.value)}
          />
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
