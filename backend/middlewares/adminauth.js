module.exports = {
    isLoggedIn:(req,res,next)=>{
        if (req.session.adminname && req.session.adminid){
            res.redirect('/admin/dashboard');   
        }
        next();
    },

    notLoggedIn:(req,res,next)=>{
        if (!req.session.adminname && !req.session.adminid){
            res.redirect('/admin/signin');   
        }
        next();
    }
};