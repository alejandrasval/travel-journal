import "./App.css";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import { locations } from "./data";

function App() {
  const places = locations.map((obj) => {
    return <Card key={obj.item} {...obj} />;
  });
  return (
    <div className="App">
      <NavBar />
      <div>{places}</div>
    </div>
  );
}

export default App;
