import React from "react";

function TeamMember(props) {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="card my-3">
        <div className="card-header">
          <img style={{ maxWidth: "100%" }} src={props.info.img} alt="image" />
        </div>

        <div className="card-body">
          <h3>{props.info.name}</h3>
          <h5>{props.info.position}</h5>
          <h5>{props.info.phone}</h5>
          <h5>{props.info.email}</h5>
          <h5>{props.info.website}</h5>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
