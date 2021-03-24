const mongoose = require('mongoose');


const StudentSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "First name to be filled out!"],
        minLength: [2, "First name must be at least 2 characters"]
    },
    last_name: {
        type: String,
        required: [true, "Last name to be filled out!"],
        minLength: [2, "Last name must be at least 2 characters"]
    },
    graduation_date: {
        type: Date,
        required: [true, "Graduation date is required"]
    },
    profilePicture: {
        type: String,
        required: [true, "Image of student is required"]
    },
    numOfBelts: {
        type: Number
    },
    isVeteran: {
        type: Boolean
    }


})

const Student = mongoose.model("Student", StudentSchema)

module.exports = Student;

