const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`<!DOCTYPE html>
  <html >
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <title>Date And Time in Javascript</title>
      <style>
          .container {
              font-size: 45px;
              background-color: blanchedalmond;
              padding: 23px 34px;
              margin: 5px;
              text-align: center;
          }
  
          #time {
              font-weight: 100;
          }
      </style>
  </head>
  
  <body>
      <div class="container">
  
  
          Current Time is <span id="time"></span>
      </div>
      <script>
          console.log("This is Date and Time Tutorial");
  
          // let now = new Date();
          // console.log(now);
  
          // let dt = new Date(0);
          // console.log(dt);
  
  
          // let newDate = new Date(year, month, date, hours ,minutes,seconds,milliseconds );
          // let newDate = new Date(3020, 4, 5, 6, 2, 30, 4000);
          // console.log(newDate)
  
          // let dt = newDate.getDate();
          // console.log("The date is " + dt)
  
          // let mo = newDate.getMonth();
          // console.log("The minutes is " + mo)
  
          // let hr = newDate.getHours();
          // console.log("The hours is " + hr)
  
          // let min = newDate.getMinutes();
          // console.log("The minutes is " + min);
  
          // let day = newDate.getDay();
          // console.log("The day is " + day);
  
          // newDate.setDate(35);
          // console.log(newDate)
  
          // newDate.getMinutes(30);
          // console.log(newDate);
  
          // Date.now();
          function updateTime() {
              time.innerHTML = new Date();
          }
  
  
          setInterval(updateTime, 1000);
  
      </script>
  </body>
  
 `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


