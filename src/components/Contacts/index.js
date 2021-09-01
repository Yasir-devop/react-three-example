import {useState,useEffect} from 'react'
import List from './List'
import Form from './Form'
import './style.css'

function Contacts() {
    const [contacts,setContacts] = useState([
        {
            fullname:"Yasir",
            phone_number:"123"
        },
        {
            fullname:"Mahir",
            phone_number:"1234"
        },
        {
            fullname:"Ayşe Feyza",
            phone_number:"12345"
        },
    ]);
    useEffect(() =>{
        console.log(contacts);
    },[contacts])
    return (
        <div id="container"> 
        <h2>Contact App</h2>
            <List contacts={contacts}/>
            <Form addContact={setContacts} contacts={contacts}/>
        </div>
    )
}

export default Contacts;
