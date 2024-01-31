const knexoption = require('../knexfile');
const knex = require('knex')(knexoption);
module.exports = {
    index: async (request,response)=>{
        sermons = await knex('sermons')
        .join('categories','sermons.category_id','=','categories.id')
        .select('sermons.id','sermons.title', 'sermons.created_at as datey','sermons.contents','categories.name as catname');
        response.render('home/sermons',{
            sermons            
        });
       
    },
    show: async (request,response)=>{

        const sermons = await knex('sermons')
        .where('sermons.id', request.params.id)
        .select('sermons.id','sermons.title','sermons.created_at as datey','sermons.contents','categories.name as catname','categories.id as catid')
        .join('categories','sermons.category_id','=','categories.id');

        response.render('home/sermonsingle',{sermon:sermons[0]})

    },

};