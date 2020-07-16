import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default ({ children }) => {

  return (
    <>
      <style jsx global>
        {`
          a {
            text-decoration: none !important;
            cursor: pointer;
            color: #0070f3;
          }
          a:hover {
            color: #0366d6;
          }
          body {
            margin: 0;
            padding: 0;
            color: #111;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
              'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
              'Helvetica Neue', sans-serif;
            background-color: #fff;
          }
          h2 {
            color: #333;
            text-align: center;
          }
          label {
            display: flex;
            margin-bottom: 0.5rem;
            align-items: center;
            width: 100%;
          }
          form {
            margin-bottom: 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          button {
            display: block;
            margin-bottom: 0.5rem;
            color: #fff;
            border-radius: 5px;
            border: none;
            background-color: #000;
            cursor: pointer;
            transition: all 0.2s ease 0s;
            padding: 10px 25px;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
          }
          button:hover,
          button:active {
            transform: translate3d(0px, -1px, 0px);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
          }
          header {
            border-bottom: 2px solid #004800;
            color: #fff;
            background-color: #00b;
            text-align: center;
            font-size: 2rem;
          }
          main {
            padding: 1rem;
            max-width: 1040px;
            margin: 0 auto;
            text-align: center;
          }
          footer {
            text-align: center;
            font-size: 0.8rem;
            margin-top: 1rem;
            padding: 3rem;
            color: #888;
          }
        `}
      </style>
      <Head>
        <title>GIRC-Wind</title>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Graph of collected field wind data"
        />
        <meta property="og:title" content="GIRC-Wind" />
        <meta
          property="og:description"
          content="Graph of collected field wind data"
        />
      </Head>
      <header>
        GI RC Field Wind Chart
      </header>

      <main>{children}</main>
      <footer>
        <p>
          Made with
          {' '}
          <span role="img" aria-label="Love">
            ❤️
          </span>
          ,
          {' '}
          <span role="img" aria-label="Fire">
            🔥
          </span>
          , and a keyboard by
          {' '}
          Hotaman
          .
        </p>
        <p>
          Source code is on
          {' '}
          <a href="https://github.com/Hotaman/girc-wind">Github</a>
          .
        </p>
      </footer>
    </>
  );
};
