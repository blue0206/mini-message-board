import { format } from 'date-fns';

const getMessageTimestamp = (dbTimestamp: any): string => {
    const localDate = new Date(dbTimestamp);
    const date = format(localDate.toLocaleString(), "h:mm a");

    return date;
}

const getMessageDate = (dbDate: Date): string => {
    const localDate = new Date(dbDate);
    const date = format(localDate.toLocaleString(), "MMMM do, yyyy");

    return date;
}

export { getMessageTimestamp, getMessageDate };