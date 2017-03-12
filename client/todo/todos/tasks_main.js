import React, { Component } from 'react';
import Task from './task';

class Tasks extends Component {

  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }

  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
  
  render() {
    return (
      <div>
        <h5>ToDo</h5>
        <ul>{this.renderTasks()}</ul>
      </div>
    );
  }
}

export default Tasks;