import {Component} from 'react';


class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {showDebit: false, showCredit: false, showForm: false};
  }

  debit = () => {
      this.setState({showDebit: true, showCredit: false, showForm: false})
  }

  credit = () => {
    this.setState({showDebit: false, showCredit: true, showForm: false})
  }

  form = () => {
    this.setState({showDebit: false, showCredit: false, showForm: true})
  }

  render() {

    return (
    <div>
        <button className="debit-button" onClick={this.debit}>Debit</button>
        <button className="credit-button" onClick={this.credit}>Credit</button>
        <button className="form-button" onClick={this.form}>Customize Profile</button>
    </div>

    );
  }
}

export default Content;