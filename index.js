const cron = require("node-cron");
const express = require("express");
const fs = require("fs");

const app = express();

// schedule task to be run on the server
cron.schedule("* * * * *", () => {
  console.log("running a task every minute");
});

// cron job example to delete error log every 15st of month
cron.schedule("* * 15 * *", function() {
  console.log("---------------------");
  console.log("Running Cron Job");
  fs.unlink("./error.log", err => {
    if (err) throw err;
    console.log("Error file succesfully deleted");
  });
});

app.listen(3218);
