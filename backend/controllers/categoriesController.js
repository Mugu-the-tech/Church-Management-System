const knexoption = require('../knexfile');
const knex = require('knex')(knexoption);
module.exports = {
    index: async (request, response)=>{

        let categories;
        let pageno = 1;
        let offset = 0;
        let limit = 10;
        const count = await knex('categories').count('id as count');
        let totalpages = Math.ceil ((count[0].count)/limit);
        if (!request.query.page){
            categories = await knex('categories').select('*').offset(offset).limit(limit);
        }
        else{
            const {page} = request.query;
            const newoffset = (page-1) * 10;
            pageno = parseInt(page);
            categories = await knex('categories').select('*').offset(newoffset).limit(limit);
        }

        response.render('categories/index',{
            categories,pageno,totalpages,
            success:request.flash('success')
        });
    },

    create: async (request, response)=>{
        response.render('categories/create')
    },

    store: async (request, response)=>{
        const {name} = request.body;
        await knex('categories').insert({
            name
        });
        request.flash('success','Category Added');
        response.redirect('/admin/categories/index');
    },

    edit: async (request, response)=>{
        const category = await knex('categories').where('id', request.params.id);
        response.render('categories/edit',{
            category
        }); 
        
    },

    update: async (request, response)=>{
        await knex('categories').where('id', request.params.id).update('name',request.body.name);
        request.flash('success', 'Category Updated Successfully');
        response.redirect('/admin/categories/index');
        
    },
    destroy: async (request, response)=>{
        await knex('categories').where('id',request.params.id).del();
        request.flash('success', 'Category Deleted Successfully');
        response.redirect('/admin/categories/index');
    },
};