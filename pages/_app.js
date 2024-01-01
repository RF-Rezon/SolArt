import Head from "next/head";
import { Fragment } from "react";
import "./global.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>SolArt</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
