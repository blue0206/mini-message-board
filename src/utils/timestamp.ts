import { format } from 'date-fns';
import moment from 'moment-timezone';

const getMessageTimestamp = (dbTimestamp: any): string => {
    const utcDate = new Date(dbTimestamp);
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log("DBTS", dbTimestamp);
    console.log("UTS", utcDate);
    const localDate = moment
      .utc(dbTimestamp)
      .tz(timeZone)
      .format("YYYY-MM-DD HH:mm:ss");
    console.log('localDate', localDate);
    const date = format(localDate.toLocaleString(), "h:mm a");

    return date;
}

const getMessageDate = (dbDate: Date): string => {
    const localDate = new Date(dbDate);
    const date = format(localDate.toLocaleString(), "MMMM do, yyyy");

    return date;
}

export { getMessageTimestamp, getMessageDate };