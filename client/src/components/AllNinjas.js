import React, {useEffect, useState} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import moment from 'moment'
// import { response } from 'express';


const AllNinjas = () => {

    const [allNinjas, setAllNinjas]= useState([])

    const [deleteClicked, setDeleteClicked] = useState(false)
    const [updateBeltClicked, setUpdateBeltClicked] = useState(false)



    useEffect(()=>{
        axios.get("http://localhost:8000/api/students/all")
            .then(response => {
                console.log("MADE AXIOS.GET TO GET ALL STUDENTS!")
                console.log(response)
                console.log("MADE AXIOS.GET TO GET ALL STUDENTS!")
                setAllNinjas(response.data.results)
            })
            .catch(err=> console.log("errors retrieving all students", err))
    }, [deleteClicked, updateBeltClicked])

    const deleteStudent= (e, ninjaid)=>{
        axios.delete(`http://localhost:8000/api/students/delete/${ninjaid}`)
            .then(response=> {
                console.log("JUST SENT A DELETE REQUREST")
                console.log(response)
                // navigate("/")
                setDeleteClicked(!deleteClicked)

            })
            .catch(err=> console.log(err))
    }

    const earnBelt = (e, ninjaInput)=>{
        console.log("trying to increse this students belt number by 1", ninjaInput)
        console.log(ninjaInput.numOfBelts)
        ninjaInput.numOfBelts+=1
        console.log(ninjaInput)
        axios.put(`http://localhost:8000/api/students/update/${ninjaInput._id}`, ninjaInput)
            .then(res=> {
                console.log("response after updating belt count", res)
                setUpdateBeltClicked(!updateBeltClicked)
            })
            .catch(err=> console.log(err))

    }
    

    return (
        <div className = "row">
            <div className="col">
                <h3>Ninjas (0 belts)</h3>

                {allNinjas.filter(ninja => ninja.numOfBelts==0).map((ninja, i)=>{
                    return <div  key = {i} className="card">
                        <div className="card-body">
                            <h4 className="card-title"><Link to = {`/ninjas/${ninja._id}`}>{ninja.first_name} {ninja.last_name}</Link></h4>
                            <p>Graduation Date: {moment(ninja.graduation_date).format('MMMM Do YYYY')}</p>
                            <p>Number of Belts: {ninja.numOfBelts}</p>
                            <button className="btn-dark"><Link to = {`/ninjas/edit/${ninja._id}`}>Edit Student</Link></button>
                            <button className="btn-danger m-2" onClick={(e)=>deleteStudent(e, ninja._id )}>Drop Student</button>
                            <button className="btn-success m-2" onClick={(e)=>earnBelt(e, ninja )}>Earn Belt</button>


                        </div>
                    </div>
                })}
            </div>

            <div className="col">
                <h3>Samaurais (1-2 belts)</h3>

                {allNinjas.filter(ninja => ninja.numOfBelts>=1 && ninja.numOfBelts <3).map((ninja, i)=>{
                    return <div key = {i}  className="card">
                        <div className="card-body">
                            <h4 className="card-title"><Link to = {`/ninjas/${ninja._id}`}>{ninja.first_name} {ninja.last_name}</Link></h4>
                            {/* // moment(testDate).format('MM/DD/YYYY');
// moment().format('MMMM Do YYYY, h:mm:ss a'); */}
                            <p>Graduation Date: {moment(ninja.graduation_date).format('MMMM Do YYYY')}</p>
                            <p>Number of Belts: {ninja.numOfBelts}</p>
                            <button className="btn-dark"><Link to = {`/ninjas/edit/${ninja._id}`}>Edit Student</Link></button>
                            <button className="btn-danger m-2" onClick={(e)=>deleteStudent(e, ninja._id )}>Drop Student</button>
                            <button className="btn-success m-2" onClick={(e)=>earnBelt(e, ninja )}>Earn Belt</button>



                        </div>
                    </div>
                })}
            </div>

            <div className="col">
                <h3>Senseis (3+ belts)</h3>

                {allNinjas.filter(ninja => ninja.numOfBelts>=3).map((ninja, i)=>{
                    return <div key = {i} className="card">
                        <div className="card-body">
                            <h4 className="card-title"><Link to = {`/ninjas/${ninja._id}`}>{ninja.first_name} {ninja.last_name}</Link></h4>
                            <p>Graduation Date: {moment(ninja.graduation_date).format('MMMM Do YYYY')}</p>
                            <p>Number of Belts: {ninja.numOfBelts}</p>
                            <button className="btn-dark"><Link to = {`/ninjas/edit/${ninja._id}`}>Edit Student</Link></button>
                            <button className="btn-danger m-2" onClick={(e)=>deleteStudent(e, ninja._id )}>Drop Student</button>
                            <button className="btn-success m-2" onClick={(e)=>earnBelt(e, ninja )}>Earn Belt</button>

                            

                        </div>
                    </div>
                })}
            </div>
            
        </div>
    );
};


export default AllNinjas;