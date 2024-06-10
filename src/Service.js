import React from 'react'
import "./Service.css"
import {servicesInfos} from './ServicesDb'
import NavBar from './NavBar'

const Service = () => {
    return (
        <div>
            <NavBar />
        <div className='servicesMain'>
            <div className='search'>
                <input type='search' name="search" placeholder="Search a service...." />
                <div className='sort'>
                    <p>Sort: </p>
                    <select>
                        <option value="Location"> Location </option>
                        <option value="Price"> Price </option>
                        <option value="Category"> Category </option>
                    </select>
                </div>
            </div>

            <p className='searchLine'></p>
            <div className='serviceSum'>
                <div className='header'>
                    <h2> Come Get a Service </h2>
                    <p className='line'></p>
                    <p> Here are the most trending services on our platform. <br /> <span> Offered by our freelancers with high qualifications </span></p>
                </div>
                <img src={require('./Images/swe.jpg')} alt="swe" />
            </div>

            <div className='servicesCrds'>
                {servicesInfos.map(service => (
                    <div className='crd'> 
                        <div className='crdHead'> 
                        <div className='text'>
                        <h2>{service.name}</h2>
                        <p> Location : <span> {service.location} </span></p>
                        </div>
                        <img src={(`${service.img}`)} alt="img" />
                        <p className='lineCrd'> </p>
                        </div>

                        <div className='crdMain'>
                            <p> {service.description}</p>
                            <p className='salary'>Salary: <span> {service.salary}</span></p>
                            {/* <button> view more </button> */}
                        </div>
                    </div>
                ))}
            </div>


        </div>
        </div>
    )
}

export default Service