const express = require('express');
const cors = require('cors');
const sqlite = require('sqlite3').verbose();

const query = require("./models");
const app = express();

const users = require("./routes/users");
const paciente = require("./routes/paciente");
const notification = require('./routes/notification');
const mail = require('./routes/sendmail');


app.use(cors());
app.options('*', cors());
app.use(express.json());

app.use('/users', users);
app.use('/paciente', paciente);
app.use('/notificaiton', notification);
app.use('/mail', mail);

app.listen(process.env.PORT || 3060, function () {
    var db = new sqlite.Database('appdrrc.S3DB', (err) => {
        if (err) console.log(err);
        else {
            db.run(query.createTablePaciente, (err) => { if (err) console.log(err); else console.log("Tabela Paciente criada com sucesso") });
            db.run(query.createTableUser, (err) => { if (err) console.log(err); else console.log("Tabela Users criada com sucesso") });
        }
    });

    console.log("O servidor está de pé na porta %d!", this.address().port, app.settings.env);
})