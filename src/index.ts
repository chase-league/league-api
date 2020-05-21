import express from 'express'
const app = express()
const port = 3000

const fetch = require('node-fetch');

let apiKey = ['RGAPI-233706fd-560f-481a-82cc-76516aeeff39'] ;
let summonerName = ['chasino']

// Set up function to get accountId after searching by name, accountID is the key in most other API requests
function getId() {
  return fetch('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + summonerName + '?api_key=' + apiKey)
      .then(response => response.json())
      .then(result =>  result)
}

// using async/await gave me errors so I used this method instead
app.get('/matchlist', (req, res) =>
  getId()
    .then(result => 
      fetch('https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/' + result.accountId + '?api_key=' + apiKey)
        .then(res => res.json())
        .then(json => res.json(json))
    )
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