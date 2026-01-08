import React, { Component } from "react";
import "./ProfileCard.css";
import avatar1 from "../assets/avatar1.jpg";

class ProfileCardClass extends Component {
  render() {
    return (
      <div className="card">
        <img src={avatar1} alt="Profile" className="avatar" />
        <h2>Gokul</h2>
        <p>UI Designer</p>
      </div>
    );
  }
}

export default ProfileCardClass;