var express = require("express");
var bodyParser = require("body-parser")
var cors = require("cors");
var app = express();

//It is use to enable the bodyParser plugin which help to receive the 
//Json Data. 
app.use(cors());		//add middle ware 
	
var empInfo=[{"id":100,"name":"Raj","salary":12000}]

app.use(bodyParser.json());
app.use(abc);       //User-Defined middle ware application      

app.get("/empDetails",function(req,res){		// the resource 
	res.json(empInfo);
})

	
app.post("/storeEmployees",function(req,res){	//create the resource 
    console.log("Post methods")
    console.log(req.body);
    empInfo.push(req.body);
res.send("Stored Successfully.....")
    //res.json(empInfo);
});

app.put("/putInfo",function(req,res){		//update the records 
    console.log("Put methods")
    var id = req.body.id
    var salary = req.body.salary;
    empInfo.find(e=>{
            if(e.id==id){
                e.salary=salary;
                res.end("Record updated successfully...")
            }else {
                 res.end("Record is didn't update ");   
            }
    })
    
});

//http://locahost:9999/deleteInfo/100
app.delete("/deleteInfo/:id",function(req,res){
    let id = req.params.id
    let flag=0;
    empInfo.find((e,i)=>{
        if(e.id==id){
            empInfo.splice(i,1);
            flag++;
        }
    });  
    if(flag>0){
        res.send("Successfully deleted")
    } else {
        res.send("Record not present")
    }
    
});

//Simple Middleware functions 

function abc(req,res,next){
    console.log("Before Request");
    next();
}


app.listen(9999,()=>console.log("Server running on port number 9999"));
