import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

export default function SingleTodoPage(){
    const {id} = useParams();
    const [todoData, setTodoData] = useState({})

    useEffect(()=>{
        const getTodos = async ()=>{
            const data = await axios.get("https://jsonplaceholder.typicode.com/todos/"+id)
            return data.data
        }
        getTodos().then((res)=>{
            console.log(res)
            setTodoData(res)
            return res
        }).catch(er=>console.log(er.message))

    },[id]);

return <div key={id}>

    <div>Id: {todoData.id}</div>
    <div>UserId: {todoData.userId}</div>
    <div>Title: {todoData.title}</div>
    <div>Completed: {todoData.completed ? 'True' :"False"}</div>


</div>

}

