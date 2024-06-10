import React from 'react'
import './Landing.css'


const Landing = () => {

return (
    <div className='landing'>
    <div>
        <img src={'./ServiceImages/welcome.jpg'} alt='welcome'/>
        <div className='imgPrt'>
            <h1>To the platform of all Domains  </h1>
            <p> Come and  get all your services been done by a <span>Pro</span></p>
        </div>

        <div className='btns'>
            <button><a href='Register.js'> Register </a></button>
            <button><a href='Login.js'> Login </a></button>
        </div>
        </div>

        </div>
)
}

export default Landing