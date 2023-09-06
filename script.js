const searchText = document.getElementsByClassName("searchText");
const search = document.getElementsByClassName("search");
const cloud = document.getElementsByClassName("cloud");
const celsiusText = document.getElementsByClassName("celsius-text");
const celsiusDescription = document.getElementsByClassName("celsius-description");
const humidityH4Text1 = document.getElementsByClassName("humidity-h4-text1");
const speedTextH4 = document.getElementsByClassName("speed-text-h4");


function checkweather(city) {
    const API_key = c7848b1913cb882c176585e7bfc7f4c1;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;
}

search.addEventListener('click', () => {
    checkweather(searchText.value)
})