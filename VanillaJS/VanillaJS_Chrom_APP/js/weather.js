const API_KEY = "99e2d07c1a64c573552d7fa835313c47";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //fetch는 promiss로 당장 무엇인가 일어나지 않고, 시간이 좀 걸린 뒤에 일어나는 것을 의미한다.
    fetch(url)
    .then((response) => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerHTML = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });

}

function onGeoError(){
    alert("Can't find you. NO weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);