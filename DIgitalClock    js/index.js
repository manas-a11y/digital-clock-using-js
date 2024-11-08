function updateClock(){

    const now = new Date();
    const hours = now.getHours();
    const mer = hours >= 12 ? "PM":"AM";
    hours = hours%12 ||12;
    hours = hours.toString().padStart(2,0);
    

    const min = now.getMinutes().toString().padStart(2,0);
    const sec = now.getSeconds().toString().padStart(2,0);
    const time  = `${hours}:${min}:${sec}:${mer}`;
    document.getElementById("clock").textContent = time;

}
updateClock();
setInterval(updateClock,1000);
