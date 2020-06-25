import React from 'react';

//import Css
import './App.css';

// Import Components
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { AccountSummary } from './components/AccountSummary';
import { TransactionHistory } from './components/TransactionHistory';
import { AddTransaction } from './components/AddTransaction';

// Import PdfDocument
import {PDFDownloadLink} from "@react-pdf/renderer";
import { PdfDocument } from "./components/PdfDocument/pdfDocument";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// Import Provider
import { GlobalProvider } from './context/GlobalState';


library.add(faFilePdf);

function App() {
  return (
      <GlobalProvider> 
        <Header /> 
        <div className="container">
          <Balance />
          <AccountSummary />
          <TransactionHistory />
          <AddTransaction />
          <PDFDownloadLink />
          <PdfDocument />
        </div>
      </GlobalProvider> 
  );
}

export default App;
