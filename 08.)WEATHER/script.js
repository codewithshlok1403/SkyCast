let api = "https://api.openweathermap.org/data/2.5/weather?q="
let apiKey = "3622d5b0ec14e225198ce7a896663102"

async function getWeather(city) {   
        let response = await fetch(api + city + `&appid=${apiKey}` + "&units=metric")
        
        if(response.status == 404){
            document.querySelector(".weather").classList.add("display")
            let error=document.querySelector(".error")
            error.classList.remove("display")
            
        }
        else{
            let data = await response.json()
            let temprature = document.querySelector(".temprature")
            temprature.innerHTML = Math.round(data.main.temp) + "°c"
            let cityName = document.querySelector(".cityName")
            cityName.innerHTML = data.name
            let valueOfHumid = document.querySelector(".valueOfHumid")
            valueOfHumid.innerHTML = data.main.humidity + "%"
            let valueOfWind = document.querySelector(".valueOfWind")
            valueOfWind.innerHTML = data.wind.speed + "km/h"
            let weatherIcon = document.querySelector(".icon")
            if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "images/cloud.png"
            }
            else if (data.weather[0].main == "Rain") {
                weatherIcon.src = "images/rain.png"
            }
            else if (data.weather[0].main == "Clear") {
                weatherIcon.src = "images/sunshine.png"
            }
            else if (data.weather[0].main == "Snow") {
                weatherIcon.src = "images/snow.png"
            }
            else if (data.weather[0].main == "mist") {
                weatherIcon.src = "images/mist.png"
            }
            document.querySelector(".weather").classList.remove("display")
            document.querySelector(".error").classList.add("display")
            console.log(data)
        }

    }

let sumbit = document.querySelector("#submit")

sumbit.addEventListener("click", () => {
    let search = document.querySelector("#search")
    getWeather(search.value)
})

let submit = document.querySelector("#search")
submit.addEventListener("keyup", (event)=> {
    if (event.keyCode === 13) {
        let search = document.querySelector("#search")
        getWeather(search.value)
    }
});
