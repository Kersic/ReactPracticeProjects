import React from "react";
import App, { Container } from "next/app";
import Navbar from "../components/navbar";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Navbar />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
