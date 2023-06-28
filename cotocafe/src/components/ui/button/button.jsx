import React from "react";
import './button.css';

function Button({ children, minWidth}) {
  return (
    <button type="button" className="button" style={{minWidth: minWidth}}>
      {children}
    </button>
  );
}

export default Button;
