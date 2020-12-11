import React from 'react';
class ProductDisplay extends React.Component {
constructor(props){
    super(props);
    
}

checkSize=()=> {
    
    this.props.passToParent(this.props.pName.length);
}
    render(){
        let productInfo = this.props.pName.map(e=><li>{e}</li>)
        return(
            <div>
                <input type="button" value="Total Number of Product" onClick={this.checkSize}/><br/>
                <h1>Product Display</h1>
                <ol>
                    {productInfo}
                </ol>
            </div>
        )
    }
}

export default ProductDisplay;