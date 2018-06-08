var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/restful_blog_app");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


//MONGOOSE CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
})

var Blog = mongoose.model("Blog", blogSchema);

Blog.create({
    title: "TestBlog",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Feels_good_man.jpg/200px-Feels_good_man.jpg",
    body: "Hello this is a blogpost"
})

//RESTFUL Routes

app.get("/blogs", function(req, res){
    res.render("index");
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server is running!");
});