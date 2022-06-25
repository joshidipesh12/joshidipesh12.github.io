import React from 'react';
import Head from 'next/head';

function HeadTag({title, children}) {
  return (
    <Head>
      <title>{title ? `${title} - ` : ''}Hola amigos ✨🎀</title>
      <meta
        property="og:title"
        content={`${title ? `${title} - ` : ''}Hola amigos ✨🎀`}
      />
      <meta
        name="description"
        content="Hi!, I'm Dipesh Joshi, A full-stack developer"
      />
      <meta
        property="og:image"
        content="https://joshidipesh12.github.io/screenshot.png"
      />
      <meta property="og:url" content="https://joshidipesh12.github.io" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/favicon.ico" />
      {children}
    </Head>
  );
}

export default HeadTag;
