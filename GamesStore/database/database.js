const Sequelize = require('sequelize');

const connection = new Sequelize(
    'games_store_bd',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'

    }
);

// Categoria.sync({force:true});


module.exports = connection;