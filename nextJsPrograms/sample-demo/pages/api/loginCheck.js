let MyLogin = (req,res)=> {
    let user = req.query.name;
    let pass = req.query.pass;
    if(user=="Ravi" && pass=="123"){
        res.send("Successully Login");
    }else {
        res.send("Failure try once again");
    }
}

export default MyLogin;