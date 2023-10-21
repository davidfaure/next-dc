require("dotenv").config()

const app = require("./config")
const { data } = require("./data")

app.listen(app.get("port"), () => {
  console.log(`listening on port ${app.get("port")}`)
})

app.get("/", (request, response) => {
  response.render("pages/home", { data })
})

app.get("/about", (request, response) => {
  response.render("pages/about")
})

app.use((request, response) => {
  response.status(404)

  if (request.accepts("html")) {
    return response.redirect("/")
  }

  if (request.accepts("json")) {
    return response.send({ error: "Not Found" })
  }

  response.type("txt").send("Not Found")
})
