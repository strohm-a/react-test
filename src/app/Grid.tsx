import React, { Component } from "react";

export class Grid extends Component {
  render() {
    return (
      <div className={"page"}>
        <h2>CSS Grid Examples</h2>
        <div>Implemented from <a href="https://css-tricks.com/snippets/css/complete-guide-grid/">https://css-tricks.com/snippets/css/complete-guide-grid/</a>.</div>

        <h3>Fixed Grid</h3>
        <div className={"fixed-grid-container"}>
          <div className={"grid-item"}>1</div>
          <div className={"grid-item"}>2</div>
          <div className={"grid-item"}>3</div>
          <div className={"grid-item"}>4</div>
          <div className={"grid-item"}>5</div>
          <div className={"grid-item"}>6</div>
          <div className={"grid-item"}>7</div>
          <div className={"grid-item"}>8</div>
          <div className={"grid-item"}>9</div>
          <div className={"grid-item"}>10</div>
        </div>

        <h3>Grid Areas</h3>
        <div className={"grid-areas-container"}>
          <div className={"grid-item grid-header"}>header</div>
          <div className={"grid-item grid-sidebar"}>sidebar</div>
          <div className={"grid-item grid-main"}>main</div>
          <div className={"grid-item grid-footer"}>footer</div>
        </div>

        <h3>Span rows</h3>
        <div className={"grid-span-rows-container"}>
          <div className={"grid-item grid-item-a"}>A</div>
          <div className={"grid-item grid-item-b"}>B</div>
          <div className={"grid-item grid-item-c"}>C</div>
          <div className={"grid-item grid-item-d"}>D</div>
        </div>
      </div>
    );
  }
}
