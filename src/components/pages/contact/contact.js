import React from "react";
import "./contact.css";
import profile from "../../../assets/images/lud.jpg";
function Contact() {
  let mail = "locano@uvg.edu.gt";
  return (
    <div className="profile-align">
      <div className="profile-card">
        <a href="https://www.linkedin.com/in/ludwing-cano238/">
          <img className="profile-pic" src={profile}></img>
        </a>
        <ul>
          <li>
            <h3>Ing. Ludwing Cano</h3>
          </li>
          <li>
            <a href={`mailto: ${mail}`}>{mail}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
