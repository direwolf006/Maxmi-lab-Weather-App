const [cityWeather,setCityWeather]=Object.assign({}, ...[...new Array(9).keys()].map(i => ({
    [i]: {
       city:"Enter city",
       temperature:"Search city",
       weather:"Hope it's good"

    }
})));

console.log(cityWeather);