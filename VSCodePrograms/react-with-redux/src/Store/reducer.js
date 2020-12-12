const initialState = {
    id:100,
    name:"Ajay",
    salary:12000
}

const reducer = (state=initialState,action)=> {

        const newState = {...state}     //copy the state variable. 
      //  console.log(action)
        if(action.type==="INCREMENT_SALARY"){
            
            newState.salary=newState.salary+1000;
        }

        if(action.type==="DECREMENT_SALARY"){
            newState.salary=newState.salary-1000;
        }
        
        return newState;
}

export default reducer;