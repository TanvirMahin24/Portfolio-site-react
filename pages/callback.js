import BaseLayout from "../components/layout/BaseLayout";
import BasePage from "../components/layout/BasePage";
import auth0Client from "../services/auth0";
import { withRouter } from "next/router";

class Callback extends React.Component {
  async componentDidMount() {
    await auth0Client.handleAuthentication();
    this.props.router.push("/");
  }
  render() {
    return (
      <BaseLayout>
        <BasePage>
          <h1>You are looged in</h1>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withRouter(Callback);
