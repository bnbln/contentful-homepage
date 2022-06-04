import * as React from "react"
import TagManager from 'react-gtm-module'

import Header from "./header"
import Footer from "./footer"
import Head from "./head"
import "../styles.css"

const tagManagerArgs = {
  gtmId: 'G-GD9T4N2W7E'
};

TagManager.initialize(tagManagerArgs)

const Layout = (props) => {
  return (
    <>
      <Head {...props} />
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
