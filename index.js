const express = require("express")
const path = require("path")
const env = require("dotenv").config(); // configuring env file 
const app = express()
const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_CONNECT


// Importing the Routers 
const Auth_View_Router = require("./View_Routes/auth_view")
const Auth_Route = require("./Routes/auth")

// For Parsing the user details 
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// To set mongodb connection

const {handleConnection} = require("./Connection")
handleConnection(MONGO_URL).then(()=>console.log("MONGOOSE connection is established"))
.catch((Err)=>console.log("ISSUE in connection of mongoose", Err))

//setting server side rendering
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

// using routers
app.use("/views",Auth_View_Router)
app.use("/Auth",Auth_Route)

// Models
const USER = require("./Models/user")

// connecting the PORT ( server )
app.listen(PORT,()=>console.log(`SERVER is Started at PORT ${PORT}`))

