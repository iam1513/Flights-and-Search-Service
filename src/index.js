const express = require("express")
const bodyParser = require("body-parser")
const {ServerConfig} = require('./config')

// Create an express app
const app = express();

const StartTheServer = async ()=>{

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

    app.listen(ServerConfig.PORT, ()=>{
        console.log(`Live on Server ${ServerConfig.PORT}`)
    })
}

StartTheServer()