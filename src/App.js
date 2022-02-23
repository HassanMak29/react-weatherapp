import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SearchCity from "./components/SearchCity/SearchCity";
import WeatherForcast from "./components/WeatherForcast/WeatherForcast";
import Loader from "./components/Loader/Loader";

function App() {
  const [weatherData, setWeatherData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [lon, setLon] = useState("3.0588");
  const [lat, setLat] = useState("36.7538");
  const [location, setLocation] = useState("Algiers, Algeria");

  const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=44eeb0863b7b878491c01518d820a7af`;

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(url);
        setWeatherData(data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        console.error(err);
      }
    };

    fetchWeatherData();
  }, [url]);

  return (
    <>
      <Header />
      <main className="app">
        <SearchCity setLon={setLon} setLat={setLat} setLocation={setLocation} />
        {isLoading && <Loader />}
        {!isLoading && (
          <WeatherForcast
            weatherData={weatherData}
            location={location}
            lat={lat}
            lon={lon}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
