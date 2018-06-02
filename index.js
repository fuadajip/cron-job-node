const cron = require("node-cron");
const express = require("express");
const fs = require("fs");
let shell = require("shelljs");
let nodemailer = require("nodemailer");

const app = express();
require("dotenv").config();

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS
  }
});

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
// cron.schedule("18 16 * * *", function() {
//   console.log("---------------------");
//   console.log("Running Cron Job");
//   if (shell.exec("sqlite3 database.sqlite  .dump > data_dump.sql").code !== 0) {
//     shell.exit(1);
//   } else {
//     shell.echo("Database backup complete");
//   }
// });

// sending emails at periodic intervals
cron.schedule("* * * * Sunday", function() {
  console.log("---------------------");
  console.log("Running Cron Job");
  let mailOptions = {
    from: process.env.EMAIL,
    to: "user@mail.com",
    subject: `Not a GDPR update ;)`,
    text: `Hi there, this email was automatically sent by us`
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      throw error;
    } else {
      console.log("Email successfully sent!");
    }
  });
});

app.listen(3218);
