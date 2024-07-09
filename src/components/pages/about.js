import React, { Component } from "react";
import "../../App.css";
import { Col, Row, Button } from "antd";
import { MailOutlined, PhoneFilled } from "@ant-design/icons";

class About extends Component {
  render() {
    return (
      <div>
        <div className="aboutContent">
          <Row className="contentTitle">
            <Col span={12}>
              <h1>About Us</h1>
            </Col>
            <Col span={12}>
              <Button className="contactIcon" type="primary" shape="circle">
                <a href="tel: 470-585-2805" rel="noopener noreferrer">
                  <PhoneFilled className="phoneMailIcon" />
                </a>
              </Button>
              <Button className="contactIcon" type="primary" shape="circle">
                <a
                  href="mailto: info@kreobuildingsolution.com"
                  rel="noopener noreferrer"
                >
                  <MailOutlined className="phoneMailIcon" />
                </a>
              </Button>
            </Col>
          </Row>
        </div>
        <Row className="contentSpace">
          <Col span={12}>
            <h2>Our Core Values</h2>
          </Col>
          <Col span={12}>
            <p>Integrity, Safety, Commitment, Accountability, Teamwork</p>
            <p>
              Since 2019, Kreo Building Solution has Delivered Solution to
              residential and commercial project in Southeast region. Our team
              has dedicated in providing All in one solution with 25+ years of
              experience in our teams. Our goal is and always will be delivering
              Satisfaction in our clients demand.
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
