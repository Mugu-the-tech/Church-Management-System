const knexoption = require('../knexfile');
const knex = require('knex')(knexoption);
module.exports={
    index:async(request,response)=>{

        let events;
        let pageno = 1;
        let offset = 0;
        let limit = 10;
        const count = await knex('events').count('id as count');
        let totalpages = Math.ceil(count[0].count/limit);

        if (!request.query.page){
            events = await knex('events').offset(offset).limit(limit);
        } else {
            const {page} = request.query;
            let newoffset = (page-1) * limit;
            pageno = parseInt(page);
            events = await knex('events').select('*').offset(newoffset).limit(limit);
        }

        
        response.render('events/index',{events, success:request.flash('success'),pageno,totalpages});
    },

    create:(request,response)=>{
        response.render('events/create');
    },

    store:async(request,response)=>{
        const {name,venue,description} = request.body;
        await knex('events').insert({
            name,venue,description
        });
        request.flash('success', 'Event Successfully Added');
        response.redirect('/admin/events/index');
    },
    show:async(request,response)=>{
        const events = await knex('events').where('id',request.params.id);
        response.render('events/single', {event:events[0]});        
    },
    edit:async(request,response)=>{
        const events = await knex('events').where('id',request.params.id);
        response.render('events/edit',{event:events[0]});
    },
    update:async(request,response)=>{
        const{name,venue,description} = request.body;
        await knex('events').where('id',request.params.id).update({name,venue,description});
        request.flash('success', 'Event Updated');
        response.redirect('/admin/events/index');
    },
    delete:async(request,response)=>{
        await knex('events').where('id',request.params.id).del();
        request.flash('success', 'Event Deleted Successfully');
        response.redirect('/admin/events/index');        
    }
};