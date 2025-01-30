import shortid from "shortid";
import { Url } from "../Models/Url.js";

export const urlShort= async(req, res)=>{
    const longUrl= req.body.longUrl;
    const shortCode= shortid.generate();
    const shortUrl= `${shortCode}`

    // save  to db
    const newUrl= new  Url({shortCode, longUrl})
    await newUrl.save();
    console.log("url short successfully", newUrl)

    res.render("server.ejs", {shortUrl});

}


export const getOrignalUrl= async(req, res)=>{
    const shortCode= req.params.shortCode;

    const urlRecord= await Url.findOne({shortCode})
    if(urlRecord){
        res.redirect(urlRecord.longUrl)
    }else{
        res.status(404).send("url is not found")
    }
}