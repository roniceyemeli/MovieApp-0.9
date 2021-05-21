import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const AddMovie = ({handleAdd}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [rate, setRate] = useState(0);
  const handleSubmit = (e) =>{
    e.preventDefault()
    const newMovie = {
      id:Math.random(),
      title,
      description,
      posterUrl:url,
      rate
    }
    handleAdd(newMovie)
  }
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            Title :{" "}
            <input
              type="text"
              className="form-control"
              placeholder="enter movie name"
              onChange={e =>setTitle(e.target.value)}
              value={title}
            />
            Description :
            <input
              type="text"
              className="form-control"
              placeholder="enter movie description"
              onChange={e =>setDescription(e.target.value)}
              value={description}
            />
            Image :
            <input
              type="url"
              className="form-control"
              placeholder="enter movie poster"
              onChange={e =>setUrl(e.target.value)}
              value={url}
            />
            Rate :
            <input
              type="number"
              className="form-control"
              placeholder="enter the movie rate"
              onChange={e =>setRate(e.target.value)}
              value={rate}
            /> <br/>
            <Button variant="primary" type="submit" onClick={handleClose}>
            Submit
          </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
