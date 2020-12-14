let FakeService = ({data})=>{

    let rec = data.map(rec=><li key={rec.id}>Id is {rec.id} Title is :{rec.title}</li>)
    return(
        
        <div>
            Welcome to Fake Service Example 
            <br/>
            <ul>
            {rec}
            </ul>
        </div>)
}

export async function getStaticProps() {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos")
    let data = await res.json();
    console.log("Completed...")
    return {props:{data}}
}

export default FakeService;