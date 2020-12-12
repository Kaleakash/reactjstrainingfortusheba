

const employeeInitialState =
    [{"id":100,"name":"Ajay Kumar","salary":10000}]



const employeeReducer = (state=employeeInitialState,action)=> {
    //const newState = { ...state, modalOpen: true };
    if(action.type=="ADD_EMPLOYEE"){
        
      return [...state,action.payload];  
    }
    if(action.type=="DISPLAY_EMPLOYEE"){
        return state;
    }
    if(action.type=="DELETE_EMPLOYEE"){
        //state.filter((data, i) => i !== action.id);
       return state.filter(data=>data.id!==action.id);
    }
    if(action.type=="UPDATE_EMPLOYEE"){
       let index=  state.findIndex(rec=>rec.id==action.payload.id);
        state[index].name=action.payload.name;
        state[index].salary = action.payload.salary;
        state =[...state]  
    return state;
    }
    return state;
}


export default employeeReducer;