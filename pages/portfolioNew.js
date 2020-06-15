import BaseLayout from "../components/layout/BaseLayout";
import BasePage from "../components/layout/BasePage";

import withAuth from "../components/hoc/withAuth";
import PortfolioCreateForm from "../components/portfolios/PortfolioCreateForm";

class PortfolioNew extends React.Component {
  constructor(props) {
    super();
    this.savePortfolio = this.savePortfolio.bind(this);
  }

  savePortfolio(portfolioData) {
    alert(JSON.stringify(portfolioData, null, 2));
  }

  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage
          className="portfolio-create-page"
          title="Create new Portfolio"
        >
          <PortfolioCreateForm onSubmit={this.savePortfolio} />
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth("siteOwner")(PortfolioNew);
