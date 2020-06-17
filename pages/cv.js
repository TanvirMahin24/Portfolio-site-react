import React from "react";
import BaseLayout from "../components/layout/BaseLayout";
import BasePage from "../components/layout/BasePage";

import { Row, Col } from "reactstrap";

class Cv extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage title="Preview of my CV" className="cv-page">
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <div className="cv-title">
                <a
                  download="tanvir_mahin.pdf"
                  className="btn btn-success mb-4"
                  href="/static/tanvir_mahin.pdf"
                >
                  Download
                </a>
              </div>
              <img src="/static/images/cv.png" alt="" className="img-fluid" />
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Cv;
