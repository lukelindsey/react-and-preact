/** @jsx h */
import { Component, h, render } from "preact";

class AssetsTab extends Component {
  render() {
    return <div class="my-preact-component">Preact in here</div>;
  }
}

render(<AssetsTab />, document.getElementById("preact"));
