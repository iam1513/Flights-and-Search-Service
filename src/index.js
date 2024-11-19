const express = require("express")

const {ServerConfig} = require('./config')

const app = express();

app.listen(ServerConfig.PORT, ()=>{
    console.log(`Live on Server ${ServerConfig.PORT}`)
})