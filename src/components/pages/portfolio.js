import React, { Component } from "react";
import "../../App.css";
import { Col, Row, Button, Flex, Card } from "antd";
import { MailOutlined, PhoneFilled } from "@ant-design/icons";

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
                <a href="tel: 111-111-1111" rel="noopener noreferrer">
                  <PhoneFilled className="phoneMailIcon" />
                </a>
              </Button>
              <Button className="contactIcon" type="primary" shape="circle">
                <a href="mailto: email@email.com" rel="noopener noreferrer">
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
                    <img
                      alt="Renovation"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta title="Renovation" className="cardMeta" />
                </Card>
                <Card
                  hoverable
                  className="card"
                  cover={
                    <img
                      alt="University Housing"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta title="University Housing" className="cardMeta" />
                </Card>
                <Card
                  hoverable
                  className="card"
                  cover={
                    <img
                      alt="Capital Work"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
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
