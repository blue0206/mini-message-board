const getMessageTimestamp = (): string => {
    const date = new Date();
    return `${date.getHours()} : ${date.getMinutes()}`;
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