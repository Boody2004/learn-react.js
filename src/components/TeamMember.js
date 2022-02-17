import React from "react";

function TeamMember(props) {
  return (
    <div
      className="col-md-4 col-sm-6"
      style={{ display: props.name ? "block" : "none" }}
    >
      <div className="card my-3">
        <div className="card-header">
          <img style={{ maxWidth: "100%" }} src={props.img} alt="image" />
        </div>

        <div
          className="card-body"
          style={{
            border:
              props.position && props.phone && props.email && props.website
                ? "white"
                : "3px solid  red",
          }}
        >
          <h3>Name: {props.name}</h3>
          <h5
            style={{
              display: props.position ? "block" : "none",
            }}
          >
            Position: {props.position}
          </h5>
          <h5
            style={{
              display: props.phone ? "block" : "none",
            }}
          >
            Phone: {props.phone}
          </h5>
          <h5
            style={{
              display: props.email ? "block" : "none",
            }}
          >
            Email: {props.email}
          </h5>
          <h5
            style={{
              display: props.website ? "block" : "none",
            }}
          >
            Website: {props.website}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
