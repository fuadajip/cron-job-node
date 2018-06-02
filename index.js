const cron = require("node-cron");
const express = require("express");
const fs = require("fs");
let shell = require("shelljs");

const app = express();

// schedule task to be run on the server
// cron.schedule("* * * * *", () => {
//   console.log("running a task every minute");
// });

// cron job example to delete error log every 15st of month
// cron.schedule("* * 15 * *", function() {
//   console.log("---------------------");
//   console.log("Running Cron Job");
//   fs.unlink("./error.log", err => {
//     if (err) throw err;
//     console.log("Error file succesfully deleted");
//   });
// });

// cron job to backup database on 16:18
cron.schedule("18 16 * * *", function() {
  console.log("---------------------");
  console.log("Running Cron Job");
  if (shell.exec("sqlite3 database.sqlite  .dump > data_dump.sql").code !== 0) {
    shell.exit(1);
  } else {
    shell.echo("Database backup complete");
  }
});

app.listen(3218);
