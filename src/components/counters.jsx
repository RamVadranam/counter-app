import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onIncrement, onDelete, counters } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn-primary btn-sm btn-m2">
          Reset
        </button>

        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDelete={onDelete}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
