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
      <QRCode value="https://shy-sheep-43.loca.lt/api/quest/Downtown%20Tour%20Calgary" />,

    </div>
  );
}

export default App;
