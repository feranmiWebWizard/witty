import { useState } from "react";
import "./App.css";
import AppRoutes from "./routes/Routes";
import Scroll from "./layouts/Scroll";

function App() {
  return (
    <>
      <AppRoutes />
      <Scroll />
    </>
  );
}

export default App;
