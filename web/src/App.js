import logo from "./logo.svg";
import "./App.css";
import Map from "./Map";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
function App() {
  return (
    <div className="App">
      <div style={{ height: "80vh" }}>
        <Map/>
      </div>
      <QRCode value="http://localhost:5000/api/checkPoint" />,

    </div>
  );
}

export default App;
