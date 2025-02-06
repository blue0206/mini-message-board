import { message } from "./types/message.type.js";
import { v4 as uuid } from "uuid";
import { getMessageDate, getMessageTimestamp } from "./utils/timestamp.js";

const messages: message[] = [
    {
        id: uuid(),
        text: "Hi there!",
        user: "Blue",
        added: getMessageTimestamp(),
        date: getMessageDate()
    },
    {
        id: uuid(),
        text: "Hello World!",
        user: "Aayush",
        added: getMessageTimestamp(),
        date: getMessageDate()
    }
];

export { messages };