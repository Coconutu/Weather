
function aflaVremea() {
  
    const cityInput = document.getElementById("cityInput");

    if (!cityInput.value) {
        cityInput.value = "Introduceti un oras";
    }

    else {

        let city = cityInput.value;
        const api_key = "3b958b538947fb7754a10d40d821de54";
        const api_link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
        fetch(api_link)
            .then(res => res.json())
            .then(data => {
                const { weather, main } = data;
                document.getElementById("location").innerText = city;
                document.getElementById('date').innerText = (new Date()).toDateString();
                document.getElementById('icon').src = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
                document.getElementById("description").innerText = weather[0].description;
                document.getElementById("temperature").innerHTML = `${Math.round(main.temp - 273.15)}&#176;C`;
            });

    }
}