const Sequelize = require('sequelize');

const connection = require('../database/database');

const Categoria = connection.define(
        'tbl_categoria',
        {
            nome_categoria:{
                type: Sequelize.STRING(100),
                allowNull: false
            }
        }
);

//  Categoria.async({force:true});

module.exports = Categoria;



