const mongoose = require('mongoose') //mapea documentos em js para ir para o mongo e abrir uma conexao com o mongo
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/todo')