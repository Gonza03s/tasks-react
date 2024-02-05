import { useContext, createContext, useReducer, useEffect } from "react";
import { appReducer } from "./AppReducer";

const context = createContext();

export const useGlobalContext = () => {
  const contextData = useContext(context);
  return contextData;
};

export const GlobalContext = ({ children }) => {
  // Recuperar datos desde localStorage al cargar la página
  const storedTasks = localStorage.getItem("tasks");

  let initialTasks;
  try {
    initialTasks = storedTasks ? JSON.parse(storedTasks) : { tasks: [] };
    if (!initialTasks.tasks) {
      initialTasks.tasks = [];
    }
  } catch (error) {
    console.error("Error parsing localStorage data:", error);
    initialTasks = { tasks: [] };
  }

  const [tasksState, dispatch] = useReducer(appReducer, initialTasks);

  // Actualizar localStorage cada vez que cambien las tareas
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksState));
  }, [tasksState]);

  const createTask = (tasks) => {
    const action = {
      type: "[ADM TASKS] CREATE TASK",
      payload: { ...tasks, id: crypto.randomUUID() },
    };
    dispatch(action);
  };

  const deleteTask = (id) => {
    const action = {
      type: "[ADM TASKS] DELETE TASK",
      payload: id,
    };
    dispatch(action);
  };

  const updateTask = (task) => {
    const action = {
      type: "[ADM TASKS] UPDATE TASK",
      payload: task,
    };

    dispatch(action);
  };

  return (
    <context.Provider
      value={{ tasksState, createTask, deleteTask, updateTask }}
    >
      {children}
    </context.Provider>
  );
};
