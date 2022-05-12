import axios from "axios";


const APPI_KEY = 'b3061ea08cb71b53c681f6f0cf995e4f';
const URL = 'https://api.openweathermap.org/data/2.5/weather';



export const fetchWeather = async (query)=>{

    const {data} = await axios.get(URL,{

        params:{
            q:query,
            units:'metric',
            APPID:APPI_KEY
        }
    })
    return data;
}