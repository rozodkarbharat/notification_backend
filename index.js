const express = require('express');
const connection = require('./db');



const app = express();


app.get('/', (req, res) => {
    res.send("Welcome to the app!");
})

app.post('/token', (req, res) => {
    try{
        let token=req.body.token;
        let DateTime   =new Date();
        let query= 'INSERT INTO Notification (UserID,DateTime,Token) VALUES (?,?,?)'
        connection.query(query,['Bha9096',token,DateTime]).then((response) => {
            console.log(response)
            res.send({Message:"Token Added successfully"})
        })
        .catch((err) => {
            res.send({Message:"Error adding notification token"})
            console.log("catch error", err.message)
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