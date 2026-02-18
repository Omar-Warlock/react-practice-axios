import axios from "axios";
const url = "http://localhost:3001/courses";

// Get all courses
export async function getAllCourses() {
  return await axios.get(url);
}

// Create New Course
export async function addCourse(course) {
  await axios.post(url, course);
}

// delete course
export async function deleteCourse(id) {
  await axios.delete(`${url}/${id}`);
}

// edit course
export async function editCourse(id, course) {
  await axios.put(`${url}/${id}`, course);
}

// get single Course
export async function getSingleCourse(id) {
  return await axios.get(`${url}/${id}`);
}
