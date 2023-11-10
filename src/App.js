import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Customer from "./components/Customer";

const customer = {
  name: "우영우",
  id: "2sdkerlrk",
  level: "25",
  job: "개발자",
  address: "서울시 거주",
  img: "https://picsum.photos/seed/picsum/200/300",
};

class App extends Component {
  render() {
    return (
      <Customer
        name={customer.name}
        id={customer.id}
        level={customer.level}
        job={customer.job}
        address={customer.address}
        img={customer.img}
      />
    );
  }
}

export default App;
