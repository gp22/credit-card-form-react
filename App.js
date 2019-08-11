"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.handleChange = function (event) {
      var value = event.target.value;
      var key = event.target.name;

      _this.setState(_defineProperty({}, key, value));
    };

    _this.handleSubmit = function (event) {
      console.log();
      event.preventDefault();
    };

    _this.state = {
      name: "Roberto Rodriguez",
      number: "1234 1234 1234 1234",
      expMonth: "12",
      expYear: "2017",
      expiration: "00/00",
      cvv: ""
    };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _state = this.state,
          name = _state.name,
          number = _state.number,
          expMonth = _state.expMonth,
          expYear = _state.expYear,
          expiration = _state.expiration,
          cvv = _state.cvv;


      return React.createElement(
        "div",
        null,
        React.createElement(CreditCardImage, {
          name: name,
          number: number,
          expiration: expiration,
          cvv: cvv
        }),
        React.createElement(CreditCardForm, {
          handleChange: this.handleChange,
          handleSubmit: this.handleSubmit,
          name: name,
          number: number,
          expMonth: expMonth,
          expYear: expYear,
          expiration: expiration,
          cvv: cvv
        })
      );
    }
  }]);

  return App;
}(React.Component);

function CreditCardImage(props) {
  var name = props.name,
      number = props.number,
      expiration = props.expiration,
      cvv = props.cvv;


  return React.createElement(
    "section",
    { className: "code relative" },
    React.createElement("img", { src: "./credit-card.jpg", alt: "Credit Card" }),
    React.createElement(
      "div",
      { className: "absolute card-text-container" },
      React.createElement(
        "p",
        { className: "mt0 mb3 f4" },
        number
      ),
      React.createElement(
        "div",
        { className: "flex f6" },
        React.createElement(
          "p",
          { className: "mt0 mr3" },
          name
        ),
        React.createElement(
          "p",
          { className: "mt0" },
          expiration
        )
      ),
      React.createElement(
        "p",
        null,
        cvv
      )
    )
  );
}

function CreditCardForm(props) {
  var handleSubmit = props.handleSubmit,
      handleChange = props.handleChange,
      name = props.name,
      number = props.number,
      expMonth = props.expMonth,
      expYear = props.expYear,
      expiration = props.expiration,
      cvv = props.cvv;


  return React.createElement(
    "form",
    { className: "avenir mh4", onSubmit: handleSubmit },
    React.createElement(
      "div",
      { className: "mb3" },
      React.createElement(
        "label",
        { htmlFor: "number", className: "b db f7 mb2" },
        "Card Number"
      ),
      React.createElement("input", {
        className: "input-reset b--light-blue bl-0 br-0 bt-0 outline-0 pa1 w-100",
        id: "number",
        name: "number",
        type: "text",
        value: number,
        onChange: handleChange
      })
    ),
    React.createElement(
      "div",
      { className: "mb3" },
      React.createElement(
        "label",
        { htmlFor: "name", className: "b db f7 mb2" },
        "Name on Card"
      ),
      React.createElement("input", {
        className: "input-reset b--light-blue bl-0 br-0 bt-0 outline-0 pa1 w-100",
        id: "name",
        name: "name",
        type: "text",
        value: name,
        onChange: handleChange
      })
    ),
    React.createElement(
      "div",
      { className: "mb4 flex justify-between" },
      React.createElement(
        "div",
        { className: "w3" },
        React.createElement(
          "label",
          { htmlFor: "expiration", className: "b db f7 mb2" },
          "Expiration"
        ),
        React.createElement("input", {
          className: "input-reset b--light-blue bl-0 br-0 bt-0 outline-0 pa1 w-100",
          id: "expiration",
          name: "expiration",
          type: "text",
          value: expiration,
          onChange: handleChange
        })
      ),
      React.createElement(
        "div",
        { className: "w3" },
        React.createElement(
          "label",
          { htmlFor: "expMonth", className: "b db f7 mb2" },
          "Month"
        ),
        React.createElement(
          "select",
          {
            className: "input-reset b--light-blue bl-0 br-0 bt-0 outline-0 pa1 w-100",
            id: "expMonth",
            name: "expMonth",
            type: "text",
            value: expMonth,
            onChange: handleChange
          },
          React.createElement(
            "option",
            { value: "grapefruit" },
            "Grapefruit"
          ),
          React.createElement(
            "option",
            { value: "lime" },
            "Lime"
          ),
          React.createElement(
            "option",
            { value: "coconut" },
            "Coconut"
          ),
          React.createElement(
            "option",
            { value: "mango" },
            "Mango"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "w3" },
        React.createElement(
          "label",
          { htmlFor: "cvv", className: "b db f7 mb2" },
          "CVV:"
        ),
        React.createElement("input", {
          className: "input-reset b--light-blue bl-0 br-0 bt-0 outline-0 pa1 w-100",
          id: "cvv",
          name: "cvv",
          type: "text",
          value: cvv,
          onChange: handleChange
        })
      )
    ),
    React.createElement(
      "div",
      { className: "flex justify-center" },
      React.createElement("input", { className: "link white bg-navy dim br3 ph5 pv2", type: "submit", value: "Submit" })
    )
  );
}

var domContainer = document.querySelector("#App");
ReactDOM.render(React.createElement(App, null), domContainer);