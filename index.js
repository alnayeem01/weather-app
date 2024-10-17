const apiKEy = "3762795ba6c772ceaf38687e3678416b"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl+ city +`&appid=${apiKEy}`);

    if (response.status== 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else {
        var data = await response.json();
        if (data.weather[0].main == "Clouds"){
            weatherIcon.src = "media/clouds.png"
        }else if (data.weather[0].main == "Clear"){
            weatherIcon.src = "media/clear.png"
        }else if (data.weather[0].main == "Rain"){
            weatherIcon.src = "media/rain.png"
        }else if (data.weather[0].main == "Drizzle"){
            weatherIcon.src = "media/drizzle.png"
        }else if (data.weather[0].main == "Mist"){
            weatherIcon.src = "media/mist.png"
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

   
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp )+ "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";

    
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value); 
});
searchBox.addEventListener("keypress", (event)=>{
    if (event.key === "Enter"){
        checkWeather(searchBox.value);
    }
});
