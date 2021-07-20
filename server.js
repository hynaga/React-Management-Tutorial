const express = require('express')
const app = express()
const port = 5000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', function (req, res) {
    res.send('Hello Express')
})

app.listen(port, () => console.log(`Listening on port ${port}`))