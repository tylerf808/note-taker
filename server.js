const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const PORT = 3001;

app.use(express.static("public"));
app.use(express.json());

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});