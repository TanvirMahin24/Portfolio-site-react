import Header from "../Header";
import Head from "next/head";
import { Fragment } from "react";

const BaseLayout = (props) => {
  const headerType = props.headerType || "default";
  return (
    <Fragment>
      <Head>
        <title>Tanvir Mahin</title>
        <meta
          name="Description"
          content="I am Tanvir Mahin. I am a student of Rajshahi University of Engineering and Technology (RUET). I am a professional full-stack web developer. I use React for the front-end development, Node.js and Express for the back-end and MongoDB as Database. Feel free to contact me for work."
        ></meta>
        <meta
          name="Keywords"
          content="tanvir mahin, tanvir, mahin, RUET,ruet, tanvir mahin website, tanvir mahin web developer"
        ></meta>
        <meta property="og:title" content="Tanvir Mahin Portfolio website" />
        <meta property="og:site_name" content="Tanvir Mahin" />
        <meta property="og:url" content="tanvirmahin.herokuapp.com" />
        <meta
          property="og:description"
          content="I am Tanvir Mahin. I am a student of Rajshahi University of Engineering and Technology (RUET). I am a professional full-stack web developer. I use MERN stack for developing websites."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://tanvirmahin24.github.io/images/Mahin.png"
        />
        <link
          rel="shortcut icon"
          href="/static/favicon.png"
          type="image/x-icon"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
          integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="layout-container">
        <Header
          className={`port-nav-${headerType}`}
          isAuthenticated={props.isAuthenticated}
          user={props.user}
          isSiteOwner={props.isSiteOwner}
        />

        <main className={`cover ${props.className}`}>
          <div className="wrapper">{props.children}</div>
        </main>
      </div>
    </Fragment>
  );
};

export default BaseLayout;
