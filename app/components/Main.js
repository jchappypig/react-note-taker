import React, {Component} from 'react';
import ReactDom from 'react-dom'

class Main extends Component {
  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }
}

ReactDom.render(
  <Main></Main>,
  document.getElementById('root')
);



