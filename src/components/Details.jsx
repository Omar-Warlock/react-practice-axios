import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleCourse } from "../services/service";

const Details = () => {
  const [course, setCourse] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getSingleCourse(id).then((res) => setCourse(res.data));
  }, []);
  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Course Details</h2>

        <div className="mb-3">
          <strong>Course ID:</strong>
          <p className="form-control">{course?.id}</p>
        </div>

        <div className="mb-3">
          <strong>Course Name:</strong>
          <p className="form-control">{course?.name}</p>
        </div>

        <div className="mb-3">
          <strong>Author:</strong>
          <p className="form-control">{course?.author}</p>
        </div>

        <button className="btn btn-secondary w-100">Back</button>
      </div>
    </div>
  );
};

export default Details;
