import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'd90564d2580f6e6e38e03f5ba778942e';

export const fetchWeather = async (query) => {
    const {data}  = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    }).catch((error)=>{return error.response.status});

    return data||404;
}