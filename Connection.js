const mongoose = require("mongoose")


async function handleConnection(url) {
    await mongoose.connect(url)
}

module.exports = {
    handleConnection,
}