import React from 'react';
let PersonDetails = [
    {pid:100,pname:"Ravi",age:21},
    {pid:101,pname:"Ramesh",age:24},
    {pid:102,pname:"Rajesh",age:25},
    {pid:103,pname:"Ram",age:28},
]
/*
function Person(props){

}
*/
let Person = (props)=> {
        return(
            <div>
                <ul>
                    <li>id is {props.pid}</li>
                    <li>name is {props.pname}</li>
                    <li>age is {props.age}</li>
                </ul>
            </div>
        )
}
export default Person;
export {PersonDetails};