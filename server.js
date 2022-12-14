const express = require("express")
const Article = require("./models/article")
const mongoose = require("mongoose")
const methodOverride = require("method-override")
const articleRouter = require("./routes/articles")

const app = express()
 
// Connceting to the DB
mongoose.connect("mongodb://localhost/blog", {useNewUrlParser:true, useUnifiedTopology:true})

app.set("view engine", "ejs")

app.use(express.urlencoded({extended:false}))

app.use(methodOverride("_method"))

app.get("/", async (req, res) => {
    // res.send("Hello World!")
    const articles = await Article.find().sort({createdAt : "desc"}) 
    res.render("articles/index", {articles : articles})
})

app.use("/articles", articleRouter)

app.listen(5000)