import StudentCard from "./StudentCard";

function StudentList({ students, onEdit, onDelete }) {
  if (students.length === 0) {
    return <h3>No Students Found</h3>;
  }

  return (
    <div>
      {students.map((student) => (
        <StudentCard
          key={student._id}
          student={student}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default StudentList;