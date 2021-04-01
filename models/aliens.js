// // import mongoose from 'mongoose';
// //import { stringify } from 'uuid';
// const mongoose = require('mongoose')
// const aliensSchema = new mongoose.Schema({

//     name: {
//         type: String,
//         required: true
//     },
//     tech:{
//         type: String,
//         required: true
//     },
//     sub: {
//         type: Boolean,
//         required: true,
//         default: false
//     }
// })

// // export default aliensSchema;
// module.exports = mongoose.model('Alien', aliensSchema);

const mongoose = require('mongoose')


const alienSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    sub: {
        type: Boolean,
        required: true,
        default: false
    }

})

module.exports = mongoose.model('Alien',alienSchema)