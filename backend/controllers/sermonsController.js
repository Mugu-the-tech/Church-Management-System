const knexoption = require('../knexfile');
const knex = require('knex')(knexoption);
module.exports = {
    index: async (request,response)=>{

        let sermons;
        let pageno = 1;
        let offset = 0;
        let limit = 10;
        const count = await knex('sermons').count('id as count');
        let totalpages = Math.ceil ((count[0].count)/limit);
        if (!request.query.page){
            sermons = await knex('sermons')
            .join('categories','sermons.category_id','=','categories.id')
            .select('sermons.id','sermons.title','sermons.contents','categories.name')
            .offset(offset).limit(limit).orderBy('sermons.id','desc').orderBy('sermons.id','desc');
        }
        else{
            const {page} = request.query;
            const newoffset = (page-1) * 10;
            pageno = parseInt(page);
            sermons = await knex('sermons')
            .join('categories','sermons.category_id','=','categories.id').orderBy('sermons.id','desc')
            .select('sermons.id','sermons.title','sermons.contents','categories.name')
            .offset(newoffset).limit(limit);
        }
        
        response.render('sermons/index',{
            sermons,pageno,totalpages,
            success: request.flash('success')
        });
       
    },

    create: async (request,response)=>{
        const categories = await knex('categories').select('*');
        response.render('sermons/create',{
            categories
        });
       
    },

    store: async (request,response)=>{
        const {title,contents,category} =  request.body;
        await knex('sermons').insert({
            title,contents,
            category_id:category
        });

        request.flash('success', 'Sermon Added Successfully');
        response.redirect('/admin/sermons/index');
    },
    show: async (request,response)=>{

        const sermons = await knex('sermons')
        .where('sermons.id', request.params.id)
        .select('sermons.id','sermons.title','sermons.created_at','sermons.contents','categories.name as catname','categories.id as catid')
        .join('categories','sermons.category_id','=','categories.id');

        response.render('sermons/single',{sermon:sermons[0]})

    },
    edit: async (request,response)=>{
        const sermon = await knex('sermons')
        .where('sermons.id', request.params.id)
        .select('sermons.id','sermons.title','sermons.contents','categories.name','categories.id as catid')
        .join('categories','sermons.category_id','=','categories.id');

        const categories = await knex('categories').select('*');
        response.render('sermons/edit', {
            sermon,categories
        });
       
    },
    update: async (request,response)=>{
        const {title,contents,category} = request.body;
        await knex('sermons').where('id', request.params.id).update({
            title,
            contents,
            category_id:category
        });
        request.flash('success', 'Sermon updated Successfully');
        response.redirect('/admin/sermons/index');

    },
    destroy: async (request,response)=>{
        await knex('sermons').where('id', request.params.id).del();
        request.flash('success', ' Sermon Deleted Successfully');
        response.redirect('/admin/sermons/index');
    },
};