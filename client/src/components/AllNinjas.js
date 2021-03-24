import React, {useEffect, useState} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';

const AllNinjas = () => {

    const [allNinjas, setAllNinjas]= useState([])


    useEffect(()=>{
        axios.get("http://localhost:8000/api/students/all")
            .then(response => {
                console.log("MADE AXIOS.GET TO GET ALL STUDENTS!")
                console.log(response)
                console.log("MADE AXIOS.GET TO GET ALL STUDENTS!")
                setAllNinjas(response.data.results)
            })
            .catch(err=> console.log("errors retrieving all students", err))
    }, [])
    

    return (
        <div className = "row">
            <div className="col">
                <h3>Ninjas (0 belts)</h3>

                {allNinjas.filter(ninja => ninja.numOfBelts==0).map((ninja, i)=>{
                    return <div className="card">
                        <div className="card-body">
                            <h4 className="card-title"><Link to = {`/ninjas/${ninja._id}`}>{ninja.first_name} {ninja.last_name}</Link></h4>
                            <p>Graduation Date: {ninja.graduation_date}</p>
                            <p>Number of Belts: {ninja.numOfBelts}</p>
                        </div>
                    </div>
                })}
            </div>

            <div className="col">
                <h3>Samaurais (1-2 belts)</h3>

                {allNinjas.filter(ninja => ninja.numOfBelts>=1 && ninja.numOfBelts <3).map((ninja, i)=>{
                    return <div className="card">
                        <div className="card-body">
                            <h4 className="card-title"><Link to = {`/ninjas/${ninja._id}`}>{ninja.first_name} {ninja.last_name}</Link></h4>
                            <p>Graduation Date: {ninja.graduation_date}</p>
                            <p>Number of Belts: {ninja.numOfBelts}</p>
                        </div>
                    </div>
                })}
            </div>

            <div className="col">
                <h3>Senseis (3+ belts)</h3>

                {allNinjas.filter(ninja => ninja.numOfBelts>=3).map((ninja, i)=>{
                    return <div className="card">
                        <div className="card-body">
                            <h4 className="card-title"><Link to = {`/ninjas/${ninja._id}`}>{ninja.first_name} {ninja.last_name}</Link></h4>
                            <p>Graduation Date: {ninja.graduation_date}</p>
                            <p>Number of Belts: {ninja.numOfBelts}</p>
                        </div>
                    </div>
                })}
            </div>
            
        </div>
    );
};


export default AllNinjas;