import {Component} from 'react';


class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {showDebit: false, showCredit: false, showForm: false,
    name: "Stranger", bgColor: "#ffffff", textColor: "#000000"};
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
  updateName = (event) => {
    this.setState({name: event.target.value})
  }
  updateBg = (event) => {
    this.setState({bgColor: event.target.value})
  }
  
  updateText = (event) => {
    this.setState({textColor: event.target.value})
  }

  save = () => {
      var username = document.getElementsByClassName("edit-name");
      var bgcolor = document.getElementsByClassName("edit-bgcolor");
      var textcolor = document.getElementsByClassName("edit-textcolor");
      console.log(username[0].value);
     
      this.props.updateProfile2(username[0].value, bgcolor[0].value, textcolor[0].value);
      this.setState({showDebit: false, showCredit: false, showForm:false});
  }

  cancel = () => {
    this.setState({showDebit: false, showCredit: false, showForm:false});
  }

  render() {
      if (this.state.showDebit) {
        return (
            <div>
        <button className="debit-button" onClick={this.debit}>Debit</button>
        <button className="credit-button" onClick={this.credit}>Credit</button>
        <button className="form-button" onClick={this.form}>Customize Profile</button>
        </div>
        );
    }
    else if (this.state.showCredit) {
        return (
        <div>
            <button className="debit-button" onClick={this.debit}>Debit</button>
            <button className="credit-button" onClick={this.credit}>Credit</button>
            <button className="form-button" onClick={this.form}>Customize Profile</button>
        </div>
        );
    }
    else if (this.state.showForm) {
        return (
        <div>
            <button className="debit-button" onClick={this.debit}>Debit</button>
            <button className="credit-button" onClick={this.credit}>Credit</button>
            <button className="form-button" onClick={this.form}>Customize Profile</button>
            <div>
                <p>New Username:</p>
                <input className="edit-name" onChange={this.updateName} placeholder={this.state.name}/>
                <p>New Background Color:</p>
                <input className="edit-bgcolor" onChange={this.updateBg} placeholder={this.state.bgColor}/>
                <p>New Text Color:</p>
                <input className="edit-textcolor" onChange={this.updateText} placeholder={this.state.textColor}/>
                <br></br>
                <button className="save-button" onClick = {this.save}>Save</button>
                <button className="cancel-button" onClick={this.cancel}>Cancel</button>
            </div>
        </div>
    
        );
    }
    else {
        return (
            <div>
        <button className="debit-button" onClick={this.debit}>Debit</button>
        <button className="credit-button" onClick={this.credit}>Credit</button>
        <button className="form-button" onClick={this.form}>Customize Profile</button>
    </div>
        );
    }
    

    
  }
}

export default Content;