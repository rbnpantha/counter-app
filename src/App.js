import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import MenuBar from "./components/menubar";
import Counters from "./components/counters";
import React, { Component } from "react";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleRefresh = () => {
    const counters = [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ];
    this.setState({ counters });
  };

  handleAddItem = () => {
    const counters = this.state.counters;
    const nextIndex = counters.length + 1;
    counters.push({ id: nextIndex, value: 0 });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    console.log("Delete clicked", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Welcome to my Shopping Cart</h1>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onRefresh={this.handleRefresh}
            onAddItem={this.handleAddItem}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
        <MenuBar />
      </React.Fragment>
    );
  }
}

export default App;
