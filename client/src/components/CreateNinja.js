import React, {useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

const CreateNinja = () => {
    const [formInfo, setFormInfo] = useState({
        first_name: "",
        last_name: "",
        graduation_date: "",
        profilePicture:"",
        numOfBelts:"",
        isVeteran:false
    })

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
        axios.post("http://localhost:8000/api/students/create", formInfo)
            .then(response=>{
                console.log("response after submitting the post request!", response)
                if(response.data.errors){
                    console.log("AWWWWWWW YOU MADE SOME VALIDATAION ERRRRORSSS THOOO")
                    setErrors(response.data.errors)

                }
                else{
                    navigate("/")
                }
            })
            .catch(err=> console.log(err))
        


    }

    return (
        <div>
            <form onSubmit = {submitHandler}className="col-6 mx-auto">
                <div className="form-group">
                    <label htmlFor="">First Name</label>
                    <input type="text" name="first_name" id="" className="form-control" onChange= {changeHandler}/>
                    <p className="text-danger">{errors.first_name? errors.first_name.message: ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="last_name" id="" className="form-control" onChange= {changeHandler}/>
                    <p className="text-danger">{errors.last_name? errors.last_name.message: ""}</p>

                </div>
                <div className="form-group">
                    <label htmlFor="">Graduation Date</label>
                    <input type="date" name="graduation_date" id="" className="form-control" onChange= {changeHandler}/>
                    <p className="text-danger">{errors.graduation_date? errors.graduation_date.message: ""}</p>

                </div>
                <div className="form-group">
                    <label htmlFor="">Profile Picture</label>
                    <input type="text" name="profilePicture" id="" className="form-control" onChange= {changeHandler}/>
                    <p className="text-danger">{errors.profilePicture? errors.profilePicture.message: ""}</p>

                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Belts</label>
                    <input type="number" name="numOfBelts" id="" className="form-control" onChange= {changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Is Veteran?</label>
                    <input type="checkbox" name="isVeteran" checked= {formInfo.isVeteran} value = {formInfo.isVeteran} id="" className="form-control" onChange= {changeHandler}/>
                </div>
                <input type="submit" value="Enroll Student!" className="btn btn-success"/>
            </form>
        </div>
    );
};


export default CreateNinja;