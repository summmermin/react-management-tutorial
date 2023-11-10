import React from "react";

class Customer extends React.Component {
  render() {
    return (
      <div>
        <CustomerProfile
          img={this.props.img}
          name={this.props.name}
          id={this.props.id}
        />
        <CustomerInfo
          level={this.props.level}
          job={this.props.job}
          address={this.props.address}
        />
      </div>
    );
  }
}
class CustomerProfile extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.img} alt="profile" />
        <h2>
          {this.props.name}({this.props.id})
        </h2>
      </div>
    );
  }
}
class CustomerInfo extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.level}</p>
        <p>{this.props.address}</p>
        <p>{this.props.job}</p>
      </div>
    );
  }
}
export default Customer;
