import {Component} from 'react';


class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {name: this.props.name, date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
        <h2>{this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;