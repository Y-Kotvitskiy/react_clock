import React from 'react';

export class Clock extends React.Component {
  state = {
    clockName: 'Clock-0',
    clockValue: '',
  };

  timerNameId: number = 0;

  timerValueId: number = 0;

  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  componentDidMount(): void {
    this.timerNameId = window.setInterval(() => {
      const clockName = this.getRandomName();

      this.setState({ clockName });
    }, 3300);

    this.timerValueId = window.setInterval(() => {
      const clockValue = new Date().toUTCString().toString().slice(-12, -4);

      // eslint-disable-next-line no-console
      console.log(clockValue);
      this.setState({ clockValue });
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{ clockName: string }>,
  ): void {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerNameId);
    window.clearInterval(this.timerValueId);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        <div className="Clock">
          <strong className="Clock__name">{this.state.clockName}</strong>

          {' time is '}

          <span className="Clock__time">{this.state.clockValue}</span>
        </div>
      </div>
    );
  }
}
