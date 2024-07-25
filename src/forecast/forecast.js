import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";
const WEEk = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturaday",
  "Sunday",
];
const Forecast = ({ data }) => {
  const day = new Date().getDay();
  const forecastdays = WEEk.slice(day, WEEk.length).concat(WEEk.slice(0, day));
  console.log(forecastdays);
  return (
    <>
      <label className="title">Daily </label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather"
                    className="icon-small"
                  />
                  <label className="day">{forecastdays[idx]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}°C /{" "}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pressure</label>
                  <lable>{item.main.pressure}hPa</lable>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity</label>
                  <lable>{item.main.humidity}%</lable>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds</label>
                  <lable>{item.clouds.all}%</lable>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind speed:</label>
                  <lable>{item.wind.speed}m/s</lable>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sea level</label>
                  <lable>{item.main.sea_level}m</lable>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels like</label>
                  <lable>{Math.round(item.main.feels_like)}°C</lable>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
