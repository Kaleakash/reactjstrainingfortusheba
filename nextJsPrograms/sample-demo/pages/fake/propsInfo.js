

let MyProps = ({data})=> {

    return(
        <div>
            Id is Hello {data.id}, Name is {data.name} and salary is {data.salary}
        </div>
    )
}

export function getStaticProps() {
    let data = {id:100,name:"Ramesh",salary:12000};
    return {props:{data}}
}

export default MyProps;