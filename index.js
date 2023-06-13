const express = require('express');
const app = express();

app.post('/create',(req,res,next)=> {
            let date_ob = new Date();
            let date = ("0" + date_ob.getDate()).slice(-2);
            let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
            let year = date_ob.getFullYear();
            let hours = date_ob.getHours();
            let minutes = date_ob.getMinutes();
            let seconds = date_ob.getSeconds();

            // prints date & time in YYYY-MM-DD HH:MM:SS format
            console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);   
            let datetime= year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
            
            let fs = require('fs');
            let writer = fs.createWriteStream('current date-time.txt');
            writer.write(`${datetime}`);
        });

app.get('/retrieve',(req,res,next)=> {
        let fs = require('fs');
        fs.readdir(__dirname, (err, files) => {
            if (err)
              console.log(err);
            else {
              console.log("\nCurrent directory filenames:");
              files.forEach(file => {
                console.log(file);
              })
            }
          })
});

app.listen(process.env.PORT||8000);
