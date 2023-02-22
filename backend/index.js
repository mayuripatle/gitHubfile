const express = require("express");
const app = express();
const cors = require('cors')


const port = 5050;
const bodyParser = require("body-parser");

const enquiryrouter = require("./Routers/Enquiry_router");
const trainerrouter = require("./Routers/Trainer_router");
const courserouter = require("./Routers/Courses_router");
const studentrouter = require("./Routers/student_router");
const userRouter = require("./Routers/user-router");
const studfeeRouter = require("./Routers/StudFee_router");
const traineeAccRouter = require("./Routers/TraineAcc_router");


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

let  corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

app.use("/courses", courserouter);
app.use("/enquiry", enquiryrouter);
app.use("/student", studentrouter);
app.use("/trainer", trainerrouter);
app.use("/studfee", studfeeRouter);
app.use("/traineeAcc", traineeAccRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


