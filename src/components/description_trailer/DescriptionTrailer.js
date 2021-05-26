import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DescriptionTrailer = ({ movielist, match }) => {
  const film = movielist.find((el) => el.id.toString() === match.params.id);
  console.log({ film });
  return (
    <div className="container" style={{marginTop:"3em"}}>
        <h3>{film.title}</h3>
      <iframe
        width="724"
        height="409"
        src={film.trailer}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p style={{width:"724px", height:"200px",fontSize:"2rem",fontFamily:"roboto"}}>{film.description}</p>
      <Link to="/"><Button variant="primary">Go back</Button></Link>

      
    </div>
  );
};

export default DescriptionTrailer;
