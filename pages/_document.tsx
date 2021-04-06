import Document, { Head, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {/**
           * 여기에 보통 폰트 import나 gLobalStyle이 들어감
           * 본래 있던 react, typescript + react 에 있던 index.html의 역할을 대신함
           * SSR이 되면서 CSS가 깨져보이는 상황을 방지하기 위해 설정을 해줘야 하는데 이것도 여기서 함
           */}
        </Head>
        <body>
          <div id="root">
            <Main />
            <NextScript />
          </div>
        </body>
      </html>
    );
  }
}
