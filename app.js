'strict mode';

let interval;

// currTime = setTimeout(time, 1000);
function again() {
  //   setTimeout(time, 1000);
  interval = setInterval(time, 1000);
}
function time() {
  const myDate = new Date();
  let showDate = document.querySelector('.date');

  let date = myDate.getDate();
  let month = myDate.getMonth() + 1;
  let year = myDate.getFullYear();
  let day = myDate.getDay();
  let hour = myDate.getHours();
  let min = myDate.getMinutes();
  let sec = myDate.getSeconds();
  let disDate = `${date}/${month}/${year} ${hour}:${min}:${sec}`;

  showDate.textContent = disDate;
}
