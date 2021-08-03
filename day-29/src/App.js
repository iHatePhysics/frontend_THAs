import Inputloc from "./components/Input";
import WeatherCard from "./components/WeatherCard";
import { useSelector } from "react-redux";
function App() {
  const theme = useSelector((state) => state.theme);
  return (
    <div className={theme ? "dark" : "App"}>
      <div className="main-container">
        <Inputloc />
        <WeatherCard />
      </div>
    </div>
  );
}

export default App;
