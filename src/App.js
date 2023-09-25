import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Form from "./Form/Form";
import Compendium from "./Compendium";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Form />} />
        <Route path="/compendium" element={<Compendium />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
