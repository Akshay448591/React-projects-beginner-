import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Apps";
function index(){
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
}
export default index;