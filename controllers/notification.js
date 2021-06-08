module.exports = {
    sendNotification(data) {
        let retorno = '';
        var headers = {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Basic YTI1MGEyZTMtZWJkNC00ZjUxLWI4YjctZDBiNWVlNjVhYjE5"
        };

        var options = {
            host: "onesignal.com",
            port: 443,
            path: "/api/v1/notifications",
            method: "POST",
            headers: headers
        };

        var https = require('https');
        var req = https.request(options, function (res) {
            res.on('data', function (data) {
                retorno = "Ok";
                // console.log("Response:");
                // console.log(JSON.parse(data));
            });
        });

        req.on('error', function (e) {
            retorno = "error";
            // console.log("ERROR:");
            // console.log(e);
        });

        req.write(JSON.stringify(data));
        req.end();
        return retorno;
    }
}