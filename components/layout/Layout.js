import Head from "next/head";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Layout = ({ children, title = "Book Best Hotels for your Holidays" }) => {
  return (
    <div>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Free Web tutorials' />
        <meta name='keywords' content='HTML, CSS, JavaScript' />
        <meta name='author' content='John Doe' />
        <title>{title}</title>
      </Head>
      <Header />
      <main className='main container'>{children}</main>
      <Footer />

      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </div>
  );
};

export default Layout;
