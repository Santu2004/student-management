import express from "express";

import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/studentController.js";

const router = express.Router();

// GET All Students
router.get("/", getStudents);

// ADD Student
router.post("/", addStudent);

// UPDATE Student
router.put("/:id", updateStudent);

// DELETE Student
router.delete("/:id", deleteStudent);

export default router;