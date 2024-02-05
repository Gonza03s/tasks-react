import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { useNavigate, useParams } from "react-router-dom";

const TaskForm = () => {
  const navigate = useNavigate();
  const urlIdRoute = useParams();

  const { createTask, tasksState, updateTask } = useGlobalContext();

  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.description.length === 0 || task.title.length === 0) {
      return;
    } else if (task.id) {
      updateTask(task);
    } else {
      createTask(task);
    }

    navigate("/");
  };

  useEffect(() => {
    const taskFound = tasksState?.tasks?.find((task) => task.id === urlIdRoute.id);
  
    if (taskFound) {
      setTask(taskFound);
    }
  }, [urlIdRoute.id, tasksState]);
  

  return (
    <div className="flex justify-center items-center p-10 h-screen bg-zinc-950   ">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900  text-white p-10 rounded-lg w-full sm:w-3/4 md:w-2/4 lg:w-1/3 h-4/6"
      >
        <h2 className="font-semibold text-center mt-12 py-6 text-2xl">
          {task.id ? "Editing a task" : "Create Task"}
        </h2>

        <div className="mb-5 ">
          <input
            type="text"
            name="title"
            placeholder="write the title"
            value={task.title}
            className="bg-slate-600 rounded p-2 w-full border-none outline-none"
            onChange={handleChange}
          />
        </div>

        <div className="mb-5 ">
          <textarea
            name="description"
            rows="6"
            placeholder="write the description"
            value={task.description}
            className="bg-slate-600 rounded p-2 w-full border-none outline-none"
            onChange={handleChange}
          ></textarea>
        </div>

        <button className="bg-green-700 hover:bg-green-600 rounded-lg p-2 w-full transition-colors">
          {task.id ? "Update" : "Create Task"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
