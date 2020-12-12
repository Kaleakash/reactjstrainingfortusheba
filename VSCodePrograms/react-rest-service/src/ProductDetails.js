import React from 'react';
import data from './product.json';      //import json file as a module 
class ProductDetails extends React.Component{
        constructor(props){
            super(props);
           // this.state= {productInfo:[]}
        }
    render() {
        let ProductRec = data.map(p=><tr><td>{p.pid}</td><td>{p.pname}</td><td>{p.price}</td></tr>)
            
        return(
        <div>
            <h2>Product Details from json file</h2>
            <table border="1">
                    <thead>
                    <tr>
                        <th>Pid</th>
                        <th>PName</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {ProductRec}
                    </tbody>
            </table>
        </div>)
    }
}
export default ProductDetails;