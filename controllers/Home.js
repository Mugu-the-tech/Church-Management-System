const { eventNames } = require('process');
const eventsModel = require('../model/events');

exports.getEvents = async function (req, res) {
    let searchStr = {};

    if (req.body.search && req.body.search.value) {
        const regex = new RegExp(req.body.search.value, "i");
        searchStr = { $or: [{ 'eventtitle': regex }, { 'eventsubtitle': regex }, { 'datestart': regex }, { 'dateend': regex }] };
    }

    let recordsTotal = 0;
    let recordsFiltered = 0;

    try {
        recordsTotal = await eventsModel.countDocuments({});
       // console.log(recordsTotal);

        recordsFiltered = await eventsModel.countDocuments(searchStr);
       // console.log(recordsFiltered);
       // console.log(req.body.start);
       // console.log(req.body.length);

        const results = await eventsModel.find(searchStr);

        const data = JSON.stringify({
            "draw": req.body.draw,
            "recordsFiltered": recordsFiltered,
            "recordsTotal": recordsTotal,
            "data": results
        });

        res.send(data);
    } catch (err) {
        console.log('Error while getting results: ' + err);
        res.status(500).send('Internal Server Error');
    }
};
