import React from "react";
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editMovie } from "../js/action";

const EditMovie = ({ handleClose, show,id }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit movie</Modal.Title>
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
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              dispatch(editMovie({title,posterUrl,description,rate,id}))
            }}
          >
            Edit Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditMovie;
