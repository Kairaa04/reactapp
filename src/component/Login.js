import React ,{useContext, useState}from 'react'
import { Fieldset ,Button,PasswordInput, TextInput} from '@mantine/core';
import { data1, data2 } from '../App'
import { useNavigate } from 'react-router-dom';
import '@mantine/core/styles.css';

export default function Login() {
  const navigate = useNavigate();
  const name = useContext(data1);
  const pass= useContext(data2);

  const [userName, setUserName] = useState([]);
  const [enteredPass, setEnteredPass] = useState([]);

  const handleuser = (e) => {
    setUserName(e.target.value)
    console.log(userName)
  }

  const handlepass = (e) => {
    setEnteredPass(e.target.value)
    console.log(enteredPass)
  }

  const handleSubmit = () => {
    console.log(userName  );
    if (userName == name && enteredPass == pass){
      
      return navigate("/Home")
    }
    else {
       return alert('WRONG ID or PASS');
    }
  }
  return (
           <center>
            <div>
            <Fieldset legend="Login" radius="md">
            <TextInput label="Enter Your Name" onChange={handleuser} placeholder="Your name" />
            <PasswordInput label="Enter Your Password" onChange={handlepass} placeholder="Password" />
            <Button bg="teal" onClick={handleSubmit} size="sm">Submit</Button>
            </Fieldset>
          </div>
         </center>
     
 
  )
}


