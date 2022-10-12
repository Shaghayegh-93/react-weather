import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Shaghayegh and is
          <a href="https://github.com/Shaghayegh-93/react-weather" target={"_blank"}></a>
        </footer>
      </div>
    </div>
  );
}

export default App;
