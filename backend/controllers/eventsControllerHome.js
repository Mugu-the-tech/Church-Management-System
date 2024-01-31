const knexoption = require('../knexfile');
const knex = require('knex')(knexoption);
module.exports={
    index:async(request,response)=>{
        events = await knex('events').select('*');        
        response.render('home/events',{events});
    },
};