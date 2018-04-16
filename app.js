const express = require('express')
const path = require('path')
const klunch = require('k-lunch')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('index')
});

app.get('/api/:time', (req, res) => {
  let d = new Date()
  const form = {
    year: d.getFullYear(),
    month: d.getMonth()+1,
    day: d.getDate(),
    time: req.params.time,
    name: '선린인터넷고등학교',
    phase: 4
  }
  
  const options = {
    autoCode: true,
    autoDomain: true
  }
  
  klunch.getLunch(form, (err, output) => {
    if(err) res.send(null)
    else res.send(output)
  }, options)
})

module.exports = app