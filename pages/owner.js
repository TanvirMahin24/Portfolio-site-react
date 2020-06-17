import React from "react";
import BaseLayout from "../components/layout/BaseLayout";
import BasePage from "../components/layout/BasePage";

import withAuth from "../components/hoc/withAuth";
import Profile from "../components/Profile";

class Owner extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <Profile />
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth("siteOwner")(Owner);
