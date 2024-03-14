const express = require('express')
const app = express()
const port = 8000
const db = require('./database/index.js')

app.use(express.json())

app.get('/', async (req, res) => {
    const result = await db.query('SELECT NOW()').catch(e => console.error(e.stack))
    res.json(result?.rows)
})

app.post('/create', async (req, res) => {
    const {
        id,
        username,
        password,
        email
    } = req.body
    // https://node-postgres.com/guides/project-structure
    const result = await db.query('INSERT INTO users (id, username, password, email) VALUES ($1, $2, $3, $4)', [id, username, password, email]).catch(e => console.error(e.stack))
    res.json(result?.rows)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})