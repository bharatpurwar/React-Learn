/* eslint-disable no-param-reassign */
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,         
   //access-control-allow-credentials:true,
   optionSuccessStatus:200,
}

const app = express();
app.use(cors(corsOptions));


const DATA_FILE = path.join(__dirname, 'data.json');

app.set('port', (process.env.PORT || 3001));

//app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {

  // res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Access-Control-Allow-Credentials", "true");
  // res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  // res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
 

  next();
});

app.get('/api/timers', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    res.json(JSON.parse(data));
  });
});

app.post('/api/timers', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    const timers = JSON.parse(data);
    const newTimer = {
      title: req.body.title,
      para: req.body.para,
      id: req.body.id,
      elapsed: 0,
      runningSince: null,
    };
    timers.push(newTimer);
    fs.writeFile(DATA_FILE, JSON.stringify(timers, null, 4), () => {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(timers);
    });
  });
});

app.post('/api/timers/start', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    const timers = JSON.parse(data);
    timers.forEach((timer) => {
      if (timer.id === req.body.id) {
        timer.runningSince = req.body.start;
      }
    });
    fs.writeFile(DATA_FILE, JSON.stringify(timers, null, 4), () => {
      res.json({});
    });
  });
});

app.post('/api/timers/stop', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    const timers = JSON.parse(data);
    timers.forEach((timer) => {
      if (timer.id === req.body.id) {
        const delta = req.body.stop - timer.runningSince;
        timer.elapsed += delta;
        timer.runningSince = null;
      }
    });
    fs.writeFile(DATA_FILE, JSON.stringify(timers, null, 4), () => {
      res.json({});
    });
  });
});

app.put('/api/timers', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    const timers = JSON.parse(data);
    timers.forEach((timer) => {
      if (timer.id === req.body.id) {
        timer.title = req.body.title;
        timer.para = req.body.para;
      }
    });
    fs.writeFile(DATA_FILE, JSON.stringify(timers, null, 4), () => {
      res.json({});
    });
  });
});

app.delete('/api/timers', (req, res) => {
  
  fs.readFile(DATA_FILE, (err, data) => {
    let timers = JSON.parse(data);
    timers = timers.reduce((memo, timer) => {
      if (timer.id === req.body.id) {
        return memo;
      } else {
        return memo.concat(timer);
      }
    }, []);
    fs.writeFile(DATA_FILE, JSON.stringify(timers, null, 4), () => {
      res.json({});
    });
  });
});

app.get('/molasses', (_, res) => {
  setTimeout(() => {
    res.end();
  }, 5000);
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
