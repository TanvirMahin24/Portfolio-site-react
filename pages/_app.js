import App, { Container } from "next/app";
import auth0 from "../services/auth0";
//Styles import
import "../styles/main.scss";
if (typeof window !== "undefined") {
  require("bootstrap");
}
export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    const user = process.browser
      ? await auth0.clientAuth()
      : await auth0.serverAuth(ctx.req);

    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const auth = { user, isAuthenticated: !!user };

    return { pageProps, auth };
  }
  render() {
    const { Component, pageProps, auth } = this.props;

    return (
      <Container>
        <Component {...pageProps} auth={auth} />
      </Container>
    );
  }
}
