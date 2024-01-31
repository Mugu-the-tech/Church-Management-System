const knexoption = require('../knexfile');
const knex = require('knex')(knexoption);
module.exports = {
    index: async (request, response)=>{

        let units;
        let pageno = 1;
        let offset = 0;
        let limit = 10;
        const count = await knex('units').count('id as count');
        let totalpages = Math.ceil ((count[0].count)/limit);
        if (!request.query.page){
            units = await knex('units').join('members','members.id','=','units.head')
            .select('units.id as id','units.name as uname','units.description as desc','members.last_name as head').offset(offset).limit(limit);
        }
        else{
            const {page} = request.query;
            const newoffset = (page-1) * 10;
            pageno = parseInt(page);
            units = await knex('units').join('members','members.id','=','units.head')
            .select('units.id as id','units.name as uname','units.description as desc','members.last_name as head').offset(newoffset).limit(limit);
        }
        response.render('units/index',{
            units,pageno,totalpages,
            success:request.flash('success')
        });
    },

    create: async (request, response)=>{
        members = await knex('members').select('*')
        response.render('units/create',{members})
    },

    store: async (request, response)=>{
        const {name,description,head} = request.body;
        await knex('units').insert({
            name,description,head
        });
     
        request.flash('success','Unit Added');
        response.redirect('/admin/units/index');
    },

    edit: async (request, response)=>{
        const unit = await knex('units')
        .join('members','units.head','=','members.id')
        .select('units.id as id','units.name as name','units.description as description','members.first_name as first_name','members.last_name as last_name','members.id as head_id')
        .where('units.id', request.params.id);
        const members = await knex('members').select('id','first_name','last_name')
        response.render('units/edit',{
            unit:unit[0],members
        }); 
        
    },

    update: async (request, response)=>{
        const {name,description,head} = request.body;
        await knex('units').where('id', request.params.id).update({
            name,description,head
        });
        request.flash('success', 'Unit Updated Successfully');
        response.redirect('/admin/units/index/');
        
    },
    destroy: async (request, response)=>{
        await knex('units').where('id',request.params.id).del();
        request.flash('success', 'Units Deleted Successfully');
        response.redirect('/admin/units/index');
    },
};