const mongoose = require('mongoose');

module.exports = function() {
	var PetSchema = new mongoose.Schema({
	    name:  {
			type: String,
			required:[true,'Please enter a name.'],
            minlength:[3,'Name field must have at least 3 characters.'],
            unique: true
		},
	    type:  {
			type: String,
			required:[true,'Please enter a type.'],
			minlength:[3,'Type field must have at least 3 characters.']
		},
	    description:  {
			type: String,
			required:[true,'Please enter a description.'],
			minlength:[3,'Description field must have at least 3 characters.']
		},
	    skill1: {
            type: String
        },
	    skill2: {
            type: String
        },
	    skill3: {
            type: String
        },
        likes: {
            type: Number,
            default: 0
        }
	}, {timestamps: true });
	mongoose.model('Pet', PetSchema);
	var Pet = mongoose.model('Pet');
}