function StudentCard({ student, onEdit, onDelete }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>

      <p>
        <strong>Email:</strong> {student.email}
      </p>

      <p>
        <strong>Course:</strong> {student.course}
      </p>

      <p>
        <strong>Age:</strong> {student.age}
      </p>

      <div className="buttons">
        <button onClick={() => onEdit(student)}>
          Edit
        </button>

        <button onClick={() => onDelete(student._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default StudentCard;