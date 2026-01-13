import express from "express";

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('defrost app connected!')
})

app.listen(PORT, () => {
    console.log("app is listening..")
})