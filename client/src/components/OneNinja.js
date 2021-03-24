import React, {useEffect, useState} from 'react';
import axios from 'axios';

const OneNinja = (props) => {

    const [individualStudent, setIndividualStudent] = useState({})


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/students/${props.studentID}`)
            .then(response=>{
                console.log("response after trying to get ONE student", response)
                setIndividualStudent(response.data.results)
            })
            .catch(err=> console.log(err))
    },[])
    return (
        <div className="card">
            <img className="" src={individualStudent.profilePicture} alt="Card image cap" height='500' width='500'></img>
            <div className="card-body">
                <h4 className="card-title">{individualStudent.first_name} {individualStudent.last_name}</h4>
                <p className="card-text">Graduation Date: {individualStudent.graduation_date}</p>
                <p className="card-text">Number of belts: {individualStudent.numOfBelts}</p>
                <p className="card-text">Vet Status: {individualStudent.isVeteran? "Thank you for your service":"You're welcome for the veterans service"}</p>

                

                {/* <a href="#!" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    );
};


export default OneNinja;