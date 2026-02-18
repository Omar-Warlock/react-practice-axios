import React from "react";

const Edit = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Edit Course</h2>

        <form>
          <div className="mb-3">
            <label className="form-label">Course ID</label>
            <input type="text" className="form-control" value="1" disabled />
          </div>

          <div className="mb-3">
            <label className="form-label">Course Name</label>
            <input
              type="text"
              className="form-control"
              defaultValue="React Basics"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Author</label>
            <input
              type="text"
              className="form-control"
              defaultValue="John Doe"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
