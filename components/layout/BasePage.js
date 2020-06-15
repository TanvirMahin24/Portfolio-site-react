import react from "react";
import { Container } from "reactstrap";

const BasePage = (props) => {
  return (
    <div
      className={`base-page ${
        props.className === undefined ? "" : props.className
      }`}
    >
      <Container>
        {props.title && (
          <div className="page-header">
            <h1 className="page-header-title">{props.title}</h1>
          </div>
        )}
        {props.children}
      </Container>
    </div>
  );
};

export default BasePage;
