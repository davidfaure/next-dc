require("dotenv").config()

const app = require("./config")
const { data } = require("./data")

const handlePreloader = () => {
  const assets = []

  assets.push(data.hero.image, data.description.image)
  data.gallery.forEach(img => {
    const { image } = img
    assets.push(image)
  })

  return assets
}

app.listen(app.get("port"), () => {
  console.log(`listening on port ${app.get("port")}`)
})

app.get("/", (request, response) => {
  const assets = handlePreloader()
  response.render("pages/home", { data, assets })
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
