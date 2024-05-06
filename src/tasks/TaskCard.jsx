import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";


const TaskCard = ({ tasks }) => {
  const { deleteTask } = useGlobalContext();

  return (
    <div className="flex justify-center flex-col w-full sm:w-1/2  ">
      <div className="bg-slate-900  mb-5 flex flex-col justify-center flex-wrap  rounded-md p-4 gap-10 text-white ">
        <div className="">
          <h2 className="text-center font-semibold text-2xl tracking-wide	">
            {tasks.title}
          </h2>
          <hr className="py-4" />
          <p className=" text-lg ">{tasks.description}</p>
        </div>

        <div className="flex  justify-between items-start w-full   ">
          <Link to={`/edit/${tasks.id}`}  className="bg-indigo-600 rounded py-1 px-2 hover:bg-indigo-900 transition-colors">
            Modify
          </Link>
          <button
            onClick={() => deleteTask(tasks.id)}
            className="bg-red-600 rounded py-1 px-2 hover:bg-red-400 transition-colors "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
