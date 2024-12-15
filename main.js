import express from 'express'
import session from 'express-session'
import fs from 'fs'
import path from 'path'

const app = express()

app.use(express.json())


app.get('/userData', (req, res) => {
    fs.promises.readFile(path.resolve('DB.json'), 'utf8').then((data) => {
        const localData = JSON.parse(data)
        res.send(localData["userData"])
    })
})

app.post('/userData', (req, res) => {
    fs.promises.writeFile(path.resolve('DB.json'), JSON.stringify(req.body)).then((data) => {
        res.send('OK')
    })
})

app.get('/loginData', (req, res) => {
    fs.promises.readFile(path.resolve('DB.json'), 'utf8').then((data) => {
        const localData = JSON.parse(data)
        res.send(localData["loginData"])
    })
})

app.post('/loginData', (req, res) => {
    res.send("ok")
})

app.listen(5000)
