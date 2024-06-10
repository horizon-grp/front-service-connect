import React, {useState, Navigate} from 'react'
import ButtonStructure from './Structures _omponents/ButtonStructure';
import './Login.css'
import OrLine from './Structures _omponents/OrLine';
// import NavBar from './NavBar'
// import { useNavigate } from 'react-router-dom';

const Login = () => {

    const nav = Navigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    
    
    const checkSetName = (e) =>{
        setName(e.target.value);
    }

    const checkSetEmail = (e) =>{
        setEmail(e.target.value);
    }

    const check = name.length > 0 && email.length > 0 ;

    const submiting = () => {
        if(check){
                alert("WELCOME");
                nav("/Service.js"); //here if conditions fulfilled, we use the variable Navigate + a bracket with the page we r redirecting to.
        }
        else{
            alert("Input not valid try again");
            Navigate(-1); // this is the way we use the navigate to go back to the previous page
        }
    }

return (
    <div>
        <div className='form'>
            <div>   <h2> LOGIN </h2> </div>
                <form>
                    <div>
                        <input type="text" name="name" id='name' value={name} placeholder=" Name...." onChange={checkSetName} />
                    </div>
                    <div>
                        <input type="email" name="email" id="email" value={email} placeholder=" Email...." onChange={checkSetEmail} />
                    </div>
                    <div>
                        <ButtonStructure submit={submiting}/>
                    </div>

                    <div className='accnt'>
                        <p> Don't yet have an account? <a href="Register.js"> Register </a></p>
                    </div>
                </form>

                <div className='otherAccnt'>
                    <OrLine />
                    <a href="">
                    <div className='option'>
                        <img src={require('./Images/google.png')} alt="Google" />
                        <p> Sign with Google</p>
                    </div>
                    </a>
                </div>
                </div>
        </div>
)
}

export default Login