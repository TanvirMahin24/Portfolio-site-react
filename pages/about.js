import BaseLayout from "../components/layout/BaseLayout";
import BasePage from "../components/layout/BasePage";
import { Row, Col } from "reactstrap";

class About extends React.Component {
  render() {
    return (
      <BaseLayout
        title="Filip Jerga - Learn More About Me"
        {...this.props.auth}
      >
        <BasePage className="about-page">
          <Row className="mt-5">
            <Col md="6">
              <div className="left-side">
                <img
                  src="/static/images/sq.jpg"
                  alt=""
                  className="w-25 rounded-circle imageMahinAbout"
                />
                <h1 className="title fadein">Hello, Welcome</h1>
                <h4 className="subtitle fadein">To About Page</h4>
                <p className="subsubTitle fadein">Get to know me</p>
              </div>
            </Col>
            <Col md="6">
              <div className="fadein">
                <p className="lead">
                  My name is <b>Noor Ajmir Tanvir Mahin</b> and I am student of
                  Rajshahi University of Engineering and Technology (RUET).{" "}
                </p>
                <p className="lead">
                  Currently, I am completing my BSc degree in Computer Science
                  and Engineering from RUET. I am very passionate about web
                  development.
                </p>
                <p className="lead">
                  I started learning the aspects of web development almost 5
                  years back. I always wondered about how the world wide web
                  works! This raised the curiosity of learning web development.
                  Now I am pretty confident coding in JavaScript. I have learned
                  MongoDB, Express, React, and Node.js to be a full-stack MERN
                  developer. Web developing is fun :)
                </p>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;
