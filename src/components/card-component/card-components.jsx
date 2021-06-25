import React from "react";
import "./card-components.styles.css";
import ModalImage from "react-modal-image";
export const Card = (props) => {
  return (
    <div className="card-container">
      <ModalImage
        small={`https://live.staticflickr.com/${props.location.server}/${props.location.id}_${props.location.secret}.jpg`}
        large={`https://live.staticflickr.com/${props.location.server}/${props.location.id}_${props.location.secret}.jpg`}
        alt="Hello World!"
      />
      ;<p>{props.location.title}</p>
    </div>
  );
};
