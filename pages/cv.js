import BaseLayout from "../components/layout/BaseLayout";
import BasePage from "../components/layout/BasePage";

const Cv = (props) => {
  return (
    <BaseLayout {...props.auth}>
      <BasePage>
        <h1 className="lead">CV Page</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default Cv;
