import React from "react";
import { useSelector } from "react-redux";
import MyTask from "./MyTasks/MyTask";

const CompletedTask = () => {
  const { tasks } = useSelector((state) => state.tasks);

  const completed = tasks?.filter((task) => task.completed === true);

  return (
    <MyTask myTasks={completed} />
  );
};

export default CompletedTask;
