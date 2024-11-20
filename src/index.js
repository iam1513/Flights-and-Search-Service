const express = require("express")
const bodyParser = require("body-parser")
const {ServerConfig} = require('./config')
const apiRoutes = require('./routes/index')

const db = require("./models/index")

// Create an express app
const app = express();

const StartTheServer = async ()=>{

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api', apiRoutes);

    app.listen(ServerConfig.PORT, ()=>{

        if(process.env.SYNC_DB){
            db.sequelize.sync({alter : true})
        }

        console.log(`Live on Server ${ServerConfig.PORT}`)
    })
}

StartTheServer()