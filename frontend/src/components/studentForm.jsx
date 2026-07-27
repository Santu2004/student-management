import { useEffect, useState } from "react";

function StudentForm({ onSubmit, editingStudent }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    age: "",
  });

  // Fill form when editing
  useEffect(() => {
    if (editingStudent) {
      setFormData({
        name: editingStudent.name,
        email: editingStudent.email,
        course: editingStudent.course,
        age: editingStudent.age,
      });
    } else {
      setFormData({
        name: "",
        email: "",
        course: "",
        age: "",
      });
    }
  }, [editingStudent]);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);

    if (!editingStudent) {
      setFormData({
        name: "",
        email: "",
        course: "",
        age: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="course"
        placeholder="Enter Course"
        value={formData.course}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="age"
        placeholder="Enter Age"
        value={formData.age}
        onChange={handleChange}
        required
      />

      <button type="submit">
        {editingStudent ? "Update Student" : "Add Student"}
      </button>

    </form>
  );
}

export default StudentForm;