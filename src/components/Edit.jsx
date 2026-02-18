import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editCourse, getSingleCourse } from "../services/service";

const Edit = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({
    id: "",
    name: "",
    author: "",
  });
  useEffect(() => {
    getSingleCourse(id).then((res) => setCourse(res.data));
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    editCourse(id, course);
  }
  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Edit Course</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Course ID</label>
            <input
              type="text"
              className="form-control"
              value={course.id}
              disabled
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Course Name</label>
            <input
              type="text"
              className="form-control"
              defaultValue="React Basics"
              value={course.name}
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Author</label>
            <input
              type="text"
              className="form-control"
              defaultValue="John Doe"
              onChange={(e) => setCourse({ ...course, author: e.target.value })}
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
