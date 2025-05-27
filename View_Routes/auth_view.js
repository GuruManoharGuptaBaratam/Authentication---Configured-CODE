

const express = require("express")

const router = express.Router()

router.get("/login", (req,res)=>{
     res.render("Login",{
          alert: null
     })
})

router.get("/signup",(req,res)=>{
     res.render("Signup")
})

router.get("/home",(req,res)=>{
     res.render("Home")
})

module.exports = router