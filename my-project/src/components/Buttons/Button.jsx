import React from "react"

function Button (props) {
    return (
        <div>
          <button className="btn-animated" onClick={props.onClick}>
            {props.value}
          </button>
        </div>
      );
}

export default Button;