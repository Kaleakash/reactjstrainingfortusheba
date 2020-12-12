import {connect} from 'react-redux'

let Increment = (props)=> {
    return( <div>
            
            <input type="Button" value="Increment"
            onClick={props.increment}/>
            </div>)
}


const mapDispatchToProps = (dispatch)=> {
    return {
      increment:()=>dispatch({type:"INCREMENT_SALARY"})
    }
  }
  
  const mapStateToProps =(state)=> {
    return {
      id:state.id,
      name:state.name,
      salary:state.salary
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(Increment);