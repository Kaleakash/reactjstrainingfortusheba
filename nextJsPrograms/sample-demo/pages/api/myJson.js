
let empJson = [{id:100,name:"Ravi",salary:12000},
            {id:101,name:"Ramesh",salary:19000},
            {id:102,name:"Ramesh",salary:17000},
            {id:103,name:"Ramu",salary:18000}
        ]

let MyJson = (req,res)=> {

    res.json(empJson);
}

export default MyJson;