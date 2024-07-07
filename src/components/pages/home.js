import React, { Component } from "react";
import "../../App.css";
import { Button } from "antd";
import { MailOutlined, PhoneFilled } from "@ant-design/icons";

class Home extends Component {
  render() {
    return (
      <div className="homeContent">
        <div className="homeText">
          <h1>We Care</h1>
          <h2>Fostering trust and integrity, one project at a time.</h2>
          <p>
            At Kreo Building Solutions, each team member on every job site takes
            ownership of our work. We prioritize establishing enduring
            relationships with our clients. KREO recognizes that no task is too
            small, and we approach all projects with professionalism.
          </p>
          <br></br>
          <Button className="contactIcon" type="primary" shape="circle">
            <a href="tel: 111-111-1111" rel="noopener noreferrer">
              <PhoneFilled className="phoneMailIcon" />
            </a>
          </Button>
          <Button className="contactIcon" type="primary" shape="circle">
            <a href="mailto: email@email.com" rel="noopener noreferrer">
              <MailOutlined className="phoneMailIcon" />
            </a>
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
