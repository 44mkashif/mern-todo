module.exports = (app) => {
    app.use("/api/todo", require("./todo"))
}