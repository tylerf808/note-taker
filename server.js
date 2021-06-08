const express = require('express');
const app = express();

const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const server = http.createServer(handleRequest);

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});