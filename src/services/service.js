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
