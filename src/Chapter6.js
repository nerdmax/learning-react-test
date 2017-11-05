import React, { Component } from "react";
import PropTypes from "prop-types";
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

  render(<AddColorForm />, document.getElementById("chapter6-form"));
};

// State Management
export const Chapter6State = () => {
  const { render } = ReactDOM;

  const Star = ({ selected = false, onClick = f => f }) => {
    return (
      <div className={selected ? "star selected" : "star"} onClick={onClick} />
    );
  };

  Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
  };

  class StarRating extends Component {
    constructor(props) {
      super(props);
      this.state = {
        starsSelected: 0
      };
    }

    change = starsSelected => {
      return this.setState({ starsSelected });
    };

    render() {
      const { totalStars } = this.props;
      const { starsSelected } = this.state;
      return (
        <div className="star-rating">
          {[...Array(totalStars)].map((n, i) => {
            return (
              <Star
                key={i}
                selected={i < starsSelected}
                onClick={() => {
                  return this.change(i + 1);
                }}
              />
            );
          })}
          <p>{`${starsSelected} of ${totalStars} stars`}</p>
        </div>
      );
    }
  }

  StarRating.propTypes = {
    totalStars: PropTypes.number
  };

  StarRating.defaultProps = {
    totalStars: 5
  };

  render(<StarRating />, document.getElementById("chapter6-state"));
};
