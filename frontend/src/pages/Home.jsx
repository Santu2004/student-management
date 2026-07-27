import { useEffect, useState } from "react";
import api from "../api/axios";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";

const Home = () => {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  // Fetch all students
  const fetchStudents = async () => {
    try {
      const response = await api.get("/students");
      setStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Load students when page opens
  useEffect(() => {
    fetchStudents();
  }, []);

  // Add or Update Student
  const handleSubmit = async (studentData) => {
    try {
      if (editingStudent) {
        await api.put(`/students/${editingStudent._id}`, studentData);
        setEditingStudent(null);
      } else {
        await api.post("/students", studentData);
      }

      fetchStudents();
    } catch (error) {
      console.log(error);
    }
  };

  // Edit Student
  const handleEdit = (student) => {
    setEditingStudent(student);
  };

  // Delete Student
  const handleDelete = async (id) => {
    try {
      await api.delete(`/students/${id}`);
      fetchStudents();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Student Management System</h1>

      <StudentForm
        onSubmit={handleSubmit}
        editingStudent={editingStudent}
      />

      <StudentList
        students={students}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Home;