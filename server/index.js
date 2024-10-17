const express=require('express');
const mongoose=require("mongoose");
const cors=require("cors");
const StudentModel=require('./models/Students')
const bcrypt=require("bcrypt");


const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Students");

// LOGIN Route
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    // Find user by email
    StudentModel.findOne({ email: email })
        .then(user => {
            if (user) {
                
                bcrypt.compare(password, user.password, (err, response) => {
                    if (err) {
                        res.status(500).json({ error: "Internal Server Error" });
                    } else if (response) {
                        res.status(200).json("Success");  // Password matches
                    } else {
                        res.status(401).json("The password is incorrect");  // Incorrect password
                    }
                });
            } else {
                res.status(404).json("No User found");  // No user with that email
            }
        })
        .catch(err => res.status(500).json({ error: err.message }));  // Handle database errors
});

// REGISTER Route
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    // Hash the password before storing it
    bcrypt.hash(password, 10)
        .then(hash => {
           
            StudentModel.create({ name, email, password: hash })
                .then(student => res.status(201).json(student))  
                .catch(err => res.status(400).json({ error: err.message })); 
        })
        .catch(err => res.status(500).json({ error: err.message }));  
});


app.listen(3001,()=>{
        console.log("Server is rrunning on http://localhost:3001");
})