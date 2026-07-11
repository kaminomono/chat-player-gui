
export function prettyFormatTime(timeInMs: number) {
    const timeInSec = Math.floor(timeInMs / 1000);
    const timeSec = timeInSec % 60;
    const timeInMinute = Math.floor(timeInSec / 60);
    const timeMinute = timeInMinute % 60;
    const timeInHour = Math.floor(timeInMinute / 60);
    var str = "";
    if (timeInHour < 10)
        str += "0";
    str += timeInHour + ":";
    if (timeMinute < 10)
        str += "0";
    str += timeMinute + ":";
    if (timeSec < 10)
        str += "0";
    str += timeSec;
    return str;
}
