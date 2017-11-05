import React, { Component } from "react";
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";

// Refs
export const Chapter6Form = () => {
  console.log(PropTypes);
  const { render } = ReactDOM;

  const logColor = (title, color) => {
    return console.log(`New color: ${title} | ${color}`);
  };

  class AddColorForm extends Component {
    constructor(props) {
      super(props);
      // this.submit = this.submit.bind(this);
    }

    submit = e => {
      e.preventDefault();
      const { _title, _color } = this.refs;
      console.log(this.props.onNewColor);
      this.props.onNewColor(_title.value, _color.value);
      _title.value = "";
      _color.value = "#000";
      _title.focus();
    };

    render() {
      return (
        <form onSubmit={this.submit}>
          <h2>This is chapter6 form</h2>
          <input
            ref="_title"
            type="text"
            placeholder="color title..."
            required
          />
          <input ref="_color" type="color" required />
          <button>ADD</button>
        </form>
      );
    }
  }

  AddColorForm.propTypes = {
    onNewColor: PropTypes.func
  };

  AddColorForm.defaultProps = {
    onNewColor: f => f
  };

  render(
    <AddColorForm  />,
    document.getElementById("chapter6-form")
  );
};
