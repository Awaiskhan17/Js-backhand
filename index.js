require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const obj = {
  
    "name": "freeapi",
    "version": "1.2.0",
    "description": "A API learning go",
    "type": "module",
    "main": "src/index.js",
    "scripts": {
      "start": "nodemon -r dotenv/config --experimental-json-modules src/index.js",
      "pre-commit": "lint-staged",
      "prepare": "node prepare.js"
    },
    "repository": {
      "type": "git",
      "url": "git+https://github.com/hiteshchoudhary/apihub.git"
    },
    "keywords": [
      "apihub",
      "freeapi",
      "open source",
      "api as a service",
      "public apis",
      "kitchen sink"
    ],
    "author": "Hitesh Choudhary",
    "license": "ISC",
    "bugs": {
      "url": "https://github.com/hiteshchoudhary/apihub/issues"
    },
    "homepage": "https://github.com/hiteshchoudhary/apihub#readme",
    "dependencies": {
      "@faker-js/faker": "^8.0.2",
      "bcrypt": "^5.1.0",
      "cookie-parser": "^1.4.6",
      "cors": "^2.8.5",
      "dotenv": "^16.0.3",
      "express": "^4.18.2",
      "express-compression": "^1.0.2",
      "express-rate-limit": "^6.7.0",
      "express-session": "^1.17.3",
      "express-validator": "^7.0.1",
      "jsonwebtoken": "^9.0.0",
      "mailgen": "^2.0.27",
      "mongoose": "^7.4.0",
      "mongoose-aggregate-paginate-v2": "^1.0.6",
      "morgan": "^1.10.0",
      "multer": "^1.4.5-lts.1",
      "nanoid": "^4.0.2",
      "nodemailer": "^6.9.3",
      "passport": "^0.6.0",
      "passport-github2": "^0.1.12",
      "passport-google-oauth20": "^2.0.0",
      "razorpay": "^2.8.6",
      "request-ip": "^3.3.0",
      "socket.io": "^4.7.1",
      "swagger-ui-express": "^4.6.3",
      "winston": "^3.11.0",
      "yaml": "^2.3.1"
    },
    "devDependencies": {
      "@commitlint/cli": "^17.6.6",
      "@commitlint/config-conventional": "^17.6.5",
      "husky": "^8.0.3",
      "lint-staged": "^13.2.2",
      "nodemon": "^2.0.22",
      "prettier": "^3.0.0"
    }
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/naruto' , (req , res)=>{
    res.send("Naruto is the best anima!")
})
app.get('/githubapi', (req , res)=>{
  res.json(obj)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})