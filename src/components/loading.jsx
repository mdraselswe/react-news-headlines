import React from "react";

function loading() {
  return (
    <div className="d-flex align-items-center">
      <strong>Loading...</strong>
      <div
        className="spinner-border text-danger ml-auto"
        role="status"
        aria-hidden="true"
      ></div>
    </div>
  );
}

export default loading;
