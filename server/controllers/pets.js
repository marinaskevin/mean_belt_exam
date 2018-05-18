const mongoose = require('mongoose');
const Pet = mongoose.model('Pet');

module.exports = {
	showPets: function(req,res) {
	  Pet.find({}).sort({type: 1}).exec(function(err, Pets) {
	    if(err)
	    {
	    	console.log("Error in finding Pets",err);
			var errors = [];
			for(var key in err.errors)
			{
				errors.push(err.errors[key].message);
			}
			res.json({ message: "Error", error: errors });
		}
	    else
	    {
	    	res.json(Pets);
	    }
	  })
	},
	showPet: function(req,res,id) {
	  Pet.findOne({_id: id},function(err, Pet) {
	    if(err)
	    {
	    	console.log("Error in finding Pet",err);
			var errors = [];
			for(var key in err.errors)
			{
				errors.push(err.errors[key].message);
			}
			res.json({ message: "Error", error: errors });
		}
	    else
	    {
	    	res.json(Pet);
	    }
	  })
	},
	newPet: function(req,res,pet) {
		var newPet = new Pet(pet);
		newPet.save(function(err,Pet){
			if(err)
			{
		    	console.log("Error in adding Pet",err);
				var errors = [];
				for(var key in err.errors)
				{
					errors.push(err.errors[key].message);
                }
                if(err.name === 'MongoError' && err.code === 11000)
                {
                    errors.push("A pet with that name already lives at the shelter.");
                }
				res.json({ message: "Error", error: errors });
			}
			else
			{
				res.json({ message: "Saved Pet!", Pet: Pet });
			}
		})
	},
	updatePet: function(req,res,id,pet) {
		Pet.updateOne({_id: id},{$set: pet},{runValidators: true},function(err,Pet){
			if(err)
			{
				var message = "Error in updating pet";
				console.log(message,err);
				var errors = [];
				for(var key in err.errors)
				{
					errors.push(err.errors[key].message);
				}
                if(err.name === 'MongoError' && err.code === 11000)
                {
                    errors.push("A pet with that name already lives at the shelter.");
                }
				res.json({ message: message, error: errors });
			}
			else
			{
				res.json({ message: "Success", Pet: Pet });
			}
		})
	},
	removePet: function(req,res,id) {
		Pet.remove({_id: id},function(err,Pet){
			if(err)
			{
				var message = "Error in removing Pet";
		    	console.log(message,err);
				var errors = [];
				for(var key in err.errors)
				{
					errors.push(err.errors[key].message);
				}
				res.json({ message: meesage, error: errors });
			}
			else
			{
				res.json({ message: "Removed Pet!", Pet: Pet });
			}
		})
	},
	likePet: function(req,res,id) {
		Pet.findOneAndUpdate({"_id": id},{"$inc": {"likes": 1}},function(err,Pet){
			if(err)
			{
				var message = "Error in changing vote total";
		    	console.log(message,err);
				var errors = [];
				for(var key in err.errors)
				{
					errors.push(err.errors[key].message);
				}
				res.json({ message: message, error: errors });
			}
			else
			{
				res.json(Pet);
			}
		})
    },
}