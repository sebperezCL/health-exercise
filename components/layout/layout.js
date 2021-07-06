import Head from 'next/head';
import Navbar from './navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Health Explore</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-gray-100 h-screen">
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
