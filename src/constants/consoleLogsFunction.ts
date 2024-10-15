type LogLevel = "Event" | "Error" | "Ready" | "Success";

export const MessageLog: {[key in LogLevel]: (message: string) => void} = {
    "Event": (message) => console.log("Event - ".magenta + message + "..."),
    "Error": (message) => console.log("Error - ".red + message),
    "Ready": (message) => console.log("Ready - ".green + message),
    "Success": (message) => console.log("Success - ".yellow + message),
}