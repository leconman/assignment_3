import { Component } from "react";
import Clock from "./Clock.js"
//import './Profile.css'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {name: "Stranger",bgColor: "#00ffff", textColor: "#000000"};
    this.updateProfile = this.updateProfile.bind(this);
  }

 

  updateProfile = (name, bgColor, textColor) => {
    this.setState({name, bgColor, textColor});
  }

  render() {
    document.body.style.backgroundColor = this.state.bgColor;
    document.body.style.color = this.state.textColor;

    return (
    <div>
        <Clock name = {this.state.name}/>
    </div>
    );
  }
}

export default Profile;
