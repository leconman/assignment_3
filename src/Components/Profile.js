import { Component } from "react";
import Clock from "./Clock.js"
import Content from "./Content.js"

//import './Profile.css'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {name: "Stranger",bgColor: "#ffffff", textColor: "#000000"};
    this.updateProfile = this.updateProfile;
  }

 

  updateProfile = (name, bgColor, textColor) => {
    this.setState({name: name, bgColor: bgColor, textColor: textColor});
  }

  render() {
    document.body.style.backgroundColor = this.state.bgColor;
    document.body.style.color = this.state.textColor;

    return (
    <div>
        <Clock name = {this.state.name}/>
        <Content updateProfile2 = {this.updateProfile}/>
    </div>
    );
  }
}

export default Profile;
