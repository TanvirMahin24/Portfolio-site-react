import React from "react";
import Typed from "react-typed";

import BaseLayout from "../components/layout/BaseLayout";

import { Button, Container, Row, Col } from "reactstrap";

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFlipping: false,
    };

    this.roles = ["React", "Laravel", "Node.js", "MongoDB", "Next.js", "Vue"];
  }

  componentDidMount() {
    this.animateCard();
  }

  componentWillUnmount() {
    this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
  }

  animateCard() {
    this.cardAnimationInterval = setInterval(() => {
      this.setState({
        isFlipping: !this.state.isFlipping,
      });
    }, 10000);
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const { isFlipping } = this.state;

    return (
      <BaseLayout
        className={`cover ${isFlipping ? "cover-1" : "cover-0"}`}
        {...this.props.auth}
        headerType="index"
        title="Filip Jerga - Portfolio"
      >
        <div className="main-section">
          <div className="background-image">
            <img src="/static/images/background-index.png" />
          </div>
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper ${isFlipping ? "isFlipping" : ""}`}>
                    <div className="front">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Web development is something creative
                        </div>
                      </div>
                      <img
                        alt="Guy programming welcome picture"
                        className="image"
                        src="/static/images/section-1.jpg"
                      />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2>Get professional website</h2>
                        <div className="hero-section-content-intro">
                          Website represents you so don't compromise!
                        </div>
                      </div>
                      <img
                        alt="Guy programming welcome picture"
                        className="image"
                        src="/static/images/section-2.jpg"
                      />
                      <div className="shadow-custom shadow-custom-2">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1 className="font-weight-light">
                    {isAuthenticated && (
                      <span>
                        {" "}
                        <b> {user.name} </b>{" "}
                      </span>
                    )}
                    Welcome to the portfolio website of{" "}
                    <span className="font-weight-bold">Tanvir Mahin</span>. Get
                    informed, collaborate and discover projects I was working on
                    through the years!
                  </h1>
                </div>
                <Typed
                  loop
                  typeSpeed={60}
                  backSpeed={60}
                  strings={this.roles}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|"
                />

                <div className="hero-welcome-bio">
                  <h2>Let's take a look on my work.</h2>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>
    );
  }
}

export default Index;
