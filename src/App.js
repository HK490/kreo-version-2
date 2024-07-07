import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
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
import { Flex, Layout, Menu, Col, Row, Anchor } from "antd";
import "./App.css";
import kreoLogo from "./components/images/logo-horizontal.jpg";
import banner from "./components/images/banner-image.jpg";

class App extends Component {
  render() {
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
        children: [
          {
            label: "Renovation",
            key: "/services",
          },
          {
            label: "Water/Fire/Mold",
            key: "/services",
          },
          {
            label: "Preventive Maintenance (Flyer without price)",
            key: "/services",
          },
          {
            label: "Maintenance Cleaning",
            key: "/services",
          },
        ],
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
        children: [
          {
            label: "Renovation",
            key: "/portfolio",
          },
          {
            label: "University Housing",
            key: "/portfolio",
          },
          {
            label: "Capital Work",
            key: "/portfolio",
          },
        ],
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
                <img width="400px" src={kreoLogo} alt="kreo logo" />
              </Col>
              <Col span={8}>
                <p>
                  <b>Kreo</b>
                </p>
                <p>1111 insert address here Suwanee, Ga 30024</p>
                <p>
                  <a href="tel: 111-111-1111" rel="noopener noreferrer">
                    111-111-1111
                  </a>{" "}
                  |{" "}
                  <a href="mailto: Email@email.com" rel="noopener noreferrer">
                    Email@email.com
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
