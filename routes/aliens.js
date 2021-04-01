// // import express from 'express';
// // // import Alien from '../models/aliens.js'

// // const Alien = require('../models/aliens');

// const express = require('express')
// const router = express.Router()
// const Alien = require('../models/alien.js')

// // const router = express.Router();

// router.get('/', async( req,res ) => {
//     try{
//         const aliens = await Alien.find()
//         res.json(aliens)

//     }catch(err){
//         res.send('Error' +err);
//     }
// })



// // router.post('/', async( req,res ) => {
// //     const alien = new Alien({
// //         name: req.body.name,
// //         tech: req.body.tech,
// //         sub: req.body.sub

// //     })
// //     try{
// //         const a1= await alien.save()
// //         res.json(a1)

// //     }catch(err){
// //         res.send('Error');
// //     }

// // })

// // export default router;
// module.exports = router

const express = require('express')
const router = express.Router()
const Alien = require('../models/aliens.js')


router.get('/', async(req,res) => {
    try{
           const aliens = await Alien.find()
           res.json(aliens)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const alien = await Alien.findById(req.params.id)
           res.json(alien)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const a1 =  await alien.save() 
        // res.json(a1)
        // res.send('user created')
        res.status(200).send('new user created');
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const alien = await Alien.findById(req.params.id) 
        alien.sub = req.body.sub
        const a1 = await alien.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router