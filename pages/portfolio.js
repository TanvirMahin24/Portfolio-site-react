import BaseLayout from "../components/layout/BaseLayout";
import BasePage from "../components/layout/BasePage";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardHeader,
  Col,
  Row,
} from "reactstrap";
import axios from "axios";

const Portfolio = (props) => {
  const listOfPosts = props.posts.map((item, index) => (
    <Col key={index} md="4">
      <Card className="portfolio-card">
        <CardHeader className="portfolio-card-header">
          Position {index}
        </CardHeader>
        <CardBody>
          <p className="portfolio-card-city">Some location {index}</p>
          <CardTitle className="portfolio-card-title">title {index}</CardTitle>

          <CardText className="portfolio-card-text">
            Some quick example text {index}
          </CardText>
          <div className="readMore">Read More</div>
        </CardBody>
      </Card>
    </Col>
  ));

  return (
    <BaseLayout {...props.auth}>
      <BasePage className="portfolio-page" title="Portfolio">
        <Row>{listOfPosts}</Row>
      </BasePage>
    </BaseLayout>
  );
};

Portfolio.getInitialProps = async (ctx) => {
  let posts = [];
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    posts = res.data;
  } catch (error) {
    console.log(error);
  }
  return { posts: posts.splice(0, 10) };
};

export default Portfolio;
