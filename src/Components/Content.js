import {Component} from 'react';
import "./Content.css";
import axios from 'axios';

class Content extends Component {
  constructor(props) {
      super(props);
      this.state = {showDebit: false, showCredit: false, showForm: false, apiData:[], found: false};

  }


  debit = async () => {
    this.setState({showDebit: true, showCredit: false, showForm: false});
    //this.setState({apiLink: "https://moj-api.herokuapp.com/debits"});
    try {
      let response = await axios.get("https://moj-api.herokuapp.com/debits");
      
      this.setState({apiData: response.data,found: true});
  } catch (error) {
      if (error.response) {
          
          console.log(error.response.data); //Not Found
          console.log(error.response.status); //404
          this.setState({found: false});
      }

  }

  }
  
  credit = async () => {
    this.setState({showDebit: false, showCredit: true, showForm: false});
    //this.setState({apiLink: "https://moj-api.herokuapp.com/credits"});
    try {
      let response = await axios.get("https://moj-api.herokuapp.com/credits");
      
      this.setState({apiData: response.data,found: true});
  } catch (error) {
      if (error.response) {
          
          console.log(error.response.data); //Not Found
          console.log(error.response.status); //404
          this.setState({found: false});
      }

  }

     
  }
  
  form = () => {
    this.setState({showDebit: false, showCredit: false, showForm: true});
  }
  save = () => {
    var username = document.getElementsByClassName("edit-name");
    var bgcolor = document.getElementsByClassName("edit-bgcolor");
    var textcolor = document.getElementsByClassName("edit-textcolor");
    //console.log(username[0].value);
    let name = username[0].value;
    let bgColor = bgcolor[0].value;
    let textColor = textcolor[0].value;
    if (name === "") {
        name = this.props.name;
    }
    if (bgColor === "") {
        bgColor = this.props.bgColor;
    }
    if (textColor === "") {
        textColor = this.props.textColor;
    }
    this.props.updateProfile2(name, bgColor, textColor);
    this.setState({showDebit: false, showCredit: false, showForm:false});
  }

  cancel = () => {
    this.setState({showDebit: false, showCredit: false, showForm:false});
  }

  makeTable = () => {
      let entries = this.state.apiData;
      let table = [];

      table.push(
        <tr key = {-1}>
            <td><b>ID</b></td>
            <td><b>Description</b></td>
            <td><b>Amount</b></td>
            <td><b>Date</b></td>
        </tr>
      );
      for (let i =0; i < entries.length; ++i) {
          table.push(
              <tr key = {i}>
                  <td>{entries[i].id}</td>
                  <td>{entries[i].description}</td>
                  <td>{entries[i].amount}</td>
                  <td>{entries[i].date}</td>
              </tr>

          );
      }

      return table;
  }


  render() {
   
      if (this.state.showDebit) {
        
          return (
              <div>
          <button className="debit-button" onClick={this.debit}>Debit</button>
          <button className="credit-button" onClick={this.credit}>Credit</button>
          <button className="form-button" onClick={this.form}>Customize Profile</button>
          <h2>Debits</h2>
          {this.state.found 
              ? <div>
                  
                  <table class = "center">
                      <tbody>
                      {this.makeTable()}
                      </tbody>
                  </table>
              </div>
              : <h4>No results</h4>}
          </div>
          
          );
          
      }
      else if (this.state.showCredit) {
        
          return (
              <div>
          <button className="debit-button" onClick={this.debit}>Debit</button>
          <button className="credit-button" onClick={this.credit}>Credit</button>
          <button className="form-button" onClick={this.form}>Customize Profile</button>
          <h2>Credits</h2>
          {this.state.found 
              ? <div>
                  
                  <table class = "center">
                      <tbody>
                      {this.makeTable()}
                      </tbody>
                  </table>
              </div>
              : <h4>No results</h4>}
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
                  <input className="edit-name" placeholder = "Ex: Bob"/>
                  <p>New Background Color:</p>
                  <input className="edit-bgcolor"placeholder = "Ex: #000000" />
                  <p>New Text Color:</p>
                  <input className="edit-textcolor" placeholder = "Ex: #ffffff"/>
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