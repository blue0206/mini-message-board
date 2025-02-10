import { format } from 'date-fns';

function convertUTCDateToLocalDate(date: Date) {
    var newDate = new Date(date);
    newDate.setMinutes(date.getMinutes() - date.getTimezoneOffset());

    return newDate;   
}

const getMessageTimestamp = (dbTimestamp: Date): string => {
    const localDate = convertUTCDateToLocalDate(new Date(dbTimestamp));
    const date = format(localDate.toLocaleString(), "h:mm a");

    return date;
}

const getMessageDate = (dbDate: Date): string => {
    const localDate = convertUTCDateToLocalDate(new Date(dbDate));
    const date = format(localDate.toLocaleString(), "MMMM do, yyyy");

    return date;
}

export { getMessageTimestamp, getMessageDate };