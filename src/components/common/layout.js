import * as React from "react";
import { Link } from "gatsby";
import Navbar from "./navbar";
import Footer from "./footer";
const Layout = ({ pageTitle, children }) => {

  return (
    <div className="bg-dark">
        <Navbar></Navbar>
        <main>
          {children}
        </main>
        <Footer></Footer>
    </div>
  )
}

export default Layout