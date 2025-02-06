const getMessageTimestamp = (): string => {
    const date = new Date();

    let hours = Math.floor(date.getHours()/10) == 0 ? `0${date.getHours()}` : `${date.getHours()}`;
    let minutes = Math.floor(date.getMinutes()/10) == 0 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;

    return `${hours}:${minutes}`;
}

const getMessageDate = (): string => {
    const date = new Date();
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

export { getMessageTimestamp, getMessageDate };