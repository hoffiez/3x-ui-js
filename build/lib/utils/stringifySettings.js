export const stringifySettings = (settings) => {
    if (typeof settings === "object") {
        return JSON.stringify(settings);
    }
    if (typeof settings === "string") {
        return settings;
    }
    return "";
};
