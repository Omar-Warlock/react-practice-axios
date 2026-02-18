import React, { useEffect, useState } from "react";
import { getAllCourses } from "../services/service";

const Home = () => {
  const [courses, setCourses] = useState([]);

  const handleDelete = (id) => {
    const filteredCourses = courses.filter((course) => course.id !== id);
    setCourses(filteredCourses);
  };

  const handleUpdate = (id) => {
    alert(`Update course with ID: ${id}`);
  };

  const handleShow = (course) => {
    alert(
      `Course Details:\n\nID: ${course.id}\nName: ${course.name}\nAuthor: ${course.author}`,
    );
  };
  useEffect(() => {
    getAllCourses().then((res) => setCourses(res.data));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Course List</h2>

      <table className="table table-bordered table-striped table-hover shadow">
        <thead className="table-dark text-center">
          <tr>
            <th>Course ID</th>
            <th>Name</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.author}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => handleUpdate(course.id)}
                >
                  Update
                </button>

                <button
                  className="btn btn-danger btn-sm me-2"
                  onClick={() => handleDelete(course.id)}
                >
                  Delete
                </button>

                <button
                  className="btn btn-success btn-sm"
                  onClick={() => handleShow(course)}
                >
                  Show
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
