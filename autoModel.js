var mongoose = require('mongoose');

// Setup schema

var autoSchema = mongoose.Schema({
    id: String,
    marca: String,
    submarca: String,
    descripcion: String,
    modelos: Array,
});

// Export Auto Model

var Auto = module.exports = mongoose.model('auto', autoSchema)

module.exports.get = function (callback, limit) {
    Auto.find(callback).limit(limit);
}