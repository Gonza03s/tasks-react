import { useGlobalContext } from "../context/GlobalContext";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const { tasksState } = useGlobalContext();

  if (!tasksState || !tasksState.tasks || tasksState.tasks.length === 0) {
    return (
      <h1 className="text-4xl text-center mt-80 text-white font-semibold">
        No tasks yet
      </h1>
    );
  }

  return (
    <div className="flex flex-col mt-20 bg-zinc-950">
      {tasksState.tasks.map((task) => (
        <div
          className="w-full p-10 flex justify-center items-center"
          key={task.id}
        >
          <TaskCard key={task.id} tasks={task} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
