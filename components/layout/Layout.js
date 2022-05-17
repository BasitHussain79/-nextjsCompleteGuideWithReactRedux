import Head from "next/head";
import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Layout = ({ children, title = "Book Best Hotels for your Holidays" }) => {
  return (
    <div>
      <Head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Free Web tutorials' />
        <meta name='keywords' content='HTML, CSS, JavaScript' />
        <meta name='author' content='John Doe' />
        <title>{title}</title>
      </Head>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
