"use strict";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      number: "",
      expMonth: "",
      expYear: "",
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
      cvv
    } = this.state;

    return(
      <div>
        <CreditCardImage
          name={name}
          number={number}
          expMonth={expMonth}
          expYear={expYear}
          cvv={cvv}
        />
        <CreditCardForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          name={name}
          number={number}
          expMonth={expMonth}
          expYear={expYear}
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
    expMonth,
    expYear,
  } = props;

  return (
    <section className="code relative mb4">
      <img src="./credit-card.jpg" alt="Credit Card"/>
      <div className="absolute card-text-container w-two-thirds">
        <p className="mt0 mb1 h2 f4">{number}</p>
        <div className="flex f6 justify-between">
          <p className="mt0 mr3">{name}</p>
          <p className="mt0"><span>{expMonth}/{expYear}</span></p>
        </div>
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
    cvv
  } = props;

  return (
    <div>
      <Formik.Formik
        initialValues={{ number, name }}
        validate={values => {
          let errors = {};
          if (!values.number) {
            errors.number = 'Required';
          } else if (
            !/^(?:\d[ -]*?){13,16}$/gm.test(values.number)
          ) {
            errors.number = 'Invalid number';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Formik.Form className="avenir mh4">
            <div className="mb3">
              <label htmlFor="number" className="b db f7 mb2">Card Number</label>
              <Formik.Field
                className="input-reset b--light-blue bl-0 br-0 bt-0 outline-0 pa1 w-100"
                type="text"
                name="number"
                id="number"
              />
              <Formik.ErrorMessage name="number" component="div" />
            </div>
            <div className="mb3">
              <label htmlFor="name" className="b db f7 mb2">Name on Card</label>
              <Formik.Field
                className="input-reset b--light-blue bl-0 br-0 bt-0 outline-0 pa1 w-100"
                type="text"
                name="name"
                id="name"
              />
              <Formik.ErrorMessage name="name" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Formik.Form>
        )}
      </Formik.Formik>
    </div>
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
  );
}

let domContainer = document.querySelector("#App");
ReactDOM.render(<App />, domContainer);
