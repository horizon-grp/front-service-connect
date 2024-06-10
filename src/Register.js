import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"  //this will permit me to redirect to any page
import './Register.css'
import LineStructure from './Structures _omponents/LineStructure';
import ButtonStructure from './Structures _omponents/ButtonStructure';


const Register = () => {

    let Navigate = useNavigate(); //we asign the "useNavigate " to a variable

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");
    const [tel, setTel] = useState("");

    const checkSetName = (e) =>{
        setName(e.target.value);
    }

    const checkSetEmail = (e) =>{
        setEmail(e.target.value);
    }

    const checkSetLocation = (e) =>{
        setLocation(e.target.value);
    }

    const checkSetTel = (e) =>{
        setTel(e.target.value);
    }

    const check = name.length > 0 && email.length > 0 && location.length > 0 && tel.length > 0;

    const submiting = () => {
        if(check){
                alert("WELCOME");
                Navigate("/Home.js"); //here if conditions fulfilled, we use the variable Navigate + a bracket with the page we r redirecting to.
        }
        else{
            alert("Input not valid try again");
            Navigate(-1); // this is the way we use the navigate to go back to the previous page
        }
    }
    
    return (
        <div>
            <div className='allElt'>
            <div className='elt1'>
                <img src={require('./Images/login.jpg')} alt="register" />
                <div className='prting'>
                <div className='text'>
                    <h1> Register</h1>
                    <div className='lines'>
                        <LineStructure />
                        <p className='line2'></p>
                    </div>
                </div>
                <p> Get in our platform by registering <br /> so as to be able to have access to our number of freelancers</p>
            </div>
            </div>
            <div className='form'>
                <form>
                    <div>
                        <input type="text" name="name" id='name' value={name} placeholder=" Name...." onChange={checkSetName} />
                    </div>
                    <div>
                        <input type="email" name="email" id="email" value={email} placeholder=" Email...." onChange={checkSetEmail} />
                    </div>
                    <div>
                        <input type="text" name="location" id="location" value={location} placeholder=" Location...." onChange={checkSetLocation} />
                    </div>
                    <div>
                        <input type="int" name="tel" id="tel" value={tel} placeholder=" Phone number...." onChange={checkSetTel} />
                    </div>
                    <div>
                        <ButtonStructure submit={submiting}/>
                    </div>

                    <div className='accnt'>
                        <p> Already have an account? <a href="Login.js"> Login </a></p>
                    </div>
                </form>
                </div>
            </div>
            </div>
    )
}

export default Register