import React, { Component } from "react";
import "../../App.css";
import { Col, Row, Button, Flex, Card } from "antd";
import { MailOutlined, PhoneFilled, ToolOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScrewdriverWrench,
  faFire,
  faBorderAll,
  faToolbox,
  faBroom,
} from "@fortawesome/free-solid-svg-icons";

class Services extends Component {
  render() {
    const boxStyle = {
      width: "100%",
      height: 500,
      borderRadius: 6,
    };
    const { Meta } = Card;
    return (
      <div>
        <div className="aboutContent">
          <Row className="contentTitle">
            <Col span={12}>
              <h1>Services</h1>
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
          <Col span={24}>
            <Flex gap="middle" align="start" vertical>
              <Flex style={boxStyle} justify="space-evenly" align="center">
                <Card
                  hoverable
                  className="card"
                  cover={
                    <FontAwesomeIcon
                      className="panelIcons"
                      icon={faScrewdriverWrench}
                      size="5x"
                    />
                  }
                >
                  <Meta title="Renovation" className="cardMeta" />
                </Card>
                <Card
                  hoverable
                  className="card"
                  cover={
                    <FontAwesomeIcon
                      className="panelIcons"
                      icon={faFire}
                      size="5x"
                    />
                  }
                >
                  <Meta title="Water / Fire / Mold" className="cardMeta" />
                </Card>
                <Card
                  hoverable
                  className="card"
                  cover={
                    <FontAwesomeIcon
                      className="panelIcons"
                      icon={faBorderAll}
                      size="5x"
                    />
                  }
                >
                  <Meta title="Flooring" className="cardMeta" />
                </Card>
                <Card
                  hoverable
                  className="card"
                  cover={
                    <FontAwesomeIcon
                      className="panelIcons"
                      icon={faToolbox}
                      size="5x"
                    />
                  }
                >
                  <Meta
                    title="Preventive Maintenance"
                    description="(Flyer without price)"
                    className="cardMeta"
                  />
                </Card>
                <Card
                  hoverable
                  className="card"
                  cover={
                    <FontAwesomeIcon
                      className="panelIcons"
                      icon={faBroom}
                      size="5x"
                    />
                  }
                >
                  <Meta title="Maintenance Cleaning" className="cardMeta" />
                </Card>
              </Flex>
            </Flex>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Services;
