const searchText = document.getElementById("search-text");

const search = document.getElementById("icon");

const cloudimg = document.getElementById("cloud");

// 404
const middle = document.getElementById("middle-cloud");
const middle404 = document.getElementById("middle-cloud-404");

// text
const errorText = document.getElementById("error-text");
const errorDescription = document.getElementById("error-description");

const celsiusText = document.getElementById("celsius-text");
const celsiusText1 = document.getElementById("celsiusDes");

const celsiusDescription = document.getElementById("celsius-description");

const humidityH4Text1 = document.getElementById("humidity-h4-text1");

const speedTextH4 = document.getElementById("speed-text-h4");

async function checkweather(city) {
    const api_key = "c7848b1913cb882c176585e7bfc7f4c1";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weatherData = await fetch(`${url}`)
        .then(response => response.json());

    console.log(weatherData);

    middle.style.display = "block";
    middle404.style.display = "none";


    if (weatherData.cod === "404") {
        middle.style.display = "none";
        middle404.style.display = "block";
        errorText.innerHTML = `${weatherData.cod}`
        errorDescription.innerHTML = `${weatherData.message}`;
        console.log(weatherData.cod);
        console.log(weatherData.message);
        console.log("error");
        return;
    }

    celsiusText.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}℃`
    celsiusDescription.innerHTML = `${weatherData.weather[0].main}`;

    humidityH4Text1.innerHTML = `${weatherData.main.humidity}%`;

    speedTextH4.innerHTML = `${weatherData.wind.speed} km/hr`;

    console.log(weatherData.weather[0].main);
    console.log(weatherData.cod);



    switch (weatherData.weather[0].main) {
        case 'Clouds':
            cloudimg.src = "/Assets/cloud.png"
            break;
        case 'Clear':
            cloudimg.src = "/Assets/clear.png"
            break;
        case 'Mist':
            cloudimg.src = "/Assets/mist.png"
            break;
        case 'Rain':
            cloudimg.src = "/Assets/rain.png"
            break;
        case 'Snow':
            cloudimg.src = "/Assets/snow.png"
            break;

    }
}
search.addEventListener('click', () => {
    checkweather(searchText.value)
})

