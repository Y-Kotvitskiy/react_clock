import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

export class App extends React.Component {
  state = {
    hasClock: true,
  };

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
    document.addEventListener('contextmenu', this.handleContextMenu);
  }

  componentWillUnmount(): void {
    removeEventListener('click', this.handleClick);
    removeEventListener('click', this.handleClick);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock ? <Clock /> : null};
      </div>
    );
  }
}
