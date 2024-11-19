const dotenv = require('dotenv')

// Will read PORT from .env we have create 
dotenv.config();
module.exports={
    PORT : process.env.PORT
}