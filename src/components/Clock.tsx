import React from 'react';

export class Clock extends React.Component<{ today: number }> {
  state = {
    clockName: 'Clock-0',
    clockValue: '',
    clockTimeInterval: 0,
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
      const date = new Date(this.props.today + this.state.clockTimeInterval);
      const clockValue = date.toUTCString().toString().slice(-12, -4);
      const clockTimeInterval = this.state.clockTimeInterval + 1000;

      // eslint-disable-next-line no-console
      console.log(clockValue);
      this.setState({ clockValue, clockTimeInterval });
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
      <div className="Clock">
        <strong className="Clock__name">{this.state.clockName}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.clockValue}</span>
      </div>
    );
  }
}
