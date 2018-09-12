import * as React from "react";

interface IProps {
  count: number;
}

// declare module "react";

export class Display extends React.Component<IProps> {
  public render() {
    return <div className="App">{this.props.count}</div>;
  }
}
