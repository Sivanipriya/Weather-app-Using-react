import React, { useState, useEffect } from "react";
import "./Weather.css";
import Climate from '../climate/Climate';
import Forecast  from "../forecast/forecast";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, url, WEATHER_API_KEYS, CLIMATE_API_URL } from "./api";

function Weather() {
    const [search, setSearch] = useState(null);
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);

    const handleOnChange = (searchData) => {
        const [lat, lon] = searchData.value.split(" ");

        const currentWeatherFetch = fetch(`${CLIMATE_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEYS}&units=metric`);
        const forecastFetch = fetch(`${CLIMATE_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEYS}&units=metric`);

        Promise.all([currentWeatherFetch, forecastFetch])
            .then(async (response) => {
                const weatherResponse = await response[0].json();
                const forecastResponse = await response[1].json();

                setCurrentWeather({ city: searchData.label, ...weatherResponse });
                setForecast({ city: searchData.label, ...forecastResponse });
            })
            .catch((err) => console.log(err));
    };

    const handleChange = (searchData) => {
        handleOnChange(searchData);
        setSearch(searchData);
    };

    const loadOptions = (inputValue) => {
        return fetch(
            `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`, 
            url
        )
        .then((response) => response.json())
        .then((response) => {
            return {
                options: response.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    };
                }),
            };
        });
    };

    useEffect(() => {
        if (currentWeather) {
            console.log("Current Weather:", currentWeather);
        }
    }, [currentWeather]);

    useEffect(() => {
        if (forecast) {
            console.log("Forecast:", forecast);
        }
    }, [forecast]);

    return (
        <div className="container">
            <AsyncPaginate  
                placeholder="Search for city"
                debounceTimeout={600}
                value={search}
                onChange={handleChange}
                loadOptions={loadOptions}
            />
            {currentWeather && <Climate data={currentWeather}/>}
            {forecast && <Forecast data={forecast} />}
        </div>
    );
}

export default Weather;
