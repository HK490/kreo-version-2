import React, { Component } from "react";
import "../../App.css";
import { Col, Row, Button, Flex, Card } from "antd";
import { MailOutlined, PhoneFilled } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWind,
  faFaucetDrip,
  faLightbulb,
  faBorderAll,
  faRug,
  faDoorClosed,
} from "@fortawesome/free-solid-svg-icons";

class Wholesales extends Component {
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
              <h1>Wholesales</h1>
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
                      icon={faRug}
                      size="5x"
                    />
                  }
                >
                  <Meta title="Countertop" className="cardMeta" />
                </Card>
                <Card
                  hoverable
                  className="card"
                  cover={
                    <FontAwesomeIcon
                      className="panelIcons"
                      icon={faDoorClosed}
                      size="5x"
                    />
                  }
                >
                  <Meta title="Cabinetry" className="cardMeta" />
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
                  <Meta title="Floors" className="cardMeta" />
                </Card>
              </Flex>
            </Flex>
          </Col>
          <Col span={24}>
            <Flex gap="middle" align="start" vertical>
              <Flex style={boxStyle} justify="space-evenly" align="center">
                <Card
                  hoverable
                  className="card"
                  cover={
                    <FontAwesomeIcon
                      className="panelIcons"
                      icon={faWind}
                      size="5x"
                    />
                  }
                >
                  <Meta title="Drywall / Insulation" className="cardMeta" />
                </Card>
                <Card
                  hoverable
                  className="card"
                  cover={
                    <FontAwesomeIcon
                      className="panelIcons"
                      icon={faLightbulb}
                      size="5x"
                    />
                  }
                >
                  <Meta
                    title="Punch Supplies"
                    description="or Interior Fixtures"
                    className="cardMeta"
                  />
                </Card>
                <Card
                  hoverable
                  className="card"
                  cover={
                    <FontAwesomeIcon
                      className="panelIcons"
                      icon={faFaucetDrip}
                      size="5x"
                    />
                  }
                >
                  <Meta
                    title="HVAC / Plumbing Supplies"
                    description="water heater"
                    className="cardMeta"
                  />
                </Card>
              </Flex>
            </Flex>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Wholesales;
