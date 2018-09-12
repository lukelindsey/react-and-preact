import * as React from "react";

interface IProps {
  count: number;
}

const myStyle: React.CSSProperties = {
  fontSize: 200
};

export class Display extends React.Component<IProps> {
  public render() {
    return (
      <div className="App" style={myStyle}>
        {this.props.count}
      </div>
    );
  }
}
