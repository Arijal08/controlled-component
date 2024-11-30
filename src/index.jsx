import React from "react";
import { createRoot } from "react-dom/client";
// import ControlledForm from "./components/ControlledForm";
import MyForm from "./components/MyForm";

// const element = <p>Arijal Sidik</p>;

const root = createRoot(document.getElementById("root"));

root.render(<MyForm />);
