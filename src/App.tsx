import {Route, Routes}  from "react-router-dom"
import MainPage from "./components/MainPage.tsx";
import SingleTodoPage from "./components/SingleTodoPage.tsx";
export default function App (){
    return <Routes>
        <Route path={"/"} element={<MainPage/>}/>
        <Route path={"/single-todo/:id"} element={<SingleTodoPage/>}/>
    </Routes>
}



