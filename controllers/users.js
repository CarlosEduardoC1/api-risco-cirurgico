'use-strict';

const sqlite = require('sqlite3').verbose();
const models = require('../models/users');


exports.save = async (req, res, next) => {
    var db = new sqlite.Database('appdrrc.S3DB');
    db.run(models.insert,
        req.body.nome
        , req.body.email
        , req.body.password
        , req.body.appID
        , req.body.type
        , (err) => {
            if (err) { db.close(); res.status(400).json({ msg: "Não foi possível cadastrar usuário", status: 400, erro: err }); console.log(err); }
            else { db.close(); res.status(200).json({ msg: "Usuário cadastrado com sucesso!", status: 200 }); }
        });
}

exports.auth = async (req, res, next) => {
    var db = new sqlite.Database('appdrrc.S3DB');
    db.get(models.find, req.body.email, (err, row) => {
        if (err) { res.status(400).json({ msg: "Não foi possível autenticar", status: 400, erro: err }); console.log(err); }
        else if (row) {
            if (req.body.password === row.password) {
                db.run(models.updateAPPID, req.body.appID, req.body.email, (err) => {
                    if (err) { db.close(); res.status(400).json({ msg: "erro" }); }
                    else {
                        db.close();
                        res.status(200).json({ status: 200, tipo: row.type, id: row.id });
                    }
                })
            }
            else { db.close(); res.status(400).json({ msg: "erro" }); }

        }
        else { db.close(); res.status(400).json({ msg: "no row" }); }
    })
}

exports.update = async (req, res, next) => {
    var db = new sqlite.Database('appdrrc.S3DB');
    db.run(models.update,
        req.body.nome
        , req.body.email
        , req.body.password
        , req.body.appID
        , req.body.id
        , (err) => {
            if (err) { db.close(); res.status(400).json({ msg: "Não foi possível atualizar usuário", status: 400, erro: err }); console.log(err); }
            else { db.close(); res.status(200).json({ msg: "Usuário atualizado com sucesso!", status: 200 }); }
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
    db.all(models.select
        , (err, rows) => {
            if (err) { db.close(); res.status(400).json({ msg: "Não foi possível deletar usuário", status: 400, erro: err }); console.log(err); }
            else { db.close(); res.status(200).json(rows); }
        });
}

exports.comuns = async (req, res, next) => {
    var db = new sqlite.Database('appdrrc.S3DB');
    db.all(models.comuns, (err, rows) => {
        if (err) { db.close(); res.status(400).json({ msg: "erro" }) }
        else { db.close(); res.status(200).json(rows) }
    })
}

exports.appid = async (req, res, next) => {
    var db = new sqlite.Database('appdrrc.S3DB');
    db.all(models.idAdm, (err, rows) => {
        if (err) { db.close(); res.status(400).json({ msg: "erro" }) }
        else { db.close(); res.status(200).json(rows) }
    })
}