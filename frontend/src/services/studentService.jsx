import api from "../api/axios";

// Get All Students
export const getStudents = async () => {
  const response = await api.get("/students");
  return response.data;
};

// Add Student
export const addStudent = async (studentData) => {
  const response = await api.post("/students", studentData);
  return response.data;
};

// Update Student
export const updateStudent = async (id, studentData) => {
  const response = await api.put(`/students/${id}`, studentData);
  return response.data;
};

// Delete Student
export const deleteStudent = async (id) => {
  const response = await api.delete(`/students/${id}`);
  return response.data;
};