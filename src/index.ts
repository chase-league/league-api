import express from 'express'
const app = express()
const port = 3000

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

app.get('/', (req, res) => res.send('Hello World!!!!'))

app.get('/champions', (req, res) => {
  console.log('retreiving all champions')
  res.json(champions)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))