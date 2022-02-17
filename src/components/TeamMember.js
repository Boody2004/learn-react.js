import React from "react";

function TeamMember(props) {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="card my-3">
        <div className="card-header">
          <img style={{ maxWidth: "100%" }} src={props.img} alt="image" />
        </div>

        <div className="card-body">
          <h3>{props.name}</h3>
          <h5>{props.position}</h5>
          <h5>{props.phone}</h5>
          <h5>{props.email}</h5>
          <h5>{props.website}</h5>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
