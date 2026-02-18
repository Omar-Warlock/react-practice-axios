import { useState } from "react";
import { addCourse } from "../services/service";

const Create = () => {
  const [course, setCourse] = useState({
    name: "",
    author: "",
  });
  function handleSubmit(e) {
    e.preventDefault();

    addCourse(course);
  }
  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Create Course</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Course Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter course name"
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Author</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter author name"
              onChange={(e) => setCourse({ ...course, author: e.target.value })}
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
