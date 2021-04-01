// // import express from 'express';
// // import mongoose from 'mongoose';
// // //import bodyParser from 'body-parser';
// // //import usersRoutes from './routes/users.js';
// // import aliensRoutes from './routes/aliens.js';
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// const express = require('express')
// const mongoose = require('mongoose')
// // const url = 'mongodb://localhost/testdb'
// const aliensRoutes = require('./routes/aliens')


// const app = express();
// const PORT = 3001;
// const url = 'mongodb://localhost:27017/testdb'

// app.use(express.json())

// mongoose.connect(url, {useNewUrlParser:true});
// const con = mongoose.connection;

// con.on('open', function(){
//     console.log('connected....');
// })

// app.use('/aliens', aliensRoutes);


// // app.use(bodyParser.json());

// // app.use('/users', usersRoutes);

// // app.get('/', (req,res) => {
// //     console.log('TEST!');

// //     res.send("Hello from homepage");
// // })

// app.listen(PORT, () => console.log(`server up running on port: http://localhost:${PORT}`));

const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/AlienDBex'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const alienRouter = require('./routes/aliens.js')
app.use('/aliens',alienRouter)

app.listen(3000, () => {
    console.log('Server started')
})