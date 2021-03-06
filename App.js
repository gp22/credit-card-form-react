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
      name: "",
      number: "",
      expMonth: "",
      expYear: "",
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
          cvv = _state.cvv;


      return React.createElement(
        "div",
        null,
        React.createElement(CreditCardImage, {
          name: name,
          number: number,
          expMonth: expMonth,
          expYear: expYear,
          cvv: cvv
        }),
        React.createElement(CreditCardForm, {
          handleChange: this.handleChange,
          handleSubmit: this.handleSubmit,
          name: name,
          number: number,
          expMonth: expMonth,
          expYear: expYear,
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
      expMonth = props.expMonth,
      expYear = props.expYear;


  return React.createElement(
    "section",
    { className: "code relative mb4" },
    React.createElement("img", { src: "./credit-card.jpg", alt: "Credit Card" }),
    React.createElement(
      "div",
      { className: "absolute card-text-container w-two-thirds" },
      React.createElement(
        "p",
        { className: "mt0 mb1 h2 f4" },
        number
      ),
      React.createElement(
        "div",
        { className: "flex f6 justify-between" },
        React.createElement(
          "p",
          { className: "mt0 mr3" },
          name
        ),
        React.createElement(
          "p",
          { className: "mt0" },
          React.createElement(
            "span",
            null,
            expMonth,
            "/",
            expYear
          )
        )
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
      cvv = props.cvv;


  var validate = function validate(values) {
    var errors = {};

    if (!values.number) {
      errors.number = 'Required';
    } else if (!/^(?:\d[ -]*?){13,16}$/gm.test(values.number)) {
      errors.number = 'Invalid number';
    }

    if (!values.name) {
      errors.name = 'Required';
    }

    return errors;
  };

  return React.createElement(
    "div",
    null,
    React.createElement(
      Formik.Formik,
      {
        initialValues: { number: number, name: name },
        validate: validate,
        onSubmit: function onSubmit(values, _ref) {
          var setSubmitting = _ref.setSubmitting;

          setTimeout(function () {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }
      },
      function (_ref2) {
        var isSubmitting = _ref2.isSubmitting;
        return React.createElement(
          Formik.Form,
          { className: "avenir mh4" },
          React.createElement(
            "div",
            { className: "mb3" },
            React.createElement(
              "label",
              { htmlFor: "number", className: "b db f7 mb2" },
              "Card Number"
            ),
            React.createElement(Formik.Field, {
              className: "input-reset b--light-blue bl-0 br-0 bt-0 outline-0 pa1 w-100",
              type: "text",
              name: "number",
              id: "number"
            }),
            React.createElement(Formik.ErrorMessage, { name: "number", component: "div" })
          ),
          React.createElement(
            "div",
            { className: "mb3" },
            React.createElement(
              "label",
              { htmlFor: "name", className: "b db f7 mb2" },
              "Name on Card"
            ),
            React.createElement(Formik.Field, {
              className: "input-reset b--light-blue bl-0 br-0 bt-0 outline-0 pa1 w-100",
              type: "text",
              name: "name",
              id: "name"
            }),
            React.createElement(Formik.ErrorMessage, { name: "name", component: "div" })
          ),
          React.createElement(
            "div",
            { className: "flex justify-center" },
            React.createElement(
              "button",
              { className: "link white bg-navy dim br3 ph5 pv2", type: "submit", disabled: isSubmitting },
              "Submit"
            )
          )
        );
      }
    )
  )
  // <form className="avenir mh4" onSubmit={handleSubmit}>
  //   <div className="mb3">
  //     <label htmlFor="number" className="b db f7 mb2">Card Number</label>
  //     <input
  //       className="input-reset b--light-blue bl-0 br-0 bt-0 outline-0 pa1 w-100"
  //       id="number"
  //       name="number"
  //       type="text"
  //       value={number}
  //       onChange={handleChange}
  //     />
  //   </div>
  //   <div className="mb3">
  //     <label htmlFor="name" className="b db f7 mb2">Name on Card</label>
  //     <input
  //       className="input-reset b--light-blue bl-0 br-0 bt-0 outline-0 pa1 w-100"
  //       id="name"
  //       name="name"
  //       type="text"
  //       value={name}
  //       onChange={handleChange}
  //     />
  //   </div>
  //   <div className="mb4 flex justify-between">
  //     <div className="w3">
  //       <label htmlFor="expMonth" className="b db f7 mb2">Month</label>
  //       <select
  //         className="input-reset b--light-blue bg-white br0 bl-0 br-0 bt-0 outline-0 pa1 w-100"
  //         id="expMonth"
  //         name="expMonth"
  //         type="text"
  //         value={expMonth}
  //         onChange={handleChange}
  //       >
  //         <option disabled value="">Select</option>
  //         <option value="01">01</option>
  //         <option value="02">02</option>
  //         <option value="03">03</option>
  //         <option value="04">04</option>
  //         <option value="05">05</option>
  //         <option value="06">06</option>
  //         <option value="07">07</option>
  //         <option value="08">08</option>
  //         <option value="09">09</option>
  //         <option value="10">10</option>
  //         <option value="11">11</option>
  //         <option value="12">12</option>
  //       </select>
  //     </div>
  //     <div className="w3">
  //       <label htmlFor="expYear" className="b db f7 mb2">Year</label>
  //       <select
  //         className="input-reset b--light-blue bg-white br0 bl-0 br-0 bt-0 outline-0 pa1 w-100"
  //         id="expYear"
  //         name="expYear"
  //         type="text"
  //         value={expYear}
  //         onChange={handleChange}
  //       >
  //         <option disabled value="">Select</option>
  //         <option value="2019">2019</option>
  //         <option value="2020">2020</option>
  //         <option value="2021">2021</option>
  //         <option value="2022">2022</option>
  //         <option value="2023">2023</option>
  //         <option value="2024">2024</option>
  //         <option value="2025">2025</option>
  //         <option value="2026">2026</option>
  //       </select>
  //     </div>
  //     <div className="w3">
  //       <label htmlFor="cvv" className="b db f7 mb2">CVV:</label>
  //       <input
  //         className="input-reset b--light-blue bl-0 br-0 bt-0 outline-0 pa1 w-100"
  //         id="cvv"
  //         name="cvv"
  //         type="text"
  //         value={cvv}
  //         onChange={handleChange}
  //       />
  //     </div>
  //   </div>
  //   <div className="flex justify-center">
  //     <input className="link white bg-navy dim br3 ph5 pv2" type="submit" value="Submit" />
  //   </div>
  // </form>
  ;
}

var domContainer = document.querySelector("#App");
ReactDOM.render(React.createElement(App, null), domContainer);