import React from "react";
import Header from "./components/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import TaskList from "./tasks/TaskList";
import TaskForm from "./tasks/TaskForm";
import { GlobalContext } from "./context/GlobalContext";

const App = () => {
  return (
    <div className="bg-zinc-950 h-screen">
      <GlobalContext>
        <Header />
        <Routes>
          <Route path="/" element={<TaskList></TaskList>}></Route>
          <Route path="/add" element={<TaskForm></TaskForm>}></Route>
          <Route path="/edit/:id" element={<TaskForm></TaskForm>}></Route>
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
      </GlobalContext>
    </div>
  );
};

export default App;
