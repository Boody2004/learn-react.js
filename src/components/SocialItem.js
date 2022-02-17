import React from "react";

function SocialItem(props) {
  return (
    <li className="list-group-item">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <input type="checkbox" id={props.smaillMedia} />
          <label className="px-3" htmlFor={props.smaillMedia}>
            {props.media}
          </label>
        </div>

        <img src={props.img} alt={`Icon of ${props.media} `} />
      </div>
    </li>
  );
}

export default SocialItem;
