const Student = require('../models/student.model')

module.exports.findAllThings = (req, res)=>{
    Student.find()
        .then(allthings => {
            console.log("TRYIING TO FIND ALL THE Thangggsss")
            res.json({results: allthings}) 
        })
        .catch(err => res.json(err))
}

module.exports.createOneThing = (req,res)=>{
    Student.create(req.body)
        .then(newlyCreatedThanggg=> res.json({results: newlyCreatedThanggg}))
        .catch(err => res.json(err))
}


module.exports.findOneThing = (req,res)=>{
    Student.findOne({_id: req.params.thingid})
        .then(oneThing => res.json({results: oneThing}))
        .catch(err => res.json(err))
}

module.exports.updateOneThing = (req,res)=>{
    Student.findOneAndUpdate(
        {_id: req.params.thingid}, 
        req.body,
        {new:true, runValidators:true
        })
        .then(updatedThing => res.json({results: updatedThing}))
        .catch(err => res.json(err))
}


module.exports.deleteThing = (req,res)=>{
    Student.deleteOne({_id: req.params.thingid})
        .then(deletedResult => res.json({results: deletedResult})  )
        .catch(err => res.json(err))
}
