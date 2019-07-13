function formatTime(newMinutes) {
    let isDay = 24 * 60;
    let isHour = 60;
    let days = Math.floor(newMinutes / isDay);
    newMinutes = newMinutes - days * isDay;
    let hours = Math.floor(newMinutes / isHour);
    newMinutes = newMinutes - hours * isHour;

    return days + ' day(s) ' + hours + ' hour(s) ' + newMinutes + ' minute(s)';
}

console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(1441));