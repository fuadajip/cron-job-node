const cron = require("node-cron");
const express = require("express");
const fs = require("fs");

const app = express();

// schedule task to be run on the server
cron.schedule("* * * * *", ()=>{
    console.log("running a task every minute")
});

app.listen(3218);
