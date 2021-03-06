// reference links https://www.positronx.io/react-pdf-tutorial-generate-pdf-in-react-with-jspdf/
// IRS docs on Charitable donations https://www.irs.gov/charities-non-profits/charitable-contributions
// IRS docs on Charitable donations https://www.irs.gov/pub/irs-pdf/p526.pdf
// Donation receipt 501c3 Eform https://eforms.com/receipt/donation/501c3/
// GoogelDoc to 501c3 form https://eforms.com/download/2018/04/501c3-Donation-Receipt-Template.pdf

import React from "react";
import jsPDF from "jspdf";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  generatePDF = () => {
    var doc = new jsPDF("p", "pt");

    doc.text(20, 20, "This is the first title.");

    doc.addFont("helvetica", "normal");
    doc.text(20, 60, "This is the second title.");
    doc.text(20, 100, "This is the thrid title.");

    doc.save("demo.pdf");
  };

  render() {
    return (
      <div>
        <button onClick={this.generatePDF} type="primary">
          Download PDF
        </button>
      </div>
    );
  }
}

export default App;
