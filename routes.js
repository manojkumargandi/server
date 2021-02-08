const app = require('../server');

const controller = require('./controllers/main');

app.get('/', controller.homefunction);

app.get('/path/*', controller.getContents);

app.get('/path', controller.getmainContent);

