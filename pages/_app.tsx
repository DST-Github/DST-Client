import App, { AppContext, AppProps } from "next/app"; // 타입 임포트
import { Fragment } from "react";

const DstApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  );
};

//SSR을 적용시켜주기 위한 로직 -> getInitialProps
DstApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default DstApp;
