import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

interface eachSingleElem{
    userId:number
    title:string
    completed:string
    id:number
}

function MainPage(){

    const [todoData, setTodoData] = useState([])
    useEffect(()=>{
        const getTodos = async ()=>{
            const data = await axios.get("https://jsonplaceholder.typicode.com/todos")
            return data.data
        }
        getTodos().then((res)=>{
            console.log(res)
            setTodoData(res)
            return res
        }).catch(er=>console.log(er.message))

    },[])
    return (<>

        <h1>Hello world</h1>

        {
            todoData.map((ele:eachSingleElem, index:number)=>{
                return <div key={index}><Link to={`/single-todo/${ele.id}`}> {ele.title} {ele.completed ? "true" : "false"}</Link></div>
            })
        }
    </>)
}

export default  MainPage;

