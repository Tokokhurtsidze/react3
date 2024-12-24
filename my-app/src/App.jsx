import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <RouterProvider router={createBrowserRouter(router)} />
    </div>
  );
}

export default App;
