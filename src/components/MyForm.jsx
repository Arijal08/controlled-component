import React from "react";
import { createRoot } from "react-dom/client";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: "",
      email: "",
      gender: "Man",
    };

    this.onNameChangeHandler = this.onNameChangeHandler.bind(this);
    this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
    this.onGenderChangeHandler = this.onGenderChangeHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeHandler(event) {
    this.setState(() => {
      return {
        nama: event.target.value,
      };
    });
  }

  onEmailChangeHandler(event) {
    this.setState(() => {
      return {
        email: event.target.value,
      };
    });
  }
  onGenderChangeHandler(event) {
    this.setState(() => {
      return {
        gender: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();

    const message = `
    Name : ${this.state.nama}
    Email : ${this.state.email} 
    Gender : ${this.state.gender}`;

    alert(message);
  }

  render() {
    return (
      <div>
        <h1>Register Form</h1>
        <form onSubmit={this.onSubmitEventHandler}>
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            value={this.state.nama}
            onChange={this.onNameChangeHandler}
            id="name"
            required
          />
          <br />
          <label htmlFor="email">Email :</label>
          <input
            type="text"
            value={this.state.email}
            onChange={this.onEmailChangeHandler}
            id="email"
            required
          />
          <br />
          <label htmlFor="gender">Gender :</label>
          <select
            id="gender"
            value={this.state.gender}
            onChange={this.onGenderChangeHandler}
            required
          >
            <option value="man">Man</option>
            <option value="woman">Woman</option>
          </select>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const root = createRoot(document.getElementById("root"));

root.render(<MyComponent />);

export default MyComponent;
