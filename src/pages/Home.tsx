import {
  DragDropContext,
  Droppable,
  Draggable,
  DroppableProvided,
  //@ts-expect-error Types for react-beautiful-dnd are not up to date
} from "react-beautiful-dnd";
import { useTaskContext } from "../context/TaskContext";

const Home = () => {
  const { tasks, setTasks, deleteTask, addTask } = useTaskContext();

  // Handle the drag end to reorder tasks
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEnd = (result: any) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }

    if (destination.index === source.index) {
      return;
    }

    const reorderedTasks = Array.from(tasks);
    const [removed] = reorderedTasks.splice(source.index, 1);
    reorderedTasks.splice(destination.index, 0, removed);

    setTasks(reorderedTasks); // Update the tasks with the new order
  };

  const categories = ["Work", "Personal", "Urgent", "Shopping", "Health"];

  // Function to generate random task title
  const generateRandomTitle = () => {
    const taskTitles = [
      "Complete report",
      "Attend meeting",
      "Go for a walk",
      "Buy groceries",
      "Call client",
      "Write blog post",
      "Clean the house",
    ];
    return taskTitles[Math.floor(Math.random() * taskTitles.length)];
  };

  // Function to generate a random task object
  const generateRandomTask = () => {
    return {
      id: Math.floor(Math.random() * 1000), // Simple random id for now
      title: generateRandomTitle(),
      category: categories[Math.floor(Math.random() * categories.length)],
    };
  };

  return (
    <div className="p-6 w-[100dvw] max-w-[1024px] mx-auto">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="taskList">
          {(provided: DroppableProvided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="space-y-4"
            >
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided: DroppableProvided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="p-4 bg-slate-700 rounded-lg shadow-md flex justify-between"
                    >
                      <div>
                        <h2>{task.title}</h2>
                        <p>Category: {task.category}</p>
                      </div>
                      <button
                        onClick={() => deleteTask(task.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <button className="mt-10" onClick={() => addTask(generateRandomTask())}>
        Add Task
      </button>
    </div>
  );
};

export default Home;
