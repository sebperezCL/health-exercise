import Head from 'next/head';
import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Health Explore</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-gray-100">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
