import BaseLayout from "../components/layout/BaseLayout";
import BasePage from "../components/layout/BasePage";

const Blogs = (props) => {
  return (
    <BaseLayout {...props.auth}>
      <BasePage className="blogs-page">
        <h1>Blogs Page</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default Blogs;
