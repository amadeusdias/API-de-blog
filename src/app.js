const express = require('express');
const routeLogin = require('./routes/login.route');
const routeUser = require('./routes/user.route');
const routerCategory = require('./routes/category.route');
// ...

const app = express();

app.use(express.json());
// ...
app.use('/login', routeLogin);
app.use('/user', routeUser);
app.use('/categories', routerCategory);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
