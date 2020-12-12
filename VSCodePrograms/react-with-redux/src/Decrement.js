import {connect} from 'react-redux'

let Decrement = (props)=> {
    return( <div>
            <input type="Button" value="decrement"
            onClick={props.decrement}/>
            </div>)
}


const mapDispatchToProps = (dispatch)=> {
    return {
      decrement:()=>dispatch({type:"DECREMENT_SALARY"})
    }
  }
  
  const mapStateToProps =(state)=> {
    return {
      id:state.id,
      name:state.name,
      salary:state.salary
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(Decrement);