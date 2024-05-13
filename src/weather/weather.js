import styled from "styled-components";
import React, {useState} from "react";
import axios from "axios";
import {
    TiWeatherSunny,
    TiWeatherStormy,
    TiWeatherShower,
    TiWeatherDownpour,
    TiWeatherSnow,
    TiWeatherCloudy,
} from "react-icons/ti";
import {BsCloudFog} from "react-icons/bs";

const api = {
    key: "596684ae5bc4b306b7c479246d92ca48",
    base: "https://api.openweathermap.org/data/2.5/",
};

// 날짜
function Weather({setCold}) {
    const dateBuilder = (d) => {
        let months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        let days = ["Sun", "Mon", "Tue", "Wed", "Tur", "Fri", "Sat"];

        let day = days[d.getDay()];
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        let date = d.getDate();

        return `${day} ${date} ${month} ${year}`;
    };
    //도시, 현재 날씨 api
    const city = "Tokyo";
    const url = `${api.base}weather?q=${city}&appid=${api.key}`;
    const [weather, setWeather] = useState("");

    axios.get(url).then((responseData) => {
        const data = responseData.data;
        setWeather({
            id: data.weather[0].id,
            temperature: data.main.temp,
            main: data.weather[0].main,
            loading: false,
        });
    });

    setCold(weather.temperature < 290 ? true : false);
// 아이콘 불러오기
    const selectIcon = () => {
        let iconId =
            weather.id === 800 ? 0 : (parseInt(weather.id) / 100).toFixed(0);
        switch (iconId) {
            case "0" :
                return <TiWeatherSunny size="6rem" color="red"/>;
            case "2" :
                return <TiWeatherStormy size="6rem" color="black"/>;
            case "3" :
                return <TiWeatherShower size="6rem" color="blue"/>;
            case "5" :
                return <TiWeatherDownpour size="6rem" color="navy"/>;
            case "6" :
                return <TiWeatherSnow size="6rem" color="white"/>;
            case "7" :
                return <BsCloudFog size="6rem" color="white"/>;
            case "8" :
                return <TiWeatherCloudy size="6rem" color="white"/>;
        }
    };
    return (
        <Wrapper>
            <div className="locationBox">
                <Location>{city}, JAPAN</Location>
                <DateDiv>-- {dateBuilder(new Date())} --</DateDiv>
            </div>

            <div className="weatherBox">
                <Temperature>{(weather.temperature - 273.15).toFixed(1)}℃</Temperature>
                <WeatherDiv>{weather.main}</WeatherDiv>
                {selectIcon()}
            </div>
        </Wrapper>
    );
}

export default Weather;
// 스타일
const Wrapper = styled.div``;
const Location = styled.div`
    color: white;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 0.5rem;
    padding: 2rem;
    margin-bottom: 1rem;
    font-size: 30px;
    font-weight: 500;
    text-shadow: 2px 2px rgba(30, 50, 50, 0.5);
`;
const DateDiv = styled.div`
    color: white;
    font-size: 15px;
    font-style: italic;
`;
const Temperature = styled.div`
    color: white;
    font-size: 50px;
    margin-top: 1rem;
`;
const WeatherDiv = styled.div`
    color: white;
    font-size: 20px;
    margin-top: 2rem;
`;
const WeatherIcon = styled.div``;