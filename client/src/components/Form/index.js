import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control w3-input w3-round-large gamesearch" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} className="w3-button w3-teal w3-round-large gameSearch">
      {props.children}
    </button>
  );
}
