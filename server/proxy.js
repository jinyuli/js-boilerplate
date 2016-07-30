kApi = require('mock-api-server');
var api = new MockApi({"port": 5001});

api.responseTo('/api/login')
    .with({
    });


