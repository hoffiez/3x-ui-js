import winston from "winston";
import { consoleTransport } from "./consoleTransport.js";
export const createLogger = (name) => {
    return winston.createLogger({
        level: "silly",
        format: winston.format.label({ label: name }),
        transports: [consoleTransport],
    });
};
