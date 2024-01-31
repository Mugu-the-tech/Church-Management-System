const knexoption = require('../knexfile');
const knex = require('knex')(knexoption);
module.exports = {
    index:async (req,res)=>{
        res.render('home/index');
    },


    prayer:async(req,res)=>{
        res.render('home/prayer');
    },

    prayerPost:async(req,res)=>{
        const {name, request} = req.body;
        const inserted = await knex('prayers').insert({
            name,request
        })
        res.redirect('http://localhost:5501/index.html');
    },    
    bookPost:async(req,res)=>{
        const {name, request} = req.body;
        const inserted = await knex('books').insert({
            name,request
        })
        res.redirect('http://localhost:5501/index.html');
    }, 

    adminPrayer: async (req,res)=>{
       const prayers = await knex('prayers').select('*')
        res.render('home/adminprayer', {
            prayers
        });
    }
};