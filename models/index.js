exports.createTableUser = `CREATE TABLE IF NOT EXISTS 'users' ('id' INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL
, 'nome' TEXT , 'email' TEXT , 'password' TEXT , 'appID' TEXT, 'type' TEXT) `;

exports.createTablePaciente = `CREATE TABLE IF NOT EXISTS 'paciente' ('id' INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL
, 'nome' TEXT , 'status' TEXT , 'id_medico' INTEGER NOT NULL, 'dateTime' DATETIME, 'fone' TEXT, FOREIGN KEY (id_medico) REFERENCES users) `