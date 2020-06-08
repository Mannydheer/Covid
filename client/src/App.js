import React from "react";
import Countries from "./components/Countries";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <Countries />
    </div>
  );
}

export default App;
