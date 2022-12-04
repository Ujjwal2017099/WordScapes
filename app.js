const tesseract = require('tesseract.js');
const fs = require('fs');
const express = require('express');
const app = express();
const multer = require('multer');
const help = require('./helper');
const find = require('./search')
const path = require('path');
const storage = multer.diskStorage({
     destination:(req,file,cb)=>{
          cb(null,'./uploads')
     },
     filename:(req,file,cb)=>{
          cb(null,file.fieldname)
     }
})
const upload = multer({storage:storage});
app.use(express.static(__dirname)); 
app.set('view engine','.ejs');

app.get('/',(req,res)=>{
     res.render('index');
})

app.post('/upload',upload.single('test'),(req,res)=>{
     // console.log(req.file);
     let maze;
     var coordinates;
     const img = fs.readFileSync(`./uploads/${req.file.filename}`);
     tesseract
         .recognize(img, "eng", {
             logger: (e) => {
                 console.log(e);
             },
         })
         .then((out) => {
               let text = out.data.text;
               maze = help.fun(text);
               console.log(maze);
               const word = req.body.text;
               let words = help.seperate(word);
               coordinates = find(maze,words);
         })
         .finally(()=>{
               const obj = {
                    maze : maze,
                    word : req.body.text,
                    coordinates : coordinates
               };
               res.render('check',{obj});
         })
})

const PORT = 5000;
const HOSTNAME = "0.0.0.0";
app.listen(PORT,HOSTNAME,()=>{
     console.log(`listning on port ${PORT}`);
     console.log(`go to https://${HOSTNAME}:${PORT} on browser`);
})
