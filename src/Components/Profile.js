import { Component } from "react";
//import './Profile.css'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {name: "Stranger",bgColor: "#ffffff", textColor: "#000000"};
    this.updateProfile = this.updateProfile;
  }

 

  updateProfile = (name, bgColor, textColor) => {
    this.setState({name, bgColor, textColor});
  }

  render() {

    return (
    <div style={{backgroundColor: this.state.bgColor, color: this.state.textColor}}>
        <p>Hello {this.state.name}</p>
    </div>
    );
  }
}

export default Profile;
