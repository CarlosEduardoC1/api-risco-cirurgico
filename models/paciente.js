exports.insert = `INSERT INTO paciente (nome, status, id_medico, dateTime, fone) VALUES(?,?,?,?,?)`;

exports.update = `UPDATE paciente SET status = ? WHERE id = ? AND id_medico = ?`;

exports.delete = `DELETE FROM paciente WHERE id = ?`;

exports.select = `SELECT nome, status, dateTime, fone, id FROM paciente WHERE id_medico = ?  AND nome LIKE ? `;

exports.selectId = `SELECT nome, status, dateTime, fone, id FROM paciente WHERE id_medico = ?`;

exports.selectAdm = `SELECT * from paciente`;

exports.searchAdm = "SELECT * from paciente WHERE nome LIKE ?";