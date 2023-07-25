
const express = require('express');
const cors=require('cors');
const corsApplication=cors();   //cors allow us to relax the security applied to an API
const app=express();
const bodyParser = require('body-parser');
const fs=require('fs');

app.use(bodyParser.json());
app.use(corsApplication);
app.use(express.urlencoded({extended:true,
limit:10000,
parameterLimit: 2,}))
app.get('/getData',(req,res)=>{
    res.send("Danny Dang");
});
app.post("/postData",(req,res)=>{
    if(req.body.email!=undefined && req.body.message!=undefined && req.body.email!='' && req.body.message!=''){
        console.log(req.body);
        fs.appendFile('userInfo.txt',"Email: "+req.body.email+" message: "+req.body.message +"\r\n", (err)=>{
            console.log(err);
        });
        res.send("Successfully submitted");
    }
    else{
        console.log(req.body.message);
        console.log(req.body.email);
    }
})
app.listen(5000,()=>{
    console.log("Server started on port 5000");
});
