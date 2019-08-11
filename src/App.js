"use strict";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      number: "",
      expMonth: "",
      expYear: "",
      expiration: "",
      cvv: ""
    };
  }

  handleChange = event => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({
      [key]: value
    });
  };

  handleSubmit = event => {
    console.log();
    event.preventDefault();
  };

  render() {
    const {
      name,
      number,
      expMonth,
      expYear,
      expiration,
      cvv
    } = this.state;

    return(
      <div>
        <CreditCardImage
          name={name}
          number={number}
          expiration={expiration}
          cvv={cvv}
        />
        <CreditCardForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          name={name}
          number={number}
          expMonth={expMonth}
          expYear={expYear}
          expiration={expiration}
          cvv={cvv}
        />
      </div>
    );
  }
}

function CreditCardImage(props) {
  const {
    name,
    number,
    expiration,
    cvv
  } = props;

  return (
    <section className="code relative mb4">
      <img src="./credit-card.jpg" alt="Credit Card"/>
      <div className="absolute card-text-container">
        <p className="mt0 mb3 f4">{number}</p>
        <div className="flex f6">
          <p className="mt0 mr3">{name}</p>
          <p className="mt0">{expiration}</p>
        </div>
        <p>{cvv}</p>
      </div>
    </section>
  );
}

function CreditCardForm(props) {
  const {
    handleSubmit,
    handleChange,
    name,
    number,
    expMonth,
    expYear,
    expiration,
    cvv
  } = props;

  return (
    <form className="avenir mh4" onSubmit={handleSubmit}>
      <div className="mb3">
        <label htmlFor="number" className="b db f7 mb2">Card Number</label>
        <input
          className="input-reset b--light-blue bl-0 br-0 bt-0 outline-0 pa1 w-100"
          id="number"
          name="number"
          type="text"
          value={number}
          onChange={handleChange}
        />
      </div>
      <div className="mb3">
        <label htmlFor="name" className="b db f7 mb2">Name on Card</label>
        <input
          className="input-reset b--light-blue bl-0 br-0 bt-0 outline-0 pa1 w-100"
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div className="mb4 flex justify-between">
        <div className="w3">
          <label htmlFor="expiration" className="b db f7 mb2">Expiration</label>
          <input
            className="input-reset b--light-blue bl-0 br-0 bt-0 outline-0 pa1 w-100"
            id="expiration"
            name="expiration"
            type="text"
            value={expiration}
            onChange={handleChange}
          />
        </div>
        <div className="w3">
          <label htmlFor="expMonth" className="b db f7 mb2">Month</label>
          <select
            className="input-reset b--light-blue bl-0 br-0 bt-0 outline-0 pa1 w-100"
            id="expMonth"
            name="expMonth"
            type="text"
            value={expMonth}
            onChange={handleChange}
          >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </div>
        <div className="w3">
          <label htmlFor="cvv" className="b db f7 mb2">CVV:</label>
          <input
            className="input-reset b--light-blue bl-0 br-0 bt-0 outline-0 pa1 w-100"
            id="cvv"
            name="cvv"
            type="text"
            value={cvv}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <input className="link white bg-navy dim br3 ph5 pv2" type="submit" value="Submit" />
      </div>
    </form>
  );
}

let domContainer = document.querySelector("#App");
ReactDOM.render(<App />, domContainer);
