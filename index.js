require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routers/router')
require('./db/connection')

const portfolioServer = express()

portfolioServer.use(cors())
portfolioServer.use(express.json())
portfolioServer.use(router)
portfolioServer.use('/uploads', express.static('./uploads'))

const PORT = process.env.PORT || 4000;

portfolioServer.listen(PORT, () => {
    console.log(`Server running successfully on port number ${PORT}`);
})
portfolioServer.get('/', (req, res) => {
    res.send('Server running sucessfully and ready to accept client request');
})