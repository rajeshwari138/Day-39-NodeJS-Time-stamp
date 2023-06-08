const fs = require("fs")
const express = require("express")




const app = express()
app.use(express.json())

const Timestamp = new Date().toLocaleString();
// console.log(Timestamp)

app.get("/",async(request,response)=>{
    fs.writeFile("current date-time.txt",Timestamp,function(error){
        if(error){
            console.log(error)
            response.json({message:"Error Posting Current Timestamp"})
            return
        }
        
        console.log("The file was saved")
        response.json({message:"The file was saved",timestamp:Timestamp})
        
        })
}
)


app.listen(9000,()=>console.log("app listened"))