import React from "react";
import "./MovieCard.css";
import ReactStars from "react-rating-stars-component";

import { Button, Card } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  return (
    <div className="col-sm-3">
      <Card style={{ width: "18rem", marginTop: "4em" }}>
        <Card.Img className="pic-card" variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <>
            <ReactStars
              count={5}
              isHalf={true}
              value={movie.rate}
              size={30}
              activeColor="#ffd700"
            />
          </>
          <Button variant="primary">Watch this movie</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
