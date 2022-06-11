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

        const HomeDesignCollection = client.db("Luxury_Living").collection("Home_Design")
        const LuxuryServiceCollection = client.db("Luxury_Living").collection("Luxury_Service")

        // All design Get
        app.get('/designs', async (req, res) => {
            const query = {};
            const cursor = HomeDesignCollection.find(query);
            const designs = await cursor.toArray();
            res.send(designs);
        })

        // All Service Get
        app.get('/services', async (req, res) => {
            const query = {};
            const cursor = LuxuryServiceCollection.find(query);
            const services = await cursor.toArray();
            res.send(services);
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