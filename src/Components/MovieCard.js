import React from "react";
import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../js/action";
import EditMovie from "./EditMovie";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="d-flex flex-column align-items-center col-md-4 mt-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <span>{"".padStart(movie.rate, "⭐")}</span>
          <div className="d-flex justify-content-around">
            <Button
              variant="secondary"
              style={{width:'80px', marginTop:'20px' }}
              onClick={() => dispatch(deleteMovie(movie.id))}
            >
              Delete
            </Button>
            <Button
              variant="secondary"
              style={{width:'80px', marginTop:'20px' }}
              onClick={() => {
                handleShow();
                setId(movie.id);
              }}
            >
              Edit
            </Button>
          </div>
        </Card.Body>
      </Card>
      <EditMovie handleClose={handleClose} show={show} id={id} />
    </div>
  );
};

export default MovieCard;
