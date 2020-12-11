import React from 'react';
import ProductDisplay from './ProductDisplay';
class Product extends React.Component {
constructor(props){
    super(props);
     this.state = {productsName:[],name:"",result:0}
    }
    updateName=(event)=> {
        this.setState({"name":event.target.value});
    }
    addProduct = (event)=> {
        let productsName=this.state.productsName;
        productsName.push(this.state.name);         //doing operation on local variable. 
        this.setState({productsName:productsName});
        console.log(this.state.productsName)
    }
    receiveResult=(data)=> {
       console.log(data)
       this.setState({"result":data})
    }
    render(){
        return(
            <div>
                <h1>Add Product</h1>
                <input type="text" name="name" onChange={this.updateName}/><br/>
                <input type="button" value="Add Product" onClick={this.addProduct}/><br/>
               {this.state.result}
               <hr/>
                <ProductDisplay pName={this.state.productsName}
                passToParent={this.receiveResult}></ProductDisplay>
            </div>
        )
    }
}

export default Product;