const AWS = require("aws-sdk");
AWS.config.update({ region: 'ca-central-1' });

const dynamodb = new AWS.DynamoDB();

let docClient = new AWS.DynamoDB.DocumentClient();
let fetchOneByKey = function () {
    var params = {
        TableName: "vehiclesdata",
        Key: {
            "Rating Count": "0"
        }
    };
    docClient.get(params, function (err, data) {
        if (err) {
            console.log("users::fetchOneByKey::error - " + JSON.stringify(err, null, 2));
        }
        else {
            console.log("users::fetchOneByKey::success - " + JSON.stringify(data, null, 2));
        }
    })
}


fetchOneByKey();