import { message } from "./types/message.type.js";
import { getMessageDate, getMessageTimestamp } from "./utils/timestamp.js";

const messages: message[] = [
    {
        text: "Hi there!",
        user: "Blue",
        added: getMessageTimestamp(),
        date: getMessageDate()
    },
    {
        text: "Hello World!",
        user: "Aayush",
        added: getMessageTimestamp(),
        date: getMessageDate()
    }
];

export { messages };