import React, { Component } from "react";
import "../../App.css";
import { Col, Row, Button, Form, Input, Upload, Select, Radio } from "antd";
import { MailOutlined, PhoneFilled, PlusOutlined } from "@ant-design/icons";

class Contact extends Component {
  render() {
    const normFile = (e) => {
      if (Array.isArray(e)) {
        return e;
      }
      return e?.fileList;
    };
    const layout = {
      labelCol: {
        span: 10,
      },
      wrapperCol: {
        span: 14,
      },
    };

    const validateMessages = {
      required: "${label} is required!",
      types: {
        email: "${label} is not a valid email!",
      },
    };

    // const [form] = Form.useForm();

    const onFinish = (values) => {
      // e.preventDefault();
      console.log(values);
      alert(
        "This page is under construction. Please email info@kreobuildingsolution.com for estimation requests or career inquires. Thank you"
      );
      // form.resetFields();
    };
    return (
      <div>
        <div className="aboutContent">
          <Row className="contentTitle">
            <Col span={12}>
              <h1>Contact Us</h1>
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
          <Col span={12} className="contentColumn">
            <h2>General Company Information</h2>
            <p>3011 Sutton Gate Dr. suite 306 Suwanee, ga 30024</p>
            <p>
              <a href="tel: 470-585-2805" rel="noopener noreferrer">
                470-585-2805
              </a>{" "}
              |{" "}
              <a href="tel: 470-718-0287" rel="noopener noreferrer">
                470-718-0287
              </a>
            </p>
            <p>
              <a
                href="mailto: info@kreobuildingsolution.com"
                rel="noopener noreferrer"
              >
                info@kreobuildingsolution.com
              </a>
            </p>
          </Col>
          <Col span={12} className="contentColumn">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.521084476257!2d-84.05345522379584!3d34.03050211887722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f59637ca3e6fbd%3A0xfbc24270778b714b!2s3011%20Sutton%20Gate%20Dr%2C%20Suwanee%2C%20GA%2030024!5e0!3m2!1sen!2sus!4v1720459756465!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
        <div className="rowColor">
          <Row className="contentSpace">
            <Col span={12} className="contentColumn">
              <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                style={{
                  maxWidth: 600,
                }}
                autoComplete="off"
                validateMessages={validateMessages}
              >
                <Form.Item
                  name={["user", "name"]}
                  label="Name"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["user", "email"]}
                  label="Email"
                  rules={[
                    {
                      type: "email",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Message"
                  name="TextArea"
                  rules={[
                    {
                      required: true,
                      message: "Request estimation here",
                    },
                  ]}
                >
                  <Input.TextArea />
                </Form.Item>
                <Form.Item
                  wrapperCol={{
                    ...layout.wrapperCol,
                    offset: 8,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
            <Col span={12} className="contentColumn">
              <h2>Request EST</h2>
            </Col>
          </Row>
        </div>

        <Row className="contentSpace">
          <Col span={12} className="contentColumn">
            <h2>Career – Join Our Team</h2>
          </Col>
          <Col span={12} className="contentColumn">
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              style={{
                maxWidth: 600,
              }}
              autoComplete="off"
              validateMessages={validateMessages}
            >
              <Form.Item
                name={["user", "name"]}
                label="Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "email"]}
                label="Email"
                rules={[
                  {
                    type: "email",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Phone number is required!",
                  },
                ]}
              >
                <Input
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>
              <Form.Item label="Are you eligible to work in the US?">
                <Radio.Group>
                  <Radio value="apple"> Yes </Radio>
                  <Radio value="pear"> No </Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                label="Upload"
                valuePropName="fileList"
                getValueFromEvent={normFile}
              >
                <Upload action="/upload.do" listType="picture-card">
                  <button
                    style={{
                      border: 0,
                      background: "none",
                    }}
                    type="button"
                  >
                    <PlusOutlined />
                    <div
                      style={{
                        marginTop: 8,
                      }}
                    >
                      Resume
                    </div>
                  </button>
                </Upload>
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  ...layout.wrapperCol,
                  offset: 8,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Contact;
