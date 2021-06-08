const nodemailer = require('nodemailer');
const smtp_config = require('../config/smtp');

const transporter = nodemailer.createTransport({
    host: smtp_config.host,
    port: smtp_config.port,
    auth: {
        user: smtp_config.user,
        pass: smtp_config.pass
    },
    tls: {
        rejectUnauthorized: false
    }
});

exports.envia = async (req, res, next) => {

    await transporter.sendMail({
        text: "Olá! " + req.body.name
            + ", seu cadastro foi realizdo no APP Risco Cirurgico."
            + "\n\n"
            + " Sua senha de acesso é: " + req.body.senha
            + "\n\n" + "Não informe esta senha de acesso para ninguém! \n\n"
            + "Seja Bem vindo!"
            + "\n\n\n" + "Este é um e-mail automático. Não responda",
        subject: "Cadastro em RiscoCirurgico APP",
        from: 'naorespondariscocirurgicoapp@gmail.com',
        to: req.body.email
    })
        .then((response) => { 
            console.log(response);
            res.status(200).json({ msg: "enviado" }); })
        .catch((error) => { 
            console.log(error);
            res.status(200).json({ msg: "nnenviado" }); });

}