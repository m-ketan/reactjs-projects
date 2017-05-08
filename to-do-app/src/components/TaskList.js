import React from 'react';

class TaskList extends React.Component {
  constructor() {
  	super();
  	this.remove = this.remove.bind(this);
  }
  remove(e) {
  	var txt = e.target.parentNode.querySelector('span').innerText;
  	this.props.removeTask(txt);
  }
  render() {
  	//var uKey = Date.now();
  	var mapList = this.props.list.map((elem, i) => {
  		return (
  			<div className="taskElement" key={i}><span>{elem}</span><button onClick={this.remove}></button></div> 
  		)
  	});
    return (
      <div>
        <ul>
        	{mapList}
        </ul>
      </div>
    );
  }
}

export default TaskList;
