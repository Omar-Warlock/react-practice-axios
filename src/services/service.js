import axios from "axios";
const url = "http://localhost:3001/courses";

export async function getAllCourses() {
  return await axios.get(url);
}
