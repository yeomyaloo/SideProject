const clock = document.querySelector("div#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  clock.innerText = `현재시각 : ${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);