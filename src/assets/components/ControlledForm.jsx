import React from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };

    this.onEmailChangedHandler = this.onEmailChangedHandler.bind(this);
  }

  onEmailChangedHandler(event) {
    this.setState(() => {
      return { email: event.target.value };
    });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.email}
          onChange={this.onEmailChangedHandler}
        />
      </form>
    );
  }
}

export default NameForm;
