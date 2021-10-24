import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import ItemContainer from "./Components/ItemContainer";
import Image from "./Components/image";
export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <Carousel />
        <ItemContainer />
        <Image />
      </div>
    );
  }
}
