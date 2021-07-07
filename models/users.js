exports.insert = `INSERT INTO users (nome, email, password, appID, type) VALUES(?,?,?,?,?)`;

exports.update = `UPDATE users SET nome = ?, email = ?, password = ?, appID = ? WHERE id = ?`;

exports.delete = `DELETE FROM users WHERE id = ?`;

exports.select = `SELECT nome, email, type, id FROM users`;

exports.find = `select password, type, id from users where email = ?`;

exports.appId = `SELECT appID FROM users WHERE id = ?`;

exports.updateAPPID = `UPDATE users SET appID = ? WHERE email = ?`;

exports.comuns = "SELECT id, nome FROM users";

exports.idAdm = "select appID from users where type = 'AD'";

exports.keyupdate = "UPDATE users SET password = ? WHERE id = ?";