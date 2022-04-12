import {Component} from 'react';
import axios from 'axios';

class Content extends Component {
  constructor(props) {
      super(props);
      this.state = {showDebit: false, showCredit: false, showForm: false, apiData:[], apiLink: "", found: false};

  }

  handleLink = async () => {
      //console.log(this.state.apiLink);
      try {
          let response = await axios.get(this.state.apiLink);
          
          this.setState({apiData: response.data,found: true});
      } catch (error) {
          if (error.response) {
              
              console.log(error.response.data); //Not Found
              console.log(error.response.status); //404
              this.setState({found: false});
          }
  
      }

  }

  debit = () => {
      this.setState({showDebit: true, showCredit: false, showForm: false});
      this.setState({apiLink: "https://moj-api.herokuapp.com/debits"});
      this.handleLink();
  }
  
  credit = () => {
      this.setState({showDebit: false, showCredit: true, showForm: false});
      this.setState({apiLink: "https://moj-api.herokuapp.com/credits"})
      this.handleLink();
  }
  
  form = () => {
    this.setState({showDebit: false, showCredit: false, showForm: true});
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

  makeTable = () => {
      let entries = this.state.apiData;
      let table = [];


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
          {this.state.found 
              ? <div>
                  
                  <table>
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
          {this.state.found 
              ? <div>
                  
                  <table>
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
                  <input className="edit-name" />
                  <p>New Background Color:</p>
                  <input className="edit-bgcolor" />
                  <p>New Text Color:</p>
                  <input className="edit-textcolor" />
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