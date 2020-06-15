import BaseLayout from "../components/layout/BaseLayout";
import { Container, Col, Row } from "reactstrap";
import Typed from "react-typed";

const Index = (props) => {
  return (
    <BaseLayout className="cover" {...props.auth} headerType="index">
      <div className="main-section">
        <div className="background-image">
          <img src="../static/images/background-index.png" />
        </div>

        <Container>
          <Row>
            <Col md="6">
              <div className="hero-section mx-auto mx-md-0">
                <div className={`flipper`}>
                  <div className="back">
                    <div className="hero-section-content">
                      <h2> Full Stack Web Developer </h2>
                      <div className="hero-section-content-intro">
                        Have a look at my portfolio and job history.
                      </div>
                    </div>
                    <img
                      className="image"
                      src="../static/images/section-1.png"
                    />
                    <div className="shadow-custom">
                      <div className="shadow-inner"> </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="6" className="hero-welcome-wrapper">
              <div className="hero-welcome-text">
                {props.auth.isAuthenticated && (
                  <span className="font-weight-bolder h1">
                    {`[ ${props.auth.user.name} ]`}
                  </span>
                )}
                <h1 className="lead text-md-left text-center pt-md-0 pt-4">
                  <span className="font-weight-normal display-3">Hi,</span>
                  <br /> Welcome to the portfolio website of
                  <span className="font-weight-bold pl-2">Tanvir Mahin</span>
                </h1>
              </div>
              <Typed
                loop
                typeSpeed={70}
                backSpeed={70}
                strings={[
                  "JavaScript Expert",
                  "React Developer",
                  "Node.js Developer",
                  "Laravel developer",
                ]}
                smartBackspace
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
};

export default Index;
