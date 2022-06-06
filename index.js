const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors')
app.use(cors())
app.use(express.json())
require('dotenv').config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@luxury.dm9na.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect()

        app.get('/home', (req, res) => {
            console.log('Mission Luxury Living!!!')
        })

    }
    finally {

    }
}

run().catch(console.dir)


app.get('/', (req, res) => {
    res.send('Mission CRUD Operation!!!')
})

app.listen(port, () => {
    console.log(`BackEnd is Running ${port}`)
})