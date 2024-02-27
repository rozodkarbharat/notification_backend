const express = require('express');
const connection = require('./db');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send("Welcome to the app!");
})

app.post('/token', (req, res) => {
    try{
        let token=req.body.token;
        console.log("token: " + token);
        let DateTime = new Date();
        let query= 'INSERT INTO notification (UserID,DateTime,Token) VALUES (?,?,?)'
        connection.query(query,['Bha9096',DateTime,token],(err,response) => {
            if (err) {
                res
                  .status(500)
                  .json({ message: "Error getting broker details", error: true });
                return;
              }
              else{
                  console.log(response,'success')
                  res.send({Message:"Token Added successfully"})
                  return;
              }
        })
    

    }
    catch(err){
        res.send({Message:"Error adding notification token"})
        console.log("Error: ", err.message)
    }
})


app.get("/mytoken", (req, res) => {
    try{
    let query= 'SELECT * from notification WHERE UserID=?'
        connection.query(query,['Bha9096'],(err,response) => {
            if (err) {
                res
                  .status(500)
                  .json({ message: "Error getting token details", error: true });
                return;
              }
              else{
                  console.log(response,'success')
                  res.send({Message:"Token Added successfully",data:response[response.length-1]})
                  return;
              }
        })
        
    }
    catch(err){
        res.send({Message:"Error adding notification token"})
        console.log("Error: ", err.message)
    }
})

app.listen(8000,() => {
    console.log('listening on port: '+8000)
});