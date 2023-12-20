import ReactDOM from "react-dom/client";

import App from "./App";

// The file App.jsx now defines a React component with the name App. The command on the final line of file main.jsx renders its contents into the div-element, defined in the file index.html, having the id value 'root'.
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
