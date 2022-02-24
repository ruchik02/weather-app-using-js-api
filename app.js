// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


const weatherApi={
    key:"4926f8f088814d128c6f11d94facfe8a",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}
// fetch by id
const searchBox=document.getElementById('input-box');
// Event Listener Function on KeyPress
searchBox.addEventListener('keypress',(event)=>{
    // enter keycode is 13
    if(event.keyCode==13){
        console.log(searchBox.value);
        getWeatherReport(searchBox.value);
        // to display weather-body
        document.querySelector('.weather-body').style.display="block";
    } 
})
// Get Weather Report
function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather =>{
        return weather.json();
    }).then(showWeatherReport);
}
// show weather Report 
function showWeatherReport(weather){
    console.log(weather);
    // fetch city and country
    let city=document.getElementById('city');
    city.innerText=`${weather.name}, ${weather.sys.country}`;

    // fetch temperature
    let temperature=document.getElementById('temp');
    temperature.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

    // fetch min-max temperature
    let minMaxTemp=document.getElementById('min-max');
    minMaxTemp.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;C (min) / ${Math.ceil(weather.main.temp_max)} &deg;C(max)`;

    // fetch weatherType
    let WeatherType=document.getElementById('weather');
    WeatherType.innerText=`${weather.weather[0].main}`;

    // fetch date
    let date=document.getElementById('date');
    let todayDate=new Date(); // full date but we 
    date.innerText=dateManage(todayDate); 

    // fetch images dyanmically
    if(WeatherType.textContent== 'Clear'){
        document.body.style.backgroundImage="url('images/sky.jpg')";
    } else if(WeatherType.textContent== 'Haze'){
        document.body.style.backgroundImage="url('images/haze.jpg')";
    }else if(WeatherType.textContent== 'Clouds'){
        document.body.style.backgroundImage="url('images/cloudy.jpg')";
    }else if(WeatherType.textContent== 'Rain'){
        document.body.style.backgroundImage="url('images/rainy.jpg')";
    }else if(WeatherType.textContent== 'Snow'){
        document.body.style.backgroundImage="url('images/snow.jpg')";
    }else if(WeatherType.textContent== 'Sunny'){
        document.body.style.backgroundImage="url('images/sunny.jpg')";
    }else if(WeatherType.textContent== 'Thunderstorm'){
        document.body.style.backgroundImage="url('images/thunderstorm.jpg')";
    }else if(WeatherType.textContent== 'Windy'){
        document.body.style.backgroundImage="url('images/windy.jpg')";
    } else if(WeatherType.textContent== 'Fog'){
        document.body.style.backgroundImage="url('images/fogs.jpg')";
    }else if(WeatherType.textContent== 'Stormy'){
        document.body.style.backgroundImage="url('images/stormy.jpg')";
    }else if(WeatherType.textContent== 'Tornadoes'){
        document.body.style.backgroundImage="url('images/tornado.jpg')";
    }else if(WeatherType.textContent== 'Thundersnow'){
        document.body.style.backgroundImage="url('images/thundersnow.jpg')";
    }else if(WeatherType.textContent== 'Smoke'){
        document.body.style.backgroundImage="url('images/smoke.jpg')";
    }

}
// Date manage

function dateManage(dateArg){
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months=["January","Feburary","March","April","May","June","July","August","September","October","November","December"];
    let year=dateArg.getFullYear();
    let month=months[dateArg.getMonth()];
    let date=dateArg.getDate();
    let day=days[dateArg.getDay()];
    return `${date} ${month} (${day}), ${year}`;

}