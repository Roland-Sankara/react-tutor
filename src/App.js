import React from "react";
import "./App.css";

import UserCard from "./components/UserCard";;

function App(){
    const data = ["Icecream", "Soda", "Bread", "Chicken"];
    const isLoggedIn = false;

    return (
        <div>
            <h1>Hello World</h1> 
            <p>Here is a paragraph</p>
            {/* a list of items */}
            <ul>
               {
                data.map(function(element,id){
                    return <li key={id}>{element}</li>;
                })
               } 
            </ul>
            {
                isLoggedIn ? <p className="para-two">User is Logged In</p> : <p className="para-one">User is Logged Out</p>
            }
            <div className="user-container">
                <UserCard text="Dummy Data" img="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"/>
                <UserCard text="Jeremy Data" img="https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"/>
                <UserCard text="The Mall" img="https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg"/>
            </div>
        </div>
    );
}

// class App extends React.Component{
//     render(){
//         return <h1>Class Component</h1>
//     }
// }

export default App;