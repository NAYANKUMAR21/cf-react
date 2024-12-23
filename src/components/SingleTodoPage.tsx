
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

interface Todo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

export default function SingleTodoPage(){
    const {id} = useParams();
    const [todoData, setTodoData] = useState<Todo | null>(null)

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

    <div>Id: {todoData?.id ?? "N/A"}</div>
    <div>UserId: {todoData?.userId ?? "N/A"}</div>
    <div>Title: {todoData?.title ?? "N/A"}</div>
    <div>Completed: {todoData?.completed ? "True" : "False"}</div>


</div>

}

