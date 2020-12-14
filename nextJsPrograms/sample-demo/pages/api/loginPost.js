let MyLoginSecure= (req,res)=> {

    //http 
    let user = req.body.name;
    let pass = req.body.pass;
    if(user=="Ravi" && pass=="123"){
        res.send("Successully Login");
    }else {
        res.send("Failure try once again");
    }
}

export default MyLoginSecure;