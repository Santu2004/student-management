import { useEffect, useState } from "react";

import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "../services/studentService";

import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";

function Home() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  // Fetch Students
  const fetchStudents = async () => {
    try {
      const data = await getStudents();
      setStudents(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Add or Update Student
  const handleSubmit = async (studentData) => {
    try {
      if (editingStudent) {
        await updateStudent(editingStudent._id, studentData);
        setEditingStudent(null);
      } else {
        await addStudent(studentData);
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
      await deleteStudent(id);
      fetchStudents();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Student Management</h1>

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
}

export default Home;