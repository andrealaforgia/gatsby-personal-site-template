import React from "react"
import { Container } from "react-bootstrap"
// import Header from "./Header"
// import Footer from "./Footer"

export default ({ children }) => (
  // <Container fluid className="px-0 theme-light app-container">
  <Container fluid className="px-0 theme-acquamarina app-container">
    {/*<Header />*/}
    <Container fluid className="pt-5 text-center min-vh-100">
      {children}
    </Container>
    {/*<Footer />*/}
  </Container>
)
