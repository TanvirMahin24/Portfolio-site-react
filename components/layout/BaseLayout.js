import Header from "../Header";

const BaseLayout = (props) => {
  const headerType = props.headerType || "default";
  return (
    <div className="layout-container">
      {headerType === "index" && (
        <Header
          className="port-nav-index"
          isAuthenticated={props.isAuthenticated}
        />
      )}
      {headerType === "default" && (
        <Header
          className="port-nav-default"
          isAuthenticated={props.isAuthenticated}
        />
      )}

      <main className={`cover ${props.className}`}>
        <div className="wrapper">{props.children}</div>
      </main>
    </div>
  );
};

export default BaseLayout;
