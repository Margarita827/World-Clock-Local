function updateTime() {
  let canberra = document.querySelector("#canberra");
  let canberraDate = canberra.querySelector(".date");
  let canberraTime = canberra.querySelector(".time");
  let canberraCurrentTime = moment().tz("Australia/Canberra");

  canberraDate.innerHTML = canberraCurrentTime.format("MMMM Do YYYY");
  canberraTime.innerHTML = canberraCurrentTime.format("H:mm:ss");

  //

  let montreal = document.querySelector("#montreal");
  let montrealDate = montreal.querySelector(".date");
  let montrealTime = montreal.querySelector(".time");
  let montrealCurrentTime = moment().tz("America/Montreal");

  montrealDate.innerHTML = montrealCurrentTime.format("MMMM Do YYYY");
  montrealTime.innerHTML = montrealCurrentTime.format("H:mm:ss");
}

//

//City select
function updateCity(event) {
  let citytz = event.target.value;
  let cityName = citytz.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(citytz);
  let cities = document.querySelector("#cities");
  cities.innerHTML = ` 
  <div class="city"> 
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("H:mm:ss")}</div>
     
    
          </div>
        `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
