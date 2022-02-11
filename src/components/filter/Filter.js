import React from "react";
import { Form, FormControl, Navbar } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const Filter = ({handleChange, title, ratingChanged, rate}) => {
  return (
    <Navbar
      bg="dark"
      variant="black"
      style={{ display: "flex", height: "5em" }}
    >
      <Navbar.Brand
        href="#home"
        style={{ marginLeft: "3em", color: "red", fontSize: "3em" }}
      >
        Movieclub<sup style={{ fontSize: "20%", padding: "2%" }}>mc</sup>{" "}
      </Navbar.Brand>
      <Form inline style={{ marginLeft: "50%" }}>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          onChange={handleChange}
          value={title}
        />
      </Form>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={30}
        activeColor="#ffd700"
        isHalf={true}
      />
    </Navbar>
  );
};

export default Filter;
