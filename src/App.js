import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Services from "./components/pages/services";
import Wholesales from "./components/pages/wholesales";
import Portfolio from "./components/pages/portfolio";
import Contact from "./components/pages/contact";
import {
  HomeOutlined,
  UserOutlined,
  ToolOutlined,
  ShoppingCartOutlined,
  FolderOpenOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import { Flex, Layout, Menu, Col, Row } from "antd";
import "./App.css";
import kreoLogo from "./components/images/logo-horizontal.jpg";

class App extends Component {
  render() {
    // document.title = "Kreo Buiilding Solution";
    const { Header, Footer, Content } = Layout;
    const items = [
      {
        label: "Home",
        key: "/",
        icon: <HomeOutlined />,
      },
      {
        label: "About Us",
        key: "/about",
        icon: <UserOutlined />,
      },
      {
        label: "Services",
        key: "/services",
        icon: <ToolOutlined />,
      },
      {
        label: "Wholesales",
        key: "/wholesales",
        icon: <ShoppingCartOutlined />,
      },
      {
        label: "Portfolio",
        key: "/portfolio",
        icon: <FolderOpenOutlined />,
      },
      {
        label: "Contact Us",
        key: "/contact",
        icon: <CommentOutlined />,
      },
    ];

    // const navigate = useNavigate();
    // const [current, setCurrent] = useState("mail");
    const onClick = (e) => {
      window.location.href = e.key;
      // e.preventDefault();
      console.log("click ", e.key);
      // setCurrent(e.key);
    };

    const boxStyle = {
      width: "100%",
      borderRadius: 6,
    };

    return (
      <div>
        <Layout className="layoutStyle">
          <Header className="headerStyle">
            <a href="/" rel="noopener noreferrer">
              <img src={kreoLogo} alt="kreo logo" />
            </a>
            <Menu
              className="headerStyle"
              onClick={onClick}
              //   selectedKeys={[current]}
              mode="horizontal"
              items={items}
            />
          </Header>
          <Content className="contentStyle">
            <Router>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/services" element={<Services />} />
                <Route exact path="/wholesales" element={<Wholesales />} />
                <Route exact path="/portfolio" element={<Portfolio />} />
                <Route exact path="/contact" element={<Contact />} />
              </Routes>
            </Router>
          </Content>
          <Footer className="footerStyle">
            <Row>
              <Col span={8}>
                <img width="250px" src={kreoLogo} alt="kreo logo" />
                <p className="copyright">
                  &copy;2019 Kreo Building Solution. ALL RIGHTS RESERVED
                </p>
              </Col>
              <Col span={8}>
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
              <Col span={4}>
                <Flex
                  className="footerMenuLinks"
                  vertical
                  style={boxStyle}
                  justify="space-evenly"
                  align="strech"
                >
                  <a href="/" rel="noopener noreferrer">
                    Home
                  </a>
                  <a href="/about" rel="noopener noreferrer">
                    About Us
                  </a>
                  <a href="/services" rel="noopener noreferrer">
                    Services
                  </a>
                </Flex>
              </Col>
              <Col span={4}>
                <Flex
                  className="footerMenuLinks"
                  vertical
                  style={boxStyle}
                  justify="space-evenly"
                  align="strech"
                >
                  <a href="/wholesales" rel="noopener noreferrer">
                    Wholesales
                  </a>
                  <a href="/portfolio" rel="noopener noreferrer">
                    Portfolio
                  </a>
                  <a href="/contact" rel="noopener noreferrer">
                    Contact Us
                  </a>
                </Flex>
              </Col>
            </Row>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
