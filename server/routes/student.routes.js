const StudentController = require("../controllers/student.controller")

module.exports = app => {
    app.get("/api/students/all", StudentController.findAllThings)
    app.post("/api/students/create", StudentController.createOneThing)
    app.get("/api/students/:thingid", StudentController.findOneThing)
    app.put("/api/students/update/:thingid", StudentController.updateOneThing)
    app.delete("/api/students/delete/:thingid", StudentController.deleteThing)
}
