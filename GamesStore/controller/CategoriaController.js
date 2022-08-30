const express = require('express');

const router = express.Router();

const modelCategoria = require('../model/CategoriaModel');

router.get('/listarCategoriaJogo', (req, res)=>{

    modelCategoria.findAll()
        .then(
            (categorias)=>{
                return res.status(200).json(categorias);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar os dados de categoria',
                    erroBancoDados: erro
                });
            }
        );

});

router.get('/listarCategoriaJogo/:id',(req, res)=>{

    let {id} = req.params;

    modelCategoria.findByPk(id)
        .then(
            (categoria)=>{
                res.status(200).json(categoria);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar os dados de categoria',
                    erroBancoDados: erro
                });
            }
        );

});

router.post('/inserirCategoriajogo', (req, res)=>{

        let {nome_categoria} = req.body;

        modelCategoria.create(
            {nome_categoria}
        ).then(
            ()=>{
                return res.status(201).json({
                    erroStatus: false,
                    menssagemStatus: 'Categoiria inserida com sucesso!'
                });
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    errorMessagem: 'Houve um erro ao cadastrar a categoria',
                    erroBancoDados: erro
                });
            }
        );
        
        
    
});

router.put('/alterarCategoriaJogo', (req, res)=>{

    let {id, nome_categoria} = req.body;

    modelCategoria.update(
        {nome_categoria},
        {where:{id}}
    ).then( ()=>{

        return res.status(201).json({
            erroStatus: false,
            menssagemStatus: 'Categoria alterada com sucesso!'
        });

    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao alterar a categoria',
                        erroBancoDados: erro
                    });
        }
    );

});

router.delete('/excluirCategoriaJogo/:id', (req, res)=>{

    let {id} = req.params;

    modelCategoria.destroy(
        {where: {id}}
    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Categoria excluida com sucesso!'
        });

    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao excluir a categoria',
                        erroBancoDados: erro
                    });
        }
    );

});
module.exports = router;