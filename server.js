import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js";
import { getOrignalUrl, urlShort } from "./Controllers/urlController.js";



const app= express();
dotenv.config();
// database
connectDb();

// middleware
app.use(express.urlencoded({extended:true}))


app.get("/", (req, res)=>{
  res.render("server.ejs", {shortUrl:null})
})


// handle url submition
app.post("/shorten",urlShort )
app.get("/:shortCode", getOrignalUrl)

const Port= process.env.PORT || 8000;

app.listen(Port,()=>{
  console.log(`the server is running on the ${Port}`)
})


