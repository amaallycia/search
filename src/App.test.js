import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Form from "./Form";

import "./style.css";
import Cities from "./Cities";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Search Engine</h1>
      <h2>
        <Cities />
      </h2>
      <Form />
    </div>
  </StrictMode>
);
