import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8080/notes`)
      .then((response) => response.json())
      .then((data) => {
        setCard(data);
      });
  });
  return (
    <div className="App">
      <nav className="navBar">
        <div className="img">
          <img src="data:image/png;base64,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" />
        </div>
        <div className="contact">
          <p>
            <strong>Opportunity Name : XXXXXXXX</strong>
          </p>
          <p>
            <strong>Booking Number : XXXXXXXX</strong>
          </p>
          <p>
            <strong>Opportunity Owner : XXXXXXX</strong>
          </p>
        </div>
      </nav>
      <div className="all">
        <div className="container">
          <button className="add">Add a new program</button>
          <div className="All-program">
            {card.map((item) => (
              <div className="card">
                <div className="details">
                  <h2>{item.title}</h2>
                  <p>Date of program : {item.date}</p>
                  <p>program name : {item.prog_name}</p>
                  <p>Present name : {item.present_name}</p>
                </div>
                <div className="btn">
                  <button className="edit-btn">Edit</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* numbers of company */}
        <div className="numbers">
          <h1>Opportunity Income</h1>
          <table className="opportunity_table">
            <tr>
              <td className="left_td">Client Program Fee(ex GST)</td>
              <td>$1350.00</td>
            </tr>
            <tr>
              <td className="left_td">Client Account Fee(ex GST)</td>
              <td>$0.00</td>
            </tr>
            <tr>
              <td className="left_td">Client Travel Fee(ex GST)</td>
              <td>$0.00</td>
            </tr>
            <tr>
              <td className="row-1 left_td">
                <b>SubTotal</b>
              </td>
              <td>
                <b>$1350.00</b>
              </td>
            </tr>
            <tr>
              <td className="row-1 left_td">
                <b>GST</b>
              </td>
              <td>
                <b>$135.00</b>
              </td>
            </tr>
            <tr>
              <td className="row-1 left_td">
                <b>Amount</b>
              </td>
              <td>
                <b>$1485.00</b>
              </td>
            </tr>
          </table>

          <h1>Opportunity Expense</h1>
          <table className="Expense_table">
            <tr>
              <td className="left_td">Presenter Program Fee</td>
              <td>$0.00</td>
            </tr>

            <tr>
              <td className="left_td">Presenter Travel Fee</td>
              <td>$0.00</td>
            </tr>
            <tr>
              <td className="left_td">Presenter Accomodation Fee</td>
              <td>$0.00</td>
            </tr>
            <tr>
              <td className="row-1 left_td">
                <b>Total Presenter Fee(ex GST)</b>
              </td>
              <td>
                <b>$0.00</b>
              </td>
            </tr>
          </table>
          <h1>Net Profit</h1>
          <table className="Profit_table">
            <tr>
              <td className="row-2 left_td">
                <b>Profitability(%)</b>
              </td>
              <td>100</td>
            </tr>
            <tr>
              <td className="row-2 left_td">
                <b>Total Profit</b>
              </td>
              <td>
                <b>$0.00</b>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <button id="btn-3">Save</button>
    </div>
  );
}

export default App;
