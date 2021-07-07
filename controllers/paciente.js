'use-strict';

const sqlite = require('sqlite3').verbose();
const models = require('../models/paciente');
const users = require('../models/users');


exports.save = async (req, res, next) => {

    var db = new sqlite.Database('appdrrc.S3DB');
    db.run(models.insert,
        req.body.nome
        , req.body.status
        , req.body.id_medico
        , req.body.dateTime
        , req.body.fone
        , (err) => {
            if (err) { db.close(); res.status(400).json({ msg: "Não foi possível cadastrar paciente", status: 400, erro: err }); console.log(err); }
            else { db.close(); res.status(200).json({ msg: "Paciente cadastrado com sucesso!", status: 200 }); }
        });
}

exports.update = async (req, res, next) => {
    console.log(req.body);
    var db = new sqlite.Database('appdrrc.S3DB');
    db.run(models.update,
        req.body.status
        , req.body.dateTime
        , req.body.id
        , req.body.id_medico
        , async (err) => {
            if (err) { db.close(); res.status(400).json({ msg: "Não foi possível atualizar status", status: 400, erro: err }); console.log(err); }
            else {
                await db.get(users.appId, req.body.id_medico, (err, rows) => {
                    if (err) { db.close(); res.status(400).json({ msg: "Não foi possível atualizar status", status: 400, erro: err }); }
                    else { db.close(); res.status(200).json({ msg: "Status atualizado com sucesso!", status: 200, rows }); };
                });
            }
        });
}

exports.delete = async (req, res, next) => {

    var db = new sqlite.Database('appdrrc.S3DB');
    db.run(models.delete
        , req.params.id
        , (err) => {
            if (err) { db.close(); res.status(400).json({ msg: "Não foi possível deletar usuário", status: 400, erro: err }); console.log(err); }
            else { db.close(); res.status(200).json({ msg: "Usuário deletado com sucesso!", status: 200 }); }
        });
}

exports.select = async (req, res, next) => {

    var db = new sqlite.Database('appdrrc.S3DB');
    db.all(models.selectId
        , req.params.id
        , (err, rows) => {
            if (err) { db.close(); res.status(400).json({ msg: "Não foi possível deletar usuário", status: 400, erro: err }); console.log(err); }
            else { db.close(); res.status(200).json(rows); }
        });
}

exports.search = async (req, res, next) => {

    var db = new sqlite.Database('appdrrc.S3DB');
    db.all(models.select
        , req.params.id
        , ['%' + req.params.nome + '%']
        , (err, rows) => {
            if (err) { db.close(); res.status(400).json({ msg: "Não foi possível deletar usuário", status: 400, erro: err }); console.log(err); }
            else { db.close(); res.status(200).json(rows); }
        });
}

exports.selectAdm = async (req, res, next) => {

    var db = new sqlite.Database('appdrrc.S3DB');
    db.all(models.selectAdm, (err, rows) => {
        if (err) { db.close(); res.status(400).json({ msg: "Não foi possível encontrar usuário", status: 400, erro: err }); console.log(err); }
        else { db.close(); res.status(200).json(rows); }
    })
}

exports.searchAdm = async (req, res, next) => {

    var db = new sqlite.Database('appdrrc.S3DB');
    db.all(models.searchAdm
        , ['%' + req.params.nome + '%']
        , (err, rows) => {
            if (err) { db.close(); res.status(400).json({ msg: "Não foi possível deletar usuário", status: 400, erro: err }); console.log(err); }
            else { db.close(); res.status(200).json(rows); }
        });
}