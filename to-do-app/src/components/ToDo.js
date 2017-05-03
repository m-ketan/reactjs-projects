import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

class ToDo extends React.Component {
  render() {
    return (
      <div>
        <h1>To-Do List</h1>
        <AddTask />
        <TaskList />
      </div>
    );
  }
}

export default ToDo;
