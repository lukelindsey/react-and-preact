import * as React from "react";
import { Display } from "./Display";

interface IState {
  counter: number;
}

export class App extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={this.increment}>increment</button>
        <Display count={this.state.counter} />
      </div>
    );
  }

  private increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
}
