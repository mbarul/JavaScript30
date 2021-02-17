function clock() {
    const d = new Date();
    console.log(d)
    const hours = (d.getHours() + 11) % 12 + 1;
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();

    const hour = hours * 30;
    const minute = minutes * 6;
    const second = seconds * 6;

    document.querySelector('.hour').style.transform = `rotate(${hour}deg)`;
    document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;
    document.querySelector('.second').style.transform = `rotate(${second}deg)`;
}
setInterval(clock, 1000);
const d = new Date();
console.log(d)