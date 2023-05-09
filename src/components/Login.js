import {useState} from 'react';
export default function Login(){
    let [userdata, setUserData] = useState({
        name: "",
        email: "",
        password: ""
    })

    function handleChange(event){
        let element = event.target;
        if(element.id === "name"){
            setUserData({...userdata, name: element.value});
        }else if(element.id === "email"){
            setUserData({...userdata, email: element.value});
        }else{
            setUserData({...userdata, password: element.value});
        }
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(userdata)
    }


    return (
        <form className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" onChange={handleChange} value={userdata.name}/>
            <br/>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" onChange={handleChange} value={userdata.email}/>
            <br/>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" onChange={handleChange} value={userdata.password}/>
            <br/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}