const Activity = require('../models/Activity');
const MoveController = require('../controllers/MoveController');

exports.findAll = (req, res) => {
    Activity.find().then(activities => {
        res.send(activities);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong while retrieving items"
        });
    });
};

exports.create = (req, res) => {

    if(!req.body) {
        return res.status(400).send({
            message: "Item content can not be empty"
        });
    }

    const activity = new Activity({
        name: req.body.name,
        details: req.body.details,
        tags: req.body.tags,
        image: req.body.image,
        moves: req.body.moves
    });

    activity.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the activity"
        });
    });
};

exports.findOne = (req, res) => {
    Activity.findById(req.params.activity_id).then(activity => {

        if(!activity) {
            return res.status(404).send({
                message: "Item not found with id " + req.params.activity_id
            });            
        }
        
        res.send(activity);

    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Item not found with id " + req.params.activity_id
            });                
        }
        return res.status(500).send({
            message: "Something went wrong retrieving product with id " + req.params.activity_id
        });
    });
};

exports.update = (req, res) => {

    if(!req.body) {
        return res.status(400).send({
            message: "Item content can not be empty"
        });
    }

    const activity = new Activity({
        name: req.body.name,
        details: req.body.details,
        tags: req.body.tags,
        image: req.body.image,
        moves: req.body.moves
    });

    Activity.findByIdAndUpdate(req.params.activity_id, {
        name: req.body.name,
        details: req.body.details,
        tags: req.body.tags,
        image: req.body.image,
        moves: req.body.moves
    }, {new: true})
    .then(activity => {

        if(!activity) {
            return res.status(404).send({
                message: "Item not found with id " + req.params.activity_id
            });
        }

        res.send(activity);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Item not found with id " + req.params.activity_id
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.activity_id
        });
    });
};

exports.delete = (req, res) => {
    Activity.findByIdAndDelete(req.params.activity_id)
    .then(activity => {

        if(!activity) {
            return res.status(404).send({
                message: "Item not found with id " + req.params.activity_id
            });
        }

        res.send({message: "Item deleted successfully!"});
    }).catch(err => {

        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Item not found with id " + req.params.activity_id
            });                
        }
        return res.status(500).send({
            message: "Could not delete item with id " + req.params.activity_id
        });
    });
};

exports.findByTag = (req, res) => {
    Activity.find({ tags: { $eq: req.params.tag_name } }).then(activities => {
        
        res.send(activities);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong while retrieving items"
        });
    });
};