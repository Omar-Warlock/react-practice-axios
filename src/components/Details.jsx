import React from "react";

const Details = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Course Details</h2>

        <div className="mb-3">
          <strong>Course ID:</strong>
          <p className="form-control">1</p>
        </div>

        <div className="mb-3">
          <strong>Course Name:</strong>
          <p className="form-control">React Basics</p>
        </div>

        <div className="mb-3">
          <strong>Author:</strong>
          <p className="form-control">John Doe</p>
        </div>

        <button className="btn btn-secondary w-100">Back</button>
      </div>
    </div>
  );
};

export default Details;
