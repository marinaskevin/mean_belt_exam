const pets = require('../controllers/pets.js')

module.exports = function(app) {

app.get('/data/pets', function(req, res) {
	pets.showPets(req,res);
})

app.get('/data/pets/:id', function(req, res) {
	pets.showPet(req,res,req.params.id);
})

app.post('/data/pets', function(req, res) {
	pets.newPet(req,res,req.body);
})

app.put('/data/pets/:id/edit', function(req, res) {
	pets.updatePet(req,res,req.params.id,req.body);
})

app.delete('/data/pets/:id/remove', function(req, res) {
	pets.removePet(req,res,req.params.id);
})

app.put('/data/like/:id', function(req, res) {
	pets.likePet(req,res,req.params.id);
})

}