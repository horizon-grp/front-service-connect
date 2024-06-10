import React from 'react'
import NavBar from './NavBar'
import './Home.css'

const Home = () => {
    return (
        <div>
            <NavBar />
        <div className='Overall'> 
            <div className='prt1'>
                <div className='text'>
                    <h1> Come Get Your <br /><span>Freelance Journey</span> With <br /><span className='prtText'> Us</span></h1>
                    <p>The best platform to get your service <br /> and to come be a freelance</p>
                </div>
                    <img src={require("./Images/font1.jpg")} alt='phone'/>
                    <p className='fig'> </p>
                </div>

            <div className='prt2'>
                <div className='cardBox'>
                <div className='Card'>
                    <img src={require("./Images/chat.jpg")} alt="icon" />
                    <h1>Efficiency</h1>
                    <p>We provide to you a group of pharmacies <br /> At any time and any where </p>
                </div>
                <div className='Card'>
                    <img src={require("./Images/letter.jpg")} alt="icon2" />
                    <h1>IConfidentialty</h1>
                    <p>All your findings and drugs <br /> Shall be kept confidential </p>
                </div>
                <div className='Card'>
                    <img src={require("./Images/relax.jpg")} alt="icon3" />
                    <h1>Intergrity</h1>
                    <p>We provide to you a group of pharmacies <br /> At any time and any where </p>
                </div>
                <div className='Card'>
                    <img src={require("./Images/register.jpg")} alt="icon4" />
                    <h1> Availability</h1>
                    <p>We provide to you a group of pharmacies <br /> At any time and any where </p>
                </div>
                </div>
            </div>

            <div className='prt3'>
                <img src={require("./Images/register.jpg")} alt="registration" />
                <div className='para'><p> Do not waste your time amd your skills to find jobs let the job come to you.</p>
                <button className='btn'> Register</button>
                </div>
            </div>

            <div className='prt4'>
                <h1>Trending services</h1>
                <div className='AllTrendCrd'>
                <a href='Service.js'>
                    <div className='TrendCrd'>
                        <div className='title'>
                            <h2> Home Teacher</h2>
                        </div>
                        <img src={require("./Images/letter.jpg")} alt='logo'/>
                        <div className='crdContent'>
                            <p> Several persons have been contacted to be <br /> home teacher so you can be the next.</p>
                            <h4>200$/hr</h4>
                        </div>
                    </div>
                </a>
                <a href='Service.js'>
                    <div className='TrendCrd'>
                        <div className='title'>
                            <h2> Home Teacher</h2>
                        </div>
                        <img src={require("./Images/letter.jpg")} alt='logo'/>
                        <div className='crdContent'>
                            <p> Several persons have been contacted to be <br /> home teacher so you can be the next.</p>
                            <h4>200$/hr</h4>
                        </div>
                    </div>
                </a>
                <a href='Service.js'>
                    <div className='TrendCrd'>
                        <div className='title'>
                            <h2> Home Teacher</h2>
                        </div>
                        <img src={require("./Images/letter.jpg")} alt='logo'/>
                        <div className='crdContent'>
                            <p> Several persons have been contacted to be <br /> home teacher so you can be the next.</p>
                            <h4>200$/hr</h4>
                        </div>
                    </div>
                </a>
                <a href='Service.js'>
                    <div className='TrendCrd'>
                        <div className='title'>
                            <h2> Home Teacher</h2>
                        </div>
                        <img src={require("./Images/letter.jpg")} alt='logo'/>
                        <div className='crdContent'>
                            <p> Several persons have been contacted to be <br /> home teacher so you can be the next.</p>
                            <h4>200$/hr</h4>
                        </div>
                    </div>
                </a>
                <a href='Service.js'>
                    <div className='TrendCrd'>
                        <div className='title'>
                            <h2> Home Teacher</h2>
                        </div>
                        <img src={require("./Images/letter.jpg")} alt='logo'/>
                        <div className='crdContent'>
                            <p> Several persons have been contacted to be <br /> home teacher so you can be the next.</p>
                            <h4>200$/hr</h4>
                        </div>
                    </div>
                </a>
                <a href='Service.js'>
                    <div className='TrendCrd'>
                        <div className='title'>
                            <h2> Home Teacher</h2>
                        </div>
                        <img src={require("./Images/letter.jpg")} alt='logo'/>
                        <div className='crdContent'>
                            <p> Several persons have been contacted to be <br /> home teacher so you can be the next.</p>
                            <h4>200$/hr</h4>
                        </div>
                    </div>
                </a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home