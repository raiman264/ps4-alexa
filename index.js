const {Device} = require('ps4-waker');

// var ps4 = new Device();
// // ps4.turnOn().then(() => ps4.close());
// console.log(ps4);

const express = require('express')

const app = express()
const {NODE_PORT: port = 3300} = process.env;

app.get('/api/status', express.json(), async (req, res) => {
  const ps4 = new Device();
  const status = await ps4.getDeviceStatus();
  console.log({status});
  res.send(status);
});

app.post('/api/startTitle', express.json(), async (req, res, next) => {
  try {
    const { appId }  = req.body;
    if (!appId) {
      throw new Error('appId is missing');
    }

    const ps4 = new Device();
    const response = await ps4.startTitle(appId)
    res.send(response)
  } catch(e) {
    next(e);
  }
});

app.post('/api/sendKeys', express.json(), async (req, res, next) => {
  try {
    const { keys }  = req.body;
    if (!keys) {
      throw new Error('keys is missing');
    }

    const ps4 = new Device();
    const response = await ps4.sendKeys(keys)
    res.send(response)
  } catch(e) {
    next(e);
  }
});

app.use(express.static('web_client'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))