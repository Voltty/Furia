var medidaModel = require("../models/medidaModel");

function buscarCSGO(req, res) {
    var idVotacao = req.params.idVotacao;

    console.log(`Recuperando os dados`);

    medidaModel.buscarCSGO(idVotacao).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum dado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os dados.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function buscarVL(req, res) {
    var idVotacao = req.params.idVotacao;

    console.log(`Recuperando os dados`);

    medidaModel.buscarVL(idVotacao).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum dado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os dados.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function buscarRL(req, res) {
    var idVotacao = req.params.idVotacao;

    console.log(`Recuperando os dados`);

    medidaModel.buscarRL(idVotacao).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum dado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os dados.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function buscarAPEX(req, res) {
    var idVotacao = req.params.idVotacao;

    console.log(`Recuperando os dados`);

    medidaModel.buscarAPEX(idVotacao).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum dado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os dados.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function buscarLOL(req, res) {
    var idVotacao = req.params.idVotacao;

    console.log(`Recuperando os dados`);

    medidaModel.buscarLOL(idVotacao).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum dado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os dados.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
module.exports = {
    buscarCSGO,
    buscarVL,
    buscarAPEX,
    buscarRL,
    buscarLOL
}