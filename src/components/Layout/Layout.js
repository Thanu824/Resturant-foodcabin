import React from 'react';
import Footer from"./Footer";
import Header from './Header';
const Layout = ({children}) => {
  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
  <Header/>
  <div style={{ flex: 1 }}>
    {children}
  </div>
  <Footer style={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} />
</div>
7

    </>
  );
};

export default Layout;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          