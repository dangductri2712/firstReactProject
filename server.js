
const express = require('express');
const cors=require('cors');
const corsApplication=cors();   //cors allow us to relax the security applied to an API
const app=express();
const bodyParser = require('body-parser');
const fs=require('fs');
//const joi = require('joi');
app.use(bodyParser.json());
app.use(corsApplication);
app.use(express.urlencoded({extended:true,
limit:10000,
parameterLimit: 2,}))
app.get('/getData',(req,res)=>{
    res.send("Danny Dang");
});
app.post("/postData",(req,res)=>{
    // const schema = joi.object().keys({
    //     email: joi.string().trim().email().required(),
    //     password: joi.string().min(5).max(10).required()
    // })
    if(req.body.email!=undefined && req.body.password!=undefined && req.body.email!='' && req.body.password!=''){
        // const val=schema.validate(req.body, schema);
        // const {isValid} = val;
        // console.log("This value is: "+val);
        console.log(req.body);
        fs.appendFile('userInfo.txt',"Email: "+req.body.email+" password: "+req.body.password, (err)=>{
            console.log(err);
        });
    }
})
app.listen(5000,()=>{
    console.log("Server started on port 5000");
});
//joi is still having trouble