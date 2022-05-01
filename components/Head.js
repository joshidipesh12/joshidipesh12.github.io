import React from 'react';
import Head from 'next/head';

function HeadTag({title}) {
  return (
    <Head>
      <title>{title ? `${title} - ` : ''}Hola amigos ✨🎀</title>
      <meta name="description" content="Hi there, I'm Dipesh" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default HeadTag;
