const mongoose = require ('mongoose');

const schemaOptions ={
    timestamps:true,
    toJSON:{
        virtuals: true
    },
    toObject:{
        virtuals:true
    }
};

//moongoose  schema for registration
const EventsSchema = new mongoose.Schema({
    eventtitle:String,
    eventsubtitle:String,
    datestart:String,
    dateend:String
  },schemaOptions);
  const Event = mongoose.model('Events',EventsSchema)
  module.exports=Event;
