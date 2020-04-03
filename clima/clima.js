const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c1ba29fa7ba33e49ae167cd267a42735&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}