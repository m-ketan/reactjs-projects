import React from 'react';

class AddTask extends React.Component {
  constructor() {
  	super();
  	this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
  	e.preventDefault();
  	var val = this.storeInput.value;
  	this.props.updateTask(val);
  	this.storeInput.value = '';
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        	<input type="text" ref={(input) => {this.storeInput = input}} placeholder="Add a task and hit Enter" />
        </form>
      </div>
    );
  }
}

export default AddTask;
