import BaseLayout from "../components/layout/BaseLayout";
import BasePage from "../components/layout/BasePage";
import { Link } from "../routes";
import { Col, Row, Button, CardColumns, CardDeck, CardGroup } from "reactstrap";
import PortfolioCard from "../components/portfolios/PortfolioCard";

import { Router } from "../routes";

import { getPortfolios, deletePortfolio } from "../actions";

class Portfolios extends React.Component {
  static async getInitialProps() {
    let portfolios = [];

    try {
      portfolios = await getPortfolios();
    } catch (err) {
      console.error(err);
    }

    return { portfolios };
  }

  navigateToEdit(portfolioId, e) {
    e.stopPropagation();
    Router.pushRoute(`/portfolios/${portfolioId}/edit`);
  }

  displayDeleteWarning(portfolioId, e) {
    e.stopPropagation();
    const isConfirm = confirm(
      "Are you sure you want to delete this portfolio?"
    );

    if (isConfirm) {
      this.deletePortfolio(portfolioId);
    }
  }

  deletePortfolio(portfolioId) {
    deletePortfolio(portfolioId)
      .then(() => {
        Router.pushRoute("/portfolios");
      })
      .catch((err) => console.error(err));
  }

  renderPortfolios(portfolios) {
    const { isAuthenticated, isSiteOwner } = this.props.auth;

    return portfolios.map((portfolio, index) => {
      return (
        <PortfolioCard key={portfolio._id} portfolio={portfolio}>
          {isAuthenticated && (
            <React.Fragment>
              <Button onClick={(e) => this.navigateToEdit(portfolio._id, e)}>
                Edit
              </Button>{" "}
              <Button
                onClick={(e) => this.displayDeleteWarning(portfolio._id, e)}
                color="danger"
              >
                Delete
              </Button>
            </React.Fragment>
          )}
        </PortfolioCard>
      );
    });
  }

  render() {
    const { portfolios } = this.props;
    const { isAuthenticated, isSiteOwner } = this.props.auth;

    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="portfolio-page" title="Portfolios">
          {isAuthenticated && (
            <Button
              onClick={() => Router.pushRoute("/portfolioNew")}
              className="create-port-btn mb-3"
            >
              Create Portfolio
            </Button>
          )}
          <CardDeck className="">{this.renderPortfolios(portfolios)}</CardDeck>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Portfolios;
