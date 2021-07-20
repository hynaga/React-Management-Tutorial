const express = require('express')
const app = express()
const port = 5000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/api/customers', function (req, res) {
    res.send([
        {
            id: 1,
            image: 'https://placeimg.com/64/64/1',
            name: '홍길동',
            birthday: '961222',
            gender: '남자',
            job: '대학생'
          },
          {
            id: 2,
            image: 'https://placeimg.com/64/64/2',
            name: '나호영',
            birthday: '111222',
            gender: '여자',
            job: '주부'
          },
          {
            id: 3,
            image: 'https://placeimg.com/64/64/3',
            name: '김현미',
            birthday: '991222',
            gender: '남자',
            job: '회사원'
          }
    ])
})

app.listen(port, () => console.log(`Listening on port ${port}`))