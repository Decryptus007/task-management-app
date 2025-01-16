import React, { useState } from "react";
import { Task } from "../types/task";

interface TaskFormProps {
  onSubmit: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<"Work" | "Personal" | "Urgent">(
    "Work"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: Date.now().toString(),
      title,
      description,
      category,
      completed: false,
      deadline: new Date().toISOString(),
    });
    setTitle("");
    setDescription("");
  };

  return (
    <form className="bg-gray-100 shadow rounded-lg p-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value as "Work" | "Personal" | "Urgent")
        }
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      >
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Urgent">Urgent</option>
      </select>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
