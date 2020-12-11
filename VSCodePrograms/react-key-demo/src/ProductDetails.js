import React from 'react';
let ProductInfo =[
    {pid:1,pname:"Tv",price:120000},
    {pid:1,pname:"Latop",price:80000},
    {pid:3,pname:"Computer",price:45000},
    {pid:4,pname:"Bike",price:100000}
]
class ProductDetails extends React.Component {
    constructor(props){
        super(props);
    }
    sortData=()=> {
        ProductInfo.reverse();
    }
    render(){
    let ProductRec = ProductInfo.map(p=><tr key={p.pid+p.pname}><td>{p.pid}</td><td>{p.pname}</td><td>{p.price}</td></tr>);   
    
    return(
            <div>
                <table border="1">
                    <thead>
                        <tr>
                            <th>PId</th>
                            <th>PName</th>
                            <th><input type="button" value="Price" onClick={this.sortData}/></th>
                        </tr>
                    </thead>
                    <tbody>
                        {ProductRec}
                    </tbody>
                </table>    
            </div>
        )
    }
}


export default ProductDetails;