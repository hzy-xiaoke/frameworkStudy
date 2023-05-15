const EventEmitter = require("events")

const event = new EventEmitter()

event.on("play",(data) => {
    console.log(data)
})

event.emit("play","12345","6789")
