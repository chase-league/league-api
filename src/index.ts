import express from 'express'
const app = express()
const port = 3000

const fetch = require('node-fetch');
/*
app.get('/summoner', (req, res) => 
  fetch('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/chasino?api_key=RGAPI-51b690c0-48c3-4242-9708-94aa71a259cf')
    .then(res => res.json())
    .then(json => console.log(json))
);
*/
app.get('/summoner', (req, res) => 
  fetch('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/chasino?api_key=RGAPI-8ef26d8b-f202-40c3-8658-425826cc272d')
    .then(res => res.json())
    .then(json => res.json(json))
);

let champions = [
  {
    name: 'Zed',
    baseHp: 450,
    ad: 70
  },
  {
    name: 'Ezreal',
    baseHp: 425,
    ad: 66
  },
  {
    name: 'Corki',
    baseHp: 445,
    ad: 67
  }
]

let items = [
  {
    name: 'Longsword',
    price: 350,
    ad: 15,
    ap: 0
  },
  {
    name: 'Magic Tome',
    price: 435,
    ad: 0,
    ap: 35
  },
]

app.get('/', (req, res) => res.send('Hello World!!!!'))

app.get('/champions', (req, res) => {
  console.log('retrieving all champions')
  res.json(champions)
})

app.get('/items', (req, res) => {
  console.log('retrieving all items')
  res.json(items)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))