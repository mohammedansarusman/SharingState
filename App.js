import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import Parent from "./Parent";



const App = () =>{
    return(
        <div>
            <Parent />
        </div>
    ) 
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)

