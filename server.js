const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();


app.use(cors());
app.use(express.json());


//going to require your mongoose connection config file
require("./server/config/mongoose.config")


//going to require your routes file
require("./server/routes/student.routes")(app)






app.listen(port, () => console.log(`Listening on port ${port}`));