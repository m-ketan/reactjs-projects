import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

var ListTask = [];
var sTasks = localStorage.getItem('storedTasks');
if (sTasks) {
	ListTask = JSON.parse(sTasks);
}


class ToDo extends React.Component {
  constructor(props) {
  	super();
  	this.state = {tasks: ListTask};
  	this.updatedTask = this.updatedTask.bind(this);
  	this.removeTask = this.removeTask.bind(this);
  }
  updatedTask(inpVal) {
  	var updateTask = this.state.tasks;
  	updateTask.unshift(inpVal);
  	this.setState({
  		tasks: updateTask
  	});
  	this.updateLocalStorage(updateTask);
  }
  removeTask(inpTxt) {
  	var updateTask = this.state.tasks;
  	updateTask.splice(updateTask.indexOf(inpTxt), 1);
  	this.setState({
  		tasks: updateTask
  	});
  	this.updateLocalStorage(updateTask);
  }
  updateLocalStorage(updateTask) {
  	localStorage.setItem('storedTasks', JSON.stringify(updateTask));
  }
  render() {
    return (
      <div>
        <h1>To-Do List</h1>
        <AddTask updateTask={this.updatedTask} />
        <TaskList list={this.state.tasks} removeTask={this.removeTask} />
      </div>
    );
  }
}

export default ToDo;
