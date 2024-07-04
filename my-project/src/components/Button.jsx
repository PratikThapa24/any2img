import React from "react"

function Button (props) {
    return (
        <div>
          <button className="btn-animated">
            {props.value}
          </button>
        </div>
      );
}

export default Button;