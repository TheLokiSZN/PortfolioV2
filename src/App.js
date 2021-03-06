import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Page from "./components/Page";
import Footer from "./components/Footer";
// import Header from './components/Header'

function App() {
  const [pages] = useState([
    {
      name: "About Me",
    },
    {
      name: "Portfolio",
    },
    {
      name: "Resume",
    },
    {
      name: "Contact Me",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);
  return (
    <div className="App">
      <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Nav>

      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;
