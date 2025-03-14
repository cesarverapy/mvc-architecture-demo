const express = require('express');

const app = express();
const PORT = 3000;

app.listen(PORT, (error) =>{
    if(!error)
        console.log("server running on port "+ PORT)
    else 
        console.log("error server cant start, error");
    }
);
