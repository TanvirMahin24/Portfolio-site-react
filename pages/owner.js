import React from "react";
import BaseLayout from "../components/layout/BaseLayout";
import BasePage from "../components/layout/BasePage";

import withAuth from "../components/hoc/withAuth";

class Owner extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1> I am Owner Page </h1>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth("siteOwner")(Owner);
