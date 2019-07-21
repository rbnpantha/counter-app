import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          //this counter component raises the delete events and we arenot handling here
          //and we re bubbling that event to parent
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.props.onIncrement}
            onDelete={() => this.props.onDelete(counter.id)}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
