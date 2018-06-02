# cron-job-node
Example implementation of cron job with nodejs

## Prerequisites
- Make sure you instal node v8+
- Install yarn

## Installation
Install depedencies form package.json
```bash
    yarn install
```

## Run
* Uncomment each tash to try each cron job individually

```bash
node index.js
```

* Try cron job to backup database
    - Create sqlite database
```bash
sqlite3 database.sqlite
```



### Cron short description
```
* * * * * *
| | | | | |
| | | | | day of week
| | | | month
| | | day of month
| | hour
| minute
second ( optional )
```
