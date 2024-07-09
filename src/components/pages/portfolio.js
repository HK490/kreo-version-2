import React, { Component } from "react";
import "../../App.css";
import { Col, Row, Button, Flex, Card } from "antd";
import { MailOutlined, PhoneFilled } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScrewdriverWrench,
  faBuildingColumns,
  faHammer,
  faToolbox,
  faBroom,
} from "@fortawesome/free-solid-svg-icons";

class Portfolio extends Component {
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
              <h1>Portfolio</h1>
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
                      icon={faBuildingColumns}
                      size="5x"
                    />
                  }
                >
                  <Meta title="University Housing" className="cardMeta" />
                </Card>
                <Card
                  hoverable
                  className="card"
                  cover={
                    <FontAwesomeIcon
                      className="panelIcons"
                      icon={faHammer}
                      size="5x"
                    />
                  }
                >
                  <Meta title="Capital Work" className="cardMeta" />
                </Card>
              </Flex>
            </Flex>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Portfolio;
