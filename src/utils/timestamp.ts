import { format } from 'date-fns';
import moment from 'moment-timezone';

const getMessageTimestamp = (time: string, timeZone: string | undefined): string => {
    const utcDate = new Date(time);
    const timeArr = time.split(" ").filter((part) => part.length > 0 && part !== '\n');
    const year = parseInt(timeArr[3]);

    // Use a map to convert month names to numbers
    const monthMap = {
        "Jan": 0, "Feb": 1, "Mar": 2, "Apr": 3, "May": 4, "Jun": 5,
        "Jul": 6, "Aug": 7, "Sep": 8, "Oct": 9, "Nov": 10, "Dec": 11
    };
    const month = monthMap[timeArr[1]];

    const day = parseInt(timeArr[2]);
    const hourArr = timeArr[4].split(":");
    const hour = parseInt(hourArr[0]);
    const minute = parseInt(hourArr[1]);
    const second = parseInt(hourArr[2]);

    const customDate = new Date(Date.UTC(year, month, day, hour, minute, second));

    if (timeZone) {
        const localDate = moment.utc(customDate).tz(timeZone).format("YYYY-MM-DD HH:mm:ss");
        const date = format(localDate, "h:mm a");
        
        return date;
    }
    return format(utcDate.toLocaleString(), "h:mm a");
}

const getMessageDate = (date: string): string => {
    return format(date, "MMMM do, yyyy");
}

export { getMessageTimestamp, getMessageDate };