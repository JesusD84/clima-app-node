const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {

    try {
        const coord = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima( coord.lat, coord.lng);
        return `El clima de ${coord.direccion} es de ${temp} °C`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
   

    //salida
}

getInfo (argv.direccion)
    .then (console.log)
    .catch (console.log);