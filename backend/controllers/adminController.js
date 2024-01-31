const knexoption = require('../knexfile');
const knex = require('knex')(knexoption);
const crypt = require('apache-crypt');
const path =require('path');
module.exports = {
        //The Admininistrative DashBoard Page
    index:async (request, response)=>{
        const members = await knex('members').select('*').orderBy('id','desc').limit(5);
        const count = await knex('members').count('id as total');
        const events = await knex('events').orderBy('id','desc').limit(5);
        const eventCount = await knex('events').count('id as total');
        const sermons = await knex('sermons')
        .join('categories','categories.id','=','sermons.category_id')
        .select('sermons.title as title','sermons.contents as contents','categories.name as category')
        .orderBy('sermons.id','desc').limit(5);
        const sermonsCount = await knex('sermons').count('id as count')
        response.render('admin/index',{members,count,events,eventCount,sermons,sermonsCount:sermonsCount[0].count});
        
    },
        //Get Registration Form
    getSignup:(request,response)=>{
        response.render('admin/signup',{error:request.flash('error')});
    },

        //Handle Registrations Data and commits to Dataabase
    postSignup:(request,response)=>{
        const{username,email,password} = request.body;
        const hashedPassword = crypt(password,10);
        knex('admins').insert({
            username:username.toLowerCase(),
            password:hashedPassword,
            email:email
        }).then(saved=>{
            request.flash('success', 'Registration Successful! Please Login');
            response.redirect('/admin/signin');})
        .catch(error=>{
            request.flash('error','An error occured!Try again'); 
            response.redirect('/admin/signup');});
    },

        //get Login form
    getSignin:(request,response)=>{
        response.render('admin/signin',{
            success:request.flash('success'),
            error:request.flash('error')});
    },

    //Handles sign in 
    postSignin:async(request,response)=>{
        const {user, password} = request.body;
        const hashedPassword = crypt(password,10);
        const admin = await knex('admins').select('id','username','password','image')
        .where('username', user.toLowerCase()).orWhere('password',hashedPassword);
        if(admin.length!=0){
            if(user.toLowerCase()==admin[0].username){
                if(hashedPassword==admin[0].password){
                    request.session.adminname = admin[0].username;
                    request.session.adminid=admin[0].id;
                    request.session.adminimage = admin[0].image;
                    response.redirect('/admin/dashboard');
                } else{
                    request.flash('error','Password Doesn\'t match');
                    return response.redirect('/admin/signin');
                }
            } else {
                request.flash('error','Username Doesn\'t match');
                response.redirect('/admin/signin');
            }
        }else{
            request.flash('error', 'UserName or Password doesn\'t match');
            response.redirect('/admin/signin');
        }
        
        
    },

    //Get admin Profile
    show:async(request, response)=>{
        const admins = await knex('admins').where('id',request.params.id);
        response.render('admin/account',{admin:admins[0]});
        
    },
    //update admin Profile

    update:async(request, response)=>{
       const {user,email,hidden}=request.body;
       let images = {};
       //if request.files is populated
       if(request.files){
            const {image} = request.files;
            images = image;
            images.mv(path.resolve('public/assets/images',images.name));
            await knex('admins').where('id', request.params.id)
            .update({
                username:user,
                email:email,
                image:`/assets/images/${images.name}`
                });
       }else{
            await knex('admins').where('id', request.params.id)
            .update({
                username:user,
                email:email,
                image:hidden
                });
       }
       
       
       response.redirect('/admin/dashboard');

    },
    //logout
    logout:(request,response)=>{
        request.session.destroy();
        response.redirect('/admin/signin');
    }
};