import React, { Component } from "react";
class Counter extends Component {
  render() {
    const {counter, onIncrement,onDelete } = this.props

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn-danger btn-sm btn-m2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
