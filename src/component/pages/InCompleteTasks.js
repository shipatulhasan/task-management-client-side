import React from "react";
import { useSelector } from "react-redux";
import MyTask from "./MyTasks/MyTask";

const InCompleteTasks = () => {
  const { tasks } = useSelector((state) => state.tasks);
  const incompleted = tasks?.filter((task) => !task.completed);
  console.log(incompleted.length);
  return (
    <MyTask myTasks={incompleted} />
  );
};

export default InCompleteTasks;
