const {Router} = require("express");
const useresRouter = Router()
const  Users  = require("../models/user.model");
const jwt = require("jsonwebtoken");
const crypto = require("node:crypto");
const auth = require("../middleware/middleware");


useresRouter.post("/signup",async (req,res)=>{
    const {name,password,email,profile} = req.body

    if(!name || !password || !email || !profile){
        res.status(400).send("Please add all field")
    }
    
    const userExists = await Users.findOne({email}) ;

    if(userExists){
        res.status(400).send("User already exists")
    }
    const hash = crypto.pbkdf2Sync(password,"SECERTSALT1234",60,64,"sha256").toString("hex")
    const user = new Users({name,hash,email,profile})
    user.save().then(()=>{
        res.send(user)
    })
})

useresRouter.post("/signin", async(req,res)=>{
    const {email,password} = req.body;
    const user = await Users.findOne({email:email});

    if(!user){
        res.status(400).send("Invalid credatiol")
    }
    else {
        const hash = crypto.pbkdf2Sync(password,"SECERTSALT1234",60,64,"sha256").toString("hex")
    
        if(hash !== user.hash){
            return res.send("Invalid credatiol")
        }
        const token = jwt.sign({name:user.name,age:user.age},"SECRET12345")
        return res.send({message:"Signe success",token})
    }
    
})

useresRouter.get("/profile/:id",auth, async(req,res)=>{
    try {
        const user = await Users.findById(req.params.id);
        res.status(200).send(user)
    }
    catch(err){
        res.status(400).send({message:err.message})
    }
   
    
})

useresRouter.patch("/update/:id",auth,async (req,res)=>{
   try {
        let user = await Users.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        })

        res.status(200).send(user)
   }
   catch(err){
       res.status(400).send({message:err.message})
   }
})
module.exports = useresRouter