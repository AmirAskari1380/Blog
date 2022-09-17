const express = require("express")
const mongoose = require("mongoose")
const articleRouter = require("./routes/articles")

const app = express()
 
// Connceting to the DB     
mongoose.connect("mongodb://localhost/blog", {useNewUrlParser:true, useUnifiedTopology:true})

app.set("view engine", "ejs")
 


app.use(express.urlencoded({extended:false}))

app.get("/", (req, res) => {
    // res.send("Hello World!")
    const articles = [{
        title : "Test title",
        createdAt : new Date(),
        description : "Test description" 
    } , {
        title : "Test title2",
        createdAt : new Date(),
        description : "Test description2" 
    }]
    res.render("articles/index", {articles : articles})
})

app.use("/articles", articleRouter)

app.listen(5000)