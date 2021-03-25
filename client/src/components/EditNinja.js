import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

const EditNinja = (props) => {
    const [formInfo, setFormInfo] = useState({
        first_name: "",
        last_name: "",
        graduation_date: "",
        profilePicture:"",
        numOfBelts:"",
        isVeteran:false
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/students/${props.studentID}`)
            .then(response=>{
                console.log("edit form getting info about user", response)
                setFormInfo(response.data.results)
            })
            .catch(err=>console.log("errrrr", err))
    },[])



    const [errors, setErrors]= useState({})

    const changeHandler = (e)=>{
        console.log("trynaaa changeee")
        console.log(e.target)
        if(e.target.type == "checkbox"){
            setFormInfo({
                ...formInfo,
                isVeteran: !formInfo.isVeteran
            })

        }
        else{
            setFormInfo({
                ...formInfo,
                [e.target.name]: e.target.value
            })
        }
    }


    const submitHandler = (e)=>{
        e.preventDefault()
        
        axios.put(`http://localhost:8000/api/students/update/${props.studentID}`, formInfo)
            .then(response=>{
                console.log("JUST SENT A PUT REQUEST!!!")
                console.log(response)
                console.log("JUST SENT A PUT REQUEST!!!")
                navigate("/")

            })
            .catch(err=> console.log("errror on making the put request", err))
        


    }
    return (
        <div>
            <h1>Edit component to edit this ninja: {props.studentID}</h1>
            <form onSubmit = {submitHandler}className="col-6 mx-auto">
                <div className="form-group">
                    <label htmlFor="">First Name</label>
                    <input type="text" name="first_name" id="" className="form-control" onChange= {changeHandler} defaultValue={formInfo.first_name}/>
                    {/* <p className="text-danger">{errors.first_name? errors.first_name.message: ""}</p> */}
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="last_name" id="" className="form-control" onChange= {changeHandler} defaultValue={formInfo.last_name} />
                    {/* <p className="text-danger">{errors.last_name? errors.last_name.message: ""}</p> */}

                </div>
                <div className="form-group">
                    <label htmlFor="">Graduation Date</label>
                    <input type="date" name="graduation_date" id="" className="form-control" onChange= {changeHandler} defaultValue={formInfo.graduation_date}/>
                    {/* <p className="text-danger">{errors.graduation_date? errors.graduation_date.message: ""}</p> */}

                </div>
                <div className="form-group">
                    <label htmlFor="">Profile Picture</label>
                    <input type="text" name="profilePicture" id="" className="form-control" onChange= {changeHandler} defaultValue={formInfo.profilePicture}/>
                    {/* <p className="text-danger">{errors.profilePicture? errors.profilePicture.message: ""}</p> */}

                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Belts</label>
                    <input type="number" name="numOfBelts" id="" className="form-control" onChange= {changeHandler} defaultValue={formInfo.numOfBelts}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Is Veteran?</label>
                    <input type="checkbox" name="isVeteran" checked= {formInfo.isVeteran} value = {formInfo.isVeteran} id="" className="form-control" onChange= {changeHandler} defaultValue={formInfo.isVeteran}/>
                </div>
                <input type="submit" value="Update Student!" className="btn btn-success"/>
            </form>
            
        </div>
    );
};



export default EditNinja;