import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const List = () => {
  const dispatch = useDispatch;
  const [token, setToken] = useState("");
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");


const state = useSelector((state)=> {
  return {
    token : state.Users.token
  }
})

useEffect(()=> {
  getAllTasks(state.token)
},[]);


  ///// display all todos list
  const getAllTasks = async (token) => {
    try {
      const list = await axios.get(`${process.env.REACT_APP_BASE_URL}/todos`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTodos(list.data);
    } catch (err) {
      console.log(err);
    }
  };

  ///// add new task
  const addTask = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/task`,
        {
          task,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
    getAllTasks(token);
  };

  //// edit task

  const editTask = async (id, value) => {
    try {
      await axios.put(
        `${process.env.REACT_APP_BASE_URL}/edit/${id}`,
        {
          task: value,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      getAllTasks(token);
    } catch (error) {
      console.log(error);
    }
  };

  ///// remove a task
  const removeTask = async (id) => {
    try {
      await axios.put(`${process.env.REACT_APP_BASE_URL}/todo/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getAllTasks(token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {todos.map((task) => (
        <div key={task._id}>
          <li>{task.task}</li>
          <input
            type="text"
            name="edit"
            onChange={(e) => editTask(task._id, e.target.value)}
          />
          <button onClick={() => removeTask(task._id)}>Delete</button>
        </div>
      ))}
      <input
        type="text"
        name="task"
        placeholder="Add task"
        onChange={(e) => setTodos([...todos], e.target.value)}
      />
    </div>
  );
};

export default List;
