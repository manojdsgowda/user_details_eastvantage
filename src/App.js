import "./App.css";
import { BrowserRouter } from "react-router-dom";
import UserDetails from "./userDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserDetails />
      </BrowserRouter>
    </div>
  );
}

export default App;
