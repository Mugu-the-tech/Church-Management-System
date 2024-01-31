options = {
    client:'mysql',
    version:'10.1.38',
    connection:{
        host:'localhost',
        user:'root',
        password:'',
        database:'chms'
    },
    migrations:{
        directory:__dirname+'/db/migrations'
    },

    seeds:{
        directory:__dirname+'/db/seeds'
    }
};

module.exports = options;