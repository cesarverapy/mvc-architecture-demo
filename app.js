const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
    res.status(200);
    res.send("welcome to the future e-commerce");
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("server running on port "+ PORT)
    else 
        console.log("error server cant start, error");
    }
);
