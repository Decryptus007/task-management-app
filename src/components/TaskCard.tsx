import React from "react";
import { Task } from "../types/task";

interface TaskCardProps {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4">
      <h3 className="text-lg font-bold">{task.title}</h3>
      <p className="text-sm text-gray-500">{task.description}</p>
      <div className="flex items-center justify-between mt-2">
        <span className="text-sm text-blue-500">{task.category}</span>
        <div>
          <button className="text-yellow-500 mr-2" onClick={onEdit}>
            Edit
          </button>
          <button className="text-red-500" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
